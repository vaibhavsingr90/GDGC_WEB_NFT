const TheStripesNFT = artifacts.require("TheStripesNFT");

module.exports = function (deployer) {
  deployer.deploy(TheStripesNFT, "NAME", "Symbol", "Token URIt");
};
