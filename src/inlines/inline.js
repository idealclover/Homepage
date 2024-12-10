// // 这里的js通过minify后直接给到index.astro

// /// 按需加载地图
// let isLoaded = false;
// let scriptElement = null;

// function loadScript() {
//   if (!isLoaded && window.innerWidth > 768) {
//     scriptElement = document.createElement("script");
//     scriptElement.src = "https://webapi.amap.com/maps?v=1.4.15";
//     document.head.appendChild(scriptElement);
//     scriptElement.onload = function () {
//       const element = document.querySelector(".map");
//       element.style.display = "block";
//       var map = new AMap.Map("map-container", {
//         center: [116.397428, 39.90923],
//         zoom: 10,
//       });
//     };
//     isLoaded = true;
//     return;
//   }

//   if (isLoaded) {
//     if (window.innerWidth <= 768) {
//       const element = document.querySelector(".map");
//       element.style.display = "none";
//     } else {
//       const element = document.querySelector(".map");
//       element.style.display = "block";
//     }
//   }
// }

// // 初始检查
// loadScript();

// // 监听窗口大小变化
// window.addEventListener("resize", loadScript);

/// heap
(window.heap = window.heap || []),
  (heap.load = function (e, t) {
    (window.heap.appid = e), (window.heap.config = t = t || {});
    var r = document.createElement("script");
    (r.type = "text/javascript"),
      (r.async = !0),
      (r.src = "https://cdn.heapanalytics.com/js/heap-" + e + ".js");
    var a = document.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(r, a);
    for (
      var n = function (e) {
          return function () {
            heap.push([e].concat(Array.prototype.slice.call(arguments, 0)));
          };
        },
        p = [
          "addEventProperties",
          "addUserProperties",
          "clearEventProperties",
          "identify",
          "resetIdentity",
          "removeEventProperty",
          "setEventProperties",
          "track",
          "unsetEventProperty",
        ],
        o = 0;
      o < p.length;
      o++
    )
      heap[p[o]] = n(p[o]);
  });
heap.load("3744982711");

//  Google tag (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-EPS8XLSB6V");
