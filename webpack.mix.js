const mix = require("laravel-mix");

mix
  .setPublicPath("./")
  .sourceMaps()
  .js("src/assets/js/script.js", "dist/js/script.js")
  .postCss("src/assets/css/index.css", "dist/css/style.css", [
    require("tailwindcss"),
  ])
  .version();

mix.disableNotifications();
