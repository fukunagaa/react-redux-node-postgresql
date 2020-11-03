export const data = {
  mineTypes: {
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    ico: "",
    json: "application/json",
  },
  port: 8080,
  data: [
    {
      name: "sato",
      card: "visa",
      timeLimit: "2020/02/02",
    },
    {
      name: "taro",
      card: "master",
      timeLimit: "2024/12/02",
    },
    {
      name: "ono",
      card: "amex",
      timeLimit: "2021/05/29",
    },
    {
      name: "utida",
      card: "jcb",
      timeLimit: "2023/02/02",
    },
  ],
  postgres: {
    option: {
      user: "postgres",
      password: "postgres",
      host: "localhost",
      port: "5432",
      database: "postgres",
    },
  },
};
