var Rents = artifacts.require("./Rents.sol");

module.exports = function(deployer) {
  deployer.deploy(Rents);
};