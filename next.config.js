module.exports = {
  reactStrictMode: true,
}
const withImages = require("next-images");
        const withTM = require("next-transpile-modules")(["@madzadev/image-slider"]);
        module.exports = withImages(withTM());