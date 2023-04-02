const hre = require("hardhat");

async function main() {
  const Lock = await hre.ethers.getContractFactory("TokenERC20");
  const lock = await Lock.deploy("mirzaee","MIZ");

  await lock.deployed();

  console.log(
    ` TokenERC20 deployed to : ${lock.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
