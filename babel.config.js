module.exports = function (api) {
  console.log("\nBabel is running in: " + api.env());

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          shippedProposals: true,
          targets: {
            node: "current",
          },
        },
      ],
      ["@babel/preset-react", { runtime: "automatic" }],
      "@babel/typescript",
    ],
  };
};
