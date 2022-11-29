
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/lyonsc20/lab3/.cache/dev-404-page.js")),
  "component---src-pages-abigail-js": preferDefault(require("/Users/lyonsc20/lab3/src/pages/abigail.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/lyonsc20/lab3/src/pages/about.js")),
  "component---src-pages-cathryn-js": preferDefault(require("/Users/lyonsc20/lab3/src/pages/cathryn.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/lyonsc20/lab3/src/pages/index.js")),
  "component---src-pages-ryan-js": preferDefault(require("/Users/lyonsc20/lab3/src/pages/ryan.js")),
  "component---src-pages-tucker-js": preferDefault(require("/Users/lyonsc20/lab3/src/pages/tucker.js"))
}

