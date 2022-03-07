module.exports = {
  clearMocks: true,
  verbose: false,
  testEnvironment: "jsdom",
  testURL: "http://localhost/",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", "d.ts"],
  setupFilesAfterEnv: ["./setupFilesAfterEnv.ts"],
};
