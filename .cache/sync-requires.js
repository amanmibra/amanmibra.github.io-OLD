// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("C:/Users/Aman/Desktop/amanmibra.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\Aman\\Desktop\\amanmibra.github.io\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\Aman\\Desktop\\amanmibra.github.io\\src\\pages\\index.js")),
  "component---src-pages-page-2-js": preferDefault(require("C:\\Users\\Aman\\Desktop\\amanmibra.github.io\\src\\pages\\page-2.js"))
}

exports.json = {
  "layout-index.json": require("C:\\Users\\Aman\\Desktop\\amanmibra.github.io\\.cache\\json\\layout-index.json"),
  "404.json": require("C:\\Users\\Aman\\Desktop\\amanmibra.github.io\\.cache\\json\\404.json"),
  "layout-index.json": require("C:\\Users\\Aman\\Desktop\\amanmibra.github.io\\.cache\\json\\layout-index.json"),
  "index.json": require("C:\\Users\\Aman\\Desktop\\amanmibra.github.io\\.cache\\json\\index.json"),
  "layout-index.json": require("C:\\Users\\Aman\\Desktop\\amanmibra.github.io\\.cache\\json\\layout-index.json"),
  "page-2.json": require("C:\\Users\\Aman\\Desktop\\amanmibra.github.io\\.cache\\json\\page-2.json"),
  "layout-index.json": require("C:\\Users\\Aman\\Desktop\\amanmibra.github.io\\.cache\\json\\layout-index.json"),
  "404-html.json": require("C:\\Users\\Aman\\Desktop\\amanmibra.github.io\\.cache\\json\\404-html.json")
}