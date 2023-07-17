import Erc20abi from "./ERC20.json"
import Stakingabi from "./staking.json"

const { Web3 } = require('web3');
const web3 = new Web3("http://127.0.0.1:7545");

const erc20abi = Erc20abi;
const stakingabi = Stakingabi;

const ercAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
const stakingAddress = "0xf8e81D47203A594245E36C48e151709F0C19fBe8";

const contract =  new web3.eth.Contract(erc20abi,ercAddress);


//ERC - 20 Functions calling 

contract.methods.mint(100).send({from :"0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", gas :100000})
