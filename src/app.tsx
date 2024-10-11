import { createRoot } from "react-dom/client";
import { SettingsProvider } from "./contexts/SettingsContext";
import ThemeProvider from "./theme";
import Views from "./views";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { BrowserProvider } from "./contexts/BrowserContext";
import { PersistGate } from "redux-persist/es/integration/react";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <SettingsProvider>
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserProvider>
            <Views />
          </BrowserProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </SettingsProvider>
);
