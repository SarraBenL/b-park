const Rents = artifacts.require("Rents");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Rents", function (/* accounts */) {
  it("should assert true", async function () {
    await Rents.deployed();
    return assert.isTrue(true);
  });
  
});




