const { expect } = require("chai");

const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("TokenERC20 Contract", function () {
  async function deployOneContract() {
    const TokenERC20 = await hre.ethers.getContractFactory("TokenERC20");
    const tokenERC20 = await TokenERC20.deploy("mirzaee","MIZ");
  
    await tokenERC20.deployed();
  
    console.log("TokenERC20 deployed to:", tokenERC20.address);
  
  
    const [addr1, addr2] = await ethers.getSigners();
    return { tokenERC20, addr1, addr2 };
  }

  it("should be able to mint", async function () {
    console.log('------------------------------------------')

    const {tokenERC20, addr1, addr2 } = await loadFixture(deployOneContract);
    const amount = ethers.utils.parseEther( "3" );
    const addressZero="0x0000000000000000000000000000000000000000"
    await expect(tokenERC20.connect(addr1).mint(addr2.address,amount))
    .to.emit(tokenERC20, "Transfer")
    .withArgs(addressZero,addr2.address,amount);
  });
});