import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

const isProduction = process.env.NODE_ENV === "production";

const composeEnhancers =
  typeof window === "object" &&
  !isProduction &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, {}, enhancer);

export default store;
