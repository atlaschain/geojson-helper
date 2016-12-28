var Web3 = require('web3')
var jsonfile = require('jsonfile');

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://eth.lightrains.com"));
}

var file = 'data/simple.geojson.json'
jsonfile.readFile(file, function(err, obj) {
  for (var i = 0; i < obj.features.length; i++) {
    var feature = obj.features[i];
    saveGeojsonFeature(feature);
  }
})

function saveGeojsonFeature (info) {
  var txhash = web3.eth.sendTransaction({
    from: process.env.COINBASE,
    to: process.env.TOADDRES,
    value: 0,
    data: web3.toHex(info)
  });
  console.log(txhash);
}
