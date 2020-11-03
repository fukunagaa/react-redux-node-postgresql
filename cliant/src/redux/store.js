import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import { createPromise } from "redux-promise-middleware";
import { createLogger } from "redux-logger";

const error = (store) => (next) => (action) => {
    try {
      // この処理を追加することで次の処理(reducer)に入る
      next(action);
    } catch (e) {
      console.log("ERROR was occured", e);
    }
  };

const middleware = applyMiddleware(createPromise(), createLogger(), error);

export default createStore(reducers, middleware);
