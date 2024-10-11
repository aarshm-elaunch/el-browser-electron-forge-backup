interface HTMLWebViewElement extends HTMLElement {
  src: string;
  setZoomFactor: (factor: number) => void;
  canGoBack(): boolean;
  canGoForward(): boolean;
  goBack(): void;
  goForward(): void;
  reload(): void;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}
interface Window {
  electron: import("./preload").ElectronAPI;
}

declare module "redux-persist/lib/storage";

declare module "redux-persist/es/persistReducer";

declare module "redux-persist/es/persistStore";

declare module 'redux-persist/es/integration/react'
