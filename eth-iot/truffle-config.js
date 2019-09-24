odule.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      network_id: "*" // match any network id
    },
    rinkeby: {
      host: "localhost",
      network_id: 4,
      gas: 4700000,
      from: '0xe088a313afc8925f395fc5f7159d395562d8e4cd'
    }
  }
};
