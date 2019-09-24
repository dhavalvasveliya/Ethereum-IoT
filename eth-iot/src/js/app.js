App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',
  
  init: function() {
    console.log("App initialized...")
    return App.initWeb3();
  },

  initWeb3: function() {
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContracts();
  },

  initContracts: function() {
    
      $.getJSON("DataCenter.json", function(dataCenter) {
        App.contracts.DataCenter = TruffleContract(dataCenter);
        App.contracts.DataCenter.setProvider(App.web3Provider);
        App.contracts.DataCenter.deployed().then(function(dataCenter) {
          console.log("DataCenter Address:", dataCenter.address);
        });
        return App.render();
      });
   
  },

  // Listen for events emitted from the contract


  render: function() {
    

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if(err === null) {
        App.account = account;
        $('#accountAddress').html("Your Account: " + account);
      }
    })

    // Load token sale contract
    
  },

 

 setValue1: function(){
  
    var value1 = $('#node1_set').val();
    App.contracts.DataCenter.deployed().then(function(instance) {
      return instance.set1(value1, {
        from: App.account,
        gas: 500000 // Gas limit
      });
    }).then(function(result) {
      console.log("node1 value set...")
      $('#node1_set').trigger('reset') // reset number of tokens in form
      // Wait for Sell event
    });

 },

 getValue1: function(){
  
   App.contracts.DataCenter.deployed().then(function(instance){
      instance.storeddata1().then(function(value){
      console.log(value);
      $('#node1_get').val(value.toNumber());
      console.log("node1 value fetched")
     
    })
    });
    },


setValue2: function(){
  
    var value1 = $('#node2_set').val();
    App.contracts.DataCenter.deployed().then(function(instance) {
      return instance.set2(value1, {
        from: App.account,
        gas: 500000 // Gas limit
      });
    }).then(function(result) {
      console.log("node2 value set...")
      $('#node2_set').trigger('reset') // reset number of tokens in form
      // Wait for Sell event
    });

 },

 getValue2: function(){
  
   
    App.contracts.DataCenter.deployed().then(function(instance){
      instance.storeddata2().then(function(value){
      console.log(value);
      $('#node2_get').val(value.toNumber());
      console.log("node2 value fetched")
     
    })
    });
    }

 


}


$(function(){
  App.init();
}); 


