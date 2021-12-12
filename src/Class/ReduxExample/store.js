import { createStore, applyMiddleware } from "redux";
// 引入reduce
import reduce from './reduce';

import thunk from "redux-thunk";

const store = createStore(reduce, applyMiddleware(thunk));

export default store;