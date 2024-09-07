import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/system";
import { RouterProvider } from "react-router-dom";
import { route } from "./routes/routes.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={route} />
        </PersistGate>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);
