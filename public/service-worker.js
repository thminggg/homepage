if ("serviceWorker" in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  const urlPath = window.location.pathname;
  navigator.serviceWorker
    .register(`${urlPath === "/" ? "" : "/homepage"}/service-worker.js`)
    .then(
      (registration) => {
        console.log("Service worker registration succeeded:", registration);
      },
      /*catch*/ (error) => {
        console.error(`Service worker registration failed: ${error}`);
      }
    );
}
