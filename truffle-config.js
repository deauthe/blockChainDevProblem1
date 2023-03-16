

module.exports = {
  

  networks: {
    
     development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },    
    },

    contract_directory: './src/contracts/',
    contracts_build_directory: './src/abis/', //both these directories should be outside the 'networks' object

    compilers: {
      solc:{
        version:'^0.8.0',
        optimizer:{
          enabled:'true',
          runs:200

        }
      }
    }
 


};
