const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Staking Test Cases", async () => {
  // let owner;
  let erc20, ERC20, staking, Staking;
  

  beforeEach(async () => {
    ERC20 = await ethers.getContractFactory("ERC20Basic");
    erc20 = await ERC20.deploy();
    Staking = await ethers.getContractFactory("Staking_Token");
    staking = await Staking.deploy(erc20.address);
    [owner, addr, addr2] = await ethers.getSigners();

  });

  //=================ERC-20 TEST CASE==================
  it("Should it be approving the contract", async () => {
    let _amount = 100;
    // console.log(owner.address);
    // console.log(addr2.address);
    // console.log(staking.address);
    const val = await erc20.approve(staking.address, _amount, {
      from: owner.address,
    });
    const allowance = await erc20.allowance(owner.address, staking.address);
    expect(allowance.toNumber()).to.equal(_amount);
  });

  it("Should transfering the token", async () => {
    const _amount = 100;
    const tokentransfer = await erc20.transfer(owner.address,staking.address, _amount);
    expect(await erc20.balanceOf(staking.address)).to.equal(_amount);
  });

  it("Should returning the right contract address", async () => {
    const contractaddress = await erc20.getcontractaddress();
    const add = await contractaddress.to;
    expect(add).to.equal(erc20.address);
  });

  it("Should checking the amount of staker", async () => {
    const signers = await ethers.getSigners();
    const _amount = 100;
    const val = await erc20.connect(signers[1]).mint(_amount);
    const balance = await erc20.balanceOf(addr.address);
    expect(balance).to.equal(_amount);
  });

  it("Should staking the fixed amount", async () => {
    const _amount = 1000;
    const amount = 100;
     BigInt(amount);
    const type = "fixed";
    const duration = 100;
    const isFixed = true;
    await erc20.connect(addr).mint(_amount);
    const bal = await erc20.balanceOf(addr.address)
    await erc20.connect(addr).approve(staking.address, _amount);
    console.log(bal);
    console.log(  addr.address);
    await staking.connect(addr).staking(amount, type, duration, true);
    const stakingDetails = await staking.getstaking_details(addr.address);
    console.log(stakingDetails);
    expect(stakingDetails.stake_amount).to.equal(amount);
    expect(stakingDetails.stake_type).to.equal(type);
    expect(stakingDetails.stake_time).to.equal(duration);
    expect(stakingDetails.isFixed).to.equal(isFixed);
  });
});

// it("Should staking the unfixed amount", async () => {
//   const _amount = 100;
//   const type = "unfixed";
//   const duration = 0;
//   const isFixed = false;
//   const minttoken = await erc20.connect(addr.address).mint(_amount);
//   // expect(await erc20.balanceOf(addr.address)).to.equal(_amount);
//   console.log(minttoken);
//   const stake = staking.staking(_amount, type, duration, isFixed, {from : addr.address});
//   console.log(stake);
//   console.log(addr.address);
//    expect( stake).to.equal(staking.Stake_details(addr.getAddress()));
// });
