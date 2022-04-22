const { plopGeneratorsSugar } = require("@singlestone/plop-generators-sugar");

module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
  plopGeneratorsSugar(plop);
};
