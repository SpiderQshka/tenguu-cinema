module.exports = {
  verbose: true,
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  setupFiles: ["<rootDir>src/tests/setupTests.js"]
};
