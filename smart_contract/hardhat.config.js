require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/i9CsfcJgcIARsQDze3zf0-6fcfU8Xnfs',
      accounts: ['b6c1f96f0b75e3a982d4a47dbf5cd0523179ba116499578ae1c2d230c9a9c99c'],
    },
  },
};