import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 리덕스 관련 모듈 임포트
import { createStore } from "redux";
import { Provider } from "react-redux";
import todos from "./modules/todos";
import { composeWithDevTools } from "redux-devtools-extension";

// 스토어 생성
const store = createStore(todos, composeWithDevTools());
// 리덕스 적용
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
