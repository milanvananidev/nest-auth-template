/** @type {import('@hey-api/openapi-ts').UserConfig} */
module.exports = {
  input: "./swagger.json",
  output: "api-client",
  plugins: [
    "@hey-api/typescript",
    { name: "@tanstack/react-query", queryOptions: true, mutationOptions: true }
  ]
};