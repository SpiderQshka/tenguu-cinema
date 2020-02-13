import proxy from "http-proxy-middleware";

module.exports = function(app: any) {
  app.use(
    "/api",
    proxy({
      target: "http://localhost:4000",
      changeOrigin: true
    })
  );
};
