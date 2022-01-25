        const withImages = require("next-images");
        const withTM = require("next-transpile-modules")(["@madzadev/image-slider"]);
        module.exports = withImages(withTM());
        module.exports = {
          reactStrictMode: true,
          env: {
            siteurl: 'http://127.0.0.1:8000',
            fronturl: 'http://localhost:3000',
          },
        }