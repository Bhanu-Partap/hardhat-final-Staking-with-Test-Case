const { expect } = require("chai");
const ethers = require("ethers");

describe("Staking Test Cases", async () => {
  let erc20, ERC20, staking, Staking;
  beforeEach(async () => {
    ERC20 = await hre.ethers.getContractFactory("ERC20Basic");
    erc20 = await  ERC20.deploy();
    Staking = await hre.ethers.getContractFactory("Staking_Token");
    staking = await  Staking.deploy(erc20.address);
  });

  it("Should it be approving the contract", async () => { 
    const [owner, addr, addr2] = await hre.ethers.getSigners();
    let _amount = 100;
    console.log(owner.address);
    console.log(addr2.address);
    console.log(staking.address);
    const val = await erc20.approve(staking.address, _amount,{from : owner.address});
    const allowance = await erc20.allowance(owner.address, staking.address);
    console.log(allowance);
    expect(allowance.toNumber()).to.equal(_amount);
  });

  it("Should transfering the token",async()=>{
    const [owner, addr, addr2] = await hre.ethers.getSigners();
    const _amount=100 ;
    const tokentransfer = await erc20.transfer(staking.address, _amount);
    expect(await erc20.balanceOf(staking.address)).to.equal(_amount);

  })
  
  it("Should staking the fixed amount",async()=>{
    const [owner, addr, addr2] = await hre.ethers.getSigners();
    const _amount = 100;
    const type = "fixed";
    const duration = 100;
    const isFixed = true;
    const stake = staking.staking(_amount, type, duration, isFixed, {from :addr.address})
    expect(await stake ).to.equal(staking.Stake_details(addr.address))
  })
 

});
