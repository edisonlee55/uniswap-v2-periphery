require("dotenv").config({ path: "../.env" });

const UniswapV2Router02 = artifacts.require('UniswapV2Router02');

const UniswapV2FactoryAddress = process.env.UNISWAP_V2_FACTORY_ADDRESS;
const WETHAddress = process.env.WETH_ADDRESS;

module.exports = async function (deployer, network, accounts) {
  console.log('Deploying to network: ' + network);
  console.log('Deployer address: ' + accounts[0]);

  await deployer.deploy(UniswapV2Router02, UniswapV2FactoryAddress, WETHAddress); // (_factory, _WETH)
}
