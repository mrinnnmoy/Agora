const hre = require("hardhat");

async function main() {
  const Agora = await hre.ethers.getContractFactory("Agora");
  const agora = await Agora.deploy();

  await agora.deployed();

  console.log("Contract Deployed at:", agora.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});