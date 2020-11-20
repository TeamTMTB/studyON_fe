const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/rooms",
    createProxyMiddleware({
      target: "http://localhost:8000",
      changeOrigin: true,
    })
  );

  app.use(
    "/todo",
    createProxyMiddleware({
      target: "http://localhost:8090",
      changeOrigin: true,
    })
  );

  app.use(
    "/todo-oneday",
    createProxyMiddleware({
      target: "http://localhost:8090",
      changeOrigin: true,
    })
  );
};
