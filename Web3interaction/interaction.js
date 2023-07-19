// import {Erc20abi} from "./ERC20.json" assert{type:"json"};
// import {Stakingabi} from "./staking.json" assert{type:"json"};


// const Web3 = require("web3")
import Web3 from "web3";
const web3 = new Web3("http://127.0.0.1:7545");

const erc20abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "delegate",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "delegate",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "numTokens",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenOwner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getcontractaddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "numTokens",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "numTokens",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
] ;
const stakingabi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_type",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_duration",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_isFixed",
				"type": "bool"
			}
		],
		"name": "staking",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ERC20Basic",
				"name": "_addressERC20",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_duration",
				"type": "uint256"
			}
		],
		"name": "tokensStaked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "unstaking",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "claimedRewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getcontractaddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getstaking_details",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "stake_amount",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "stake_type",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "stake_time",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "starting_stake_time",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isFixed",
						"type": "bool"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "isClaimed",
						"type": "bool"
					}
				],
				"internalType": "struct Staking_Token.Stake",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "Stake_details",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "stake_amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "stake_type",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "stake_time",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "starting_stake_time",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isFixed",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isClaimed",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "TokenBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "unclaimedRewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const ercAddress = "0x1D8ADFcE60f9768Ae90B7Fc5D5e5d6afA6Cd676c";
const stakingAddress = "0x6AEa1A05fBf7e0e73E8263dc6d599eD64644752C";

const contract =  new web3.eth.Contract(erc20abi,ercAddress);
const contractstaking =  new web3.eth.Contract(stakingabi,stakingAddress);


//ERC - 20 Functions calling 

const cont=(async()=>{

//						++++++++++++++++ERC INTERACTION++++++++++++++++


//=================minting the token at owner address===================================
	// await contract.methods.mint(10000).send({from :"0x1246573b971050238079802F2e65F22Eb39339fA", gas :300000});


// ================approving the contract through the user==============================
	// await contract.methods.approve("0x6AEa1A05fBf7e0e73E8263dc6d599eD64644752C", 100).send({from :"0x1246573b971050238079802F2e65F22Eb39339fA", gas :100000})


// ================transferring the token from 1 address to another=====================
	// await contract.methods.transfer("0xbc4B976358B21F24F44A2ce2D112E8eEAdbd0046","0x6AEa1A05fBf7e0e73E8263dc6d599eD64644752C", 1000).send({from :"0xbc4B976358B21F24F44A2ce2D112E8eEAdbd0046", gas :100000});
	  

//				 +++++++++++++++++++++ STAKING INTERACTION +++++++++++++++++++++++


	// await contractstaking.methods.staking(50,"fixed",100,true).send({from :"0x1246573b971050238079802F2e65F22Eb39339fA", gas:300000})

// ============================unstaking function ======================================
	// await contractstaking.methods.unstaking("0x1246573b971050238079802F2e65F22Eb39339fA").send({from :"0x1246573b971050238079802F2e65F22Eb39339fA", gas:300000})

// ============================Token balance ============================================
	// await contractstaking.methods.TokenBalance("0x1246573b971050238079802F2e65F22Eb39339fA").call({from :"0x1246573b971050238079802F2e65F22Eb39339fA", gas:100000}).then(console.log)



// ============================Claimed Rewards===========================================
	// await contractstaking.methods.claimedRewards("0x1246573b971050238079802F2e65F22Eb39339fA").call({from :"0x1246573b971050238079802F2e65F22Eb39339fA", gas:100000}).then(console.log)


// ============================unClaimed Rewards=========================================
	// await contractstaking.methods. unclaimedRewards("0x1246573b971050238079802F2e65F22Eb39339fA").call({from :"0x1246573b971050238079802F2e65F22Eb39339fA", gas:100000}).then(console.log)



})
 
cont()


