/* eslint-disable @typescript-eslint/no-explicit-any */
// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";

// Expose ipcRenderer methods in a cleaner structure
contextBridge.exposeInMainWorld("electron", {
  send: (channel: string, data: any) => ipcRenderer.send(channel, data),
  on: (channel: string, func: (...args: any[]) => void) => {
    ipcRenderer.on(channel, (event, ...args) => func(...args));
  },
  once: (channel: string, func: (...args: any[]) => void) => {
    ipcRenderer.once(channel, (event, ...args) => func(...args));
  },
});
