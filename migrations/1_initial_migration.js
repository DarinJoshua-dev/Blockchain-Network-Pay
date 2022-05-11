// eslint-disable-next-line no-undef
const Migrations = artifacts.require("Migrations");
// eslint-disable-next-line no-undef
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function (deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed();
  // Mint 1,000 Dai Tokens for the deployer
  await tokenMock.mint(
    "0x1C0B67BA031dcF840e42EcFb364df099B8df183B",
    "1000000000000000000000000"
  );
};
