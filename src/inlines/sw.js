
/// sw.js
if ("serviceWorker" in navigator) {
    console.log("Will the service worker register?");
    navigator.serviceWorker
      .register("https://idealclover.top/sw.js")
      .then(function () {
        console.log("Yes, it did.");
      })
      .catch(function (err) {
        console.log("No it did not. This happened: ", err);
      });
  }