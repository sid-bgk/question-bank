declare global {
  interface Window {
    workbox: {
      addEventListener: (event: string, callback: (event: any) => void) => void;
      messageSkipWaiting: () => void;
      register: () => void;
    };
  }
}

export {}; 