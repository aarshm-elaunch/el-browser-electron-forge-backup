import { createRoot } from "react-dom/client";
import { SettingsProvider } from "./contexts/SettingsContext";
import ThemeProvider from "./theme";
import Views from "./views";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <SettingsProvider>
    <ThemeProvider>
      <Views />
    </ThemeProvider>
  </SettingsProvider>
);
