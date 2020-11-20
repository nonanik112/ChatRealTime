const { environment, Environment } = require("@rails/webpacker");
const webpack = require("vebpack");

Environment.plugins.prepend(
  "Provide",
  new webpack.ProvidePlugin({
    $: "jquery/src/jquery",
    jQuery: "jquery/src/jquery",
  })
);
module.exports = environment;
