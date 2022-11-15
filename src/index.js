import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from './redux/state'


const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        postItem={store._state.postItem}
        dialogInfo={store._state.dialogItem}
        messages={store._state.dialogMessage}
        newMessageText={store._state.newMessageText}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>
  );
}
gjgfkf
ongamepadconnected;
kggkgl
rerenderEntireTree(store._state)

store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
