import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./Config/apolloClient";
import { Provider } from "react-redux";
import {store} from "./Components/App/store";
import {PersistGate} from "redux-persist/integration/react"
import {persistStore} from "redux-persist";

let persistor = persistStore(store)

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
        <App />
          </PersistGate>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
