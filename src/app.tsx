import { createRoot } from "react-dom/client";
import { SettingsProvider } from "./contexts/SettingsContext";
import ThemeProvider from "./theme";
import Views from "./views";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserProvider } from "./contexts/BrowserContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <SettingsProvider>
    <ThemeProvider>
      <Provider store={store}>
        <BrowserProvider>
          <Views />
        </BrowserProvider>
      </Provider>
    </ThemeProvider>
  </SettingsProvider>
);
