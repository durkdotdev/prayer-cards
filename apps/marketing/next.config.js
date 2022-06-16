const withTM = require("next-transpile-modules")(["ui-web"]);

module.exports = withTM({
  reactStrictMode: true
});
