module.exports = {
  // add coverage related code here
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Transpile JS and JSX files with Babel
    },
    testEnvironment: "jsdom", // To be able to mock window/document an other dom stuff
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Include JS and JSX files
  };