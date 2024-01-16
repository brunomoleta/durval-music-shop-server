module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
          },
        modules: "commonjs",
      },
    ],
    ["@babel/preset-react", { runtime: "automatic" }],

    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-transform-modules-commonjs",
    "babel-plugin-styled-components",
      {
        "fileName": false
      },
  ],
};
