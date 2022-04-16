const dotenv = require("dotenv");
console.log("In next config", process.env.ENV);

const localEnv = dotenv.config({ path: `.env.${process.env.ENV}` }).parsed;

console.log("apna localEnv", JSON.stringify(localEnv));

module.exports = {
  env: localEnv
};
