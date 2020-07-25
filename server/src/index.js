const http = require("http");
const fs = require("fs");
const url = require("url");
const qs = require("querystring");
const config = require("./utils/config").data;
const todoRouter = require("./routes/todoRouter");

const mineTypes = config.mineTypes;

async function setResponseFile(res, contextType, filePath, encoding) {
  res.writeHead(200, { "Content-Type": contextType });
  res.write(fs.readFileSync(filePath, encoding));
  res.end();
  console.info("fileレスポンスを返しました。処理を終了させます。");
}

async function setResponse(res, contextType, resData, encoding) {
  res.writeHead(200, { "Content-Type": contextType });
  res.write(resData, encoding);
  res.end();
  console.info("textレスポンスを返しました。処理を終了させます。");
}

const server = http.createServer(async (req, res) => {
  console.log("---------- server start ----------");
  //splitで . で区切られた配列にする
  let tmp = req.url.split(".");
  //tmp配列の最後の要素(外部ファイルの拡張子)を取得
  let ext = tmp[tmp.length - 1];
  //リクエストされたURLをサーバの相対パスへ変換する
  let path = "." + req.url;
  let pathname = url.parse(req.url).pathname;
  //リクエストされたクエリパラメータを取得
  let query = url.parse(req.url, true).query;
  let isResponse = true;
  let filePath = path;
  let contextType = mineTypes[ext];
  let encoding;
  let resData;
  console.log("pathname: " + pathname);
  switch ((mineTypes.key = ext)) {
    case "html":
    case "js":
    case "css":
      encoding = "utf-8";
      break;
    case "jpg":
    case "jpeg":
    case "png":
      encoding = "binary";
      break;
    case "json":
      encoding = "utf-8";
      break;
    case "ico":
      isResponse = false;
      break;
    default:
      encoding = "utf-8";
      contextType = "text/html";
      // GET REQUEST
      if (req.method === "GET") {
        isResponse = false;
        filePath = "./public/index.html";
        switch (pathname) {
          case "/":
            setResponseFile(res, contextType, filePath, encoding);
            break;
          default:
            setResponseFile(res, contextType, filePath, encoding);
            break;
        }
      }
      // POST REQUEST
      else if (req.method === "POST") {
        isResponse = false;
        filePath = "./public/index.html";
        console.log("POST PATH: " + path);
        let query;
        req.setEncoding("utf-8");
        // data受信イベントの発生時に断片データ(chunk)を取得
        req
          .on("data", (chunk) => {
            // JSON形式
            console.log("on data");
            query = qs.parse(chunk);
            console.log(query);
          })
          .on("end", async () => {
            isResponse = true;
            switch (pathname) {
              case "/":
                setResponseFile(res, contextType, filePath, encoding);
                break;
              case "/addTodo":
                console.log("axios addTodo");
                await todoRouter.createTodo(query.content);
                const array = await todoRouter.selectTodoAll();
                contextType = "application/json";
                resData = JSON.stringify(array);
                setResponse(res, contextType, resData, encoding);
                break;
              case "/updateTodo":
                console.log("axios updateTodo");
                await todoRouter.updateTodo(query.id, query.status);
                const updateArray = await todoRouter.selectTodoAll();
                contextType = "application/json";
                resData = JSON.stringify(updateArray);
                setResponse(res, contextType, resData, encoding);
                break;
              case "/toggleFavorite":
                console.log("axios updateFavorite");
                await todoRouter.updateFavorite(query.id, query.favorite);
                const toggleArray = await todoRouter.selectTodoAll();
                contextType = "application/json";
                resData = JSON.stringify(toggleArray);
                console.log(toggleArray);
                setResponse(res, contextType, resData, encoding);
                break;
              case "/selectTodo":
                console.log("axios selectTodo");
                let allRows = await todoRouter.selectTodoAll();
                contextType = "application/json";
                resData = JSON.stringify(allRows);
                setResponse(res, contextType, resData, encoding);
                break;
              default:
                setResponseFile(res, contextType, filePath, encoding);
                break;
            }
            return 0;
          });
      }
      break;
  }

  if (isResponse == true) {
    console.log("filePath:" + filePath);
    console.log("ext:" + ext);
    console.log("mineTypes[ext]:" + contextType);
    setResponseFile(res, contextType, filePath, encoding);
  }
});

server.listen(config.port, () => {
  console.info(
    `Listening on ${config.port} :: http://localhost:${config.port}/`
  );
});
