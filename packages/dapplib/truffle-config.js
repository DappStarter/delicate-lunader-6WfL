require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remember modify hover arctic bone topple'; 
let testAccounts = [
"0x249bc38e77fac633d1007a199d0b7e8f4bb6a0ddbabdaa5750dcb4d36fa4fb44",
"0xe0681c2e886465be887e2cc5532e14c341381d62e4a9e3556db9b166dc0cf2bc",
"0x5c7ad2b6460dcf13da7addda90447acc7ddce34d6cc20c4965e2d74680dfb09f",
"0x8b138084faedf7a03efedd670ee8d8ab67ab5711b50e520feb004e983307b5e2",
"0x5d1842c51ec319fe98508d49117fdfa4b650d268cd44e9f7546ee63840e0160d",
"0xaa3cf2fc25e403ba116b576bc728677a3d3431387bf939bc82f5fa2d82ad823a",
"0x298ec89501cc6033b7adcfef2a35256fa0b8490b7651dceed0329365feb07a61",
"0xda8908989f01489158603690b4e7cd9dff7433616a15fa446ea9a53f217d1d77",
"0xae6b222e4fd45cebfc1cdd5255faaa5fbd456031337e2a22a107555ac93d9ecf",
"0x608bf2757313d715d1e8f562415e3ca08cbd2b612b3a47ca52ca692d62cf278c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

