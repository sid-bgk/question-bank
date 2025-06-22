import { useEffect } from 'react';

interface WorkboxEvent {
  type: string;
  wasWaitingBeforeRegister?: boolean;
}

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.workbox !== undefined
    ) {
      const wb = window.workbox;

      // Add event listeners to handle PWA lifecycle
      const promptNewVersionAvailable = () => {
        // `event.wasWaitingBeforeRegister` will be false if this is the first time the updated service worker is waiting.
        // When `event.wasWaitingBeforeRegister` is true, a previously updated service worker is still waiting.
        // You may want to customize the UI prompt accordingly.
        if (confirm('A new version of this app is available. Reload to update?')) {
          wb.messageSkipWaiting();
          window.location.reload();
        }
      };

      wb.addEventListener('installed', (event: WorkboxEvent) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      wb.addEventListener('controlling', (event: WorkboxEvent) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      wb.addEventListener('activated', (event: WorkboxEvent) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      // A common UX pattern for progressive web apps is to show a banner when a service worker has updated and waiting to install.
      // NOTE: MUST set skipWaiting to false in next.config.js so that the below event handler properly fires;
      wb.addEventListener('waiting', (event: WorkboxEvent) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
        promptNewVersionAvailable();
      });

      wb.addEventListener('message', (event: WorkboxEvent) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      wb.register();
    }
  }, []);

  return null;
} 