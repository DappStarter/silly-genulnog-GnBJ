require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stool razor right pulse hover kite slot gauge'; 
let testAccounts = [
"0x2c689192dfba7894f50d083a4ca9a6227103f7a37aab09f66e2e905af04356cd",
"0x2e060ec0ba7f91b933c885f44fc1d6c4e9f64ae4a44cf869422c13ec900bae02",
"0x3fa87b02b420aca595f76e137ad85e3d167ab55fb9e0cceb4a5eca0208971d39",
"0x9335ac26d56e0b3538599c15f636b66e7c7cfac56ecd9c71d3c86bd8469ddcdb",
"0x4a09bad67d71da8054256da35e59a8c6b6e38f3d43c268cc219f9f1e5f8fc8b2",
"0xff377aaae006600a93b7de901afa7e964be939326bb385788d89c81b84a703c1",
"0xdcbdbad2cc6ad04521622f25677ffe09a78d9a1aa834e8c307ade3d67d8b93f7",
"0x8023b737adba8ea4b72a562009d4a13f146cbda19a8f168cf69b6f6a65fe5134",
"0xc952fd6964f1d2d6d1e02efe07b5dc924b6b30460b8cecaa18abf84301135900",
"0x1cf493fbcbae21bb01553597142303bde594b7d1560beab162cbdd092939ba74"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

