const { expect } = require("chai");


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




  it("Should checking staking the fixed amount", async () => {
    const _amount = 100;
    const amount = 100;
     BigInt(amount);
    const type = "fixed";
    const duration = 10;
    const isFixed = true;
    await erc20.connect(addr).mint(_amount);
    const bal = await erc20.balanceOf(addr.address)
    await erc20.connect(addr).approve(staking.address, _amount);
    await staking.connect(addr).staking(amount, type, duration, isFixed);
    const stakingDetails = await staking.getstaking_details(addr.address);
    expect(stakingDetails.stake_amount).to.equal(amount);
  });



  it("Should checking staking type", async () => {
    const _amount = 100;
    const amount = 100;
    const type = "fixed";
    const duration = 10;
    const isFixed = true;
    await erc20.connect(addr).mint(_amount);
    const bal = await erc20.balanceOf(addr.address)
    await erc20.connect(addr).approve(staking.address, _amount);
    await staking.connect(addr).staking(amount, type, duration, isFixed);
    const stakingDetails = await staking.getstaking_details(addr.address);
  expect(stakingDetails.stake_type).to.equal(type);
  });


  it("Should checking staking duration", async () => {
    const _amount = 100;
    const amount = 100;
    const type = "fixed";
    const duration = 10;
    const isFixed = true;
    await erc20.connect(addr).mint(_amount);
    const bal = await erc20.balanceOf(addr.address)
    await erc20.connect(addr).approve(staking.address, _amount);
    await staking.connect(addr).staking(amount, type, duration, isFixed);
    const stakingDetails = await staking.getstaking_details(addr.address);
    // console.log(stakingDetails);
    expect(stakingDetails.stake_time).to.above(duration);
  });


  it("Should checking staking type fixed or unfixed", async () => {
    const _amount = 100;
    const amount = 100;
    const type = "fixed";
    const duration = 10;
    const isFixed = true;
    await erc20.connect(addr).mint(_amount);
    const bal = await erc20.balanceOf(addr.address)
    await erc20.connect(addr).approve(staking.address, _amount);
    // console.log(bal);
    // console.log(addr.address);
    await staking.connect(addr).staking(amount, type, duration, isFixed);
    const stakingDetails = await staking.getstaking_details(addr.address);
    expect(stakingDetails.isFixed).to.equal(isFixed);

  });



  it("Should staking the unfixed amount", async () => {
    const _amount = 100;
    const type = "unfixed";
    const duration = 0;
    const isFixed = false;
    await erc20.connect(addr).mint(_amount);
    const bal = await erc20.balanceOf(addr.address)
    await erc20.connect(addr).approve(staking.address, _amount);
    await staking.connect(addr).staking(_amount, type, duration, isFixed);
    const stakingDetails = await staking.getstaking_details(addr.address);
    expect(stakingDetails.stake_amount).to.equal(_amount);
  });



  it("Should staking the unfixed type", async () => {
  const _amount = 100;
  const type = "unfixed";
  const duration = 0;
  const isFixed = false;
  await erc20.connect(addr).mint(_amount);
  const bal = await erc20.balanceOf(addr.address)
  await erc20.connect(addr).approve(staking.address, _amount);
  await staking.connect(addr).staking(_amount, type, duration, isFixed);
  const stakingDetails = await staking.getstaking_details(addr.address);
  expect(stakingDetails.isFixed).to.equal(isFixed);
});



  it("Should staking the unfixed duration ", async () => {
  const _amount = 100;
  const type = "unfixed";
  const duration = 0;
  const isFixed = false;
  await erc20.connect(addr).mint(_amount);
  const bal = await erc20.balanceOf(addr.address)
  await erc20.connect(addr).approve(staking.address, _amount);
  await staking.connect(addr).staking(_amount, type, duration, isFixed);
  const stakingDetails = await staking.getstaking_details(addr.address);
  expect(stakingDetails.stake_time).to.equal(0);
});



it("Should unstaking the stake ", async () => {
  const _amount = 100;
  const amount = 1000;
  const type = "fixed";
  const duration = 10;
  const isFixed = true;
  await erc20.connect(owner).mint(amount);//for contract purpose
  await erc20.connect(owner).transfer(owner.address,staking.address, amount);
  await erc20.connect(addr).mint(amount);
  await erc20.connect(addr).approve(staking.address, _amount);
  await staking.connect(addr).staking(_amount, type, duration, isFixed);
  const stakingDetails = await staking.getstaking_details(addr.address);

  expect(await stakingDetails.isFixed).to.be.true;
  expect( staking.connect(staking.address).unstaking(addr.address));
});
});



