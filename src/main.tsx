/* eslint-disable @typescript-eslint/no-floating-promises */
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { AppThemeProvider } from "./_shared/theme/ThemeContext.tsx";
import store from "./context/store.ts";
// import "./_shared/theme/defaults.css";
// import "react-loading-skeleton/dist/skeleton.css";
// import "react-multi-carousel/lib/styles.css";
import "rsuite/dist/rsuite.min.css";

store().then((_store) => {
  const container = document.getElementById("root") as HTMLElement;
  const root = createRoot(container);
  root.render(
    <Provider store={_store}>
      <AppThemeProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AppThemeProvider>
    </Provider>
  );
});
