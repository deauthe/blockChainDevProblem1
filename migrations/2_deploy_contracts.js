const Kryptobird = artifacts.require("Kryptobird");
//KryptoBird-> new variable that grabs config from the json file inside the require func;0215

module.exports = function(deployer){
    deployer.deploy(Kryptobird);
};