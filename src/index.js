import "./global.css";
import {App} from "./App";
import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {store, persistor} from "./store";
import {PersistGate} from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={ store }>
        <PersistGate persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
);
