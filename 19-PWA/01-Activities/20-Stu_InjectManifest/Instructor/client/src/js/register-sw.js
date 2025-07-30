// Service Worker registration code

export const registerSW = () => {
  // Check that service workers are supported
if ('serviceWorker' in navigator) {
  console.log("installing service worker");
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
};
