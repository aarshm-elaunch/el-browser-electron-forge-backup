import { createRoot } from "react-dom/client";
import { SettingsProvider } from "./contexts/SettingsContext";
import ThemeProvider from "./theme";
import Views from "./views";
import { BrowserProvider } from "./contexts/BrowserContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <SettingsProvider>
    <ThemeProvider>
      <BrowserProvider>
        <Views />
      </BrowserProvider>
    </ThemeProvider>
  </SettingsProvider>
);
