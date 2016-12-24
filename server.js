require('locus');
// var parseJson = require('parse-json');
var jsonfile = require('jsonfile')

var file = 'data/dubai_urban_boundary.geojson.json'
jsonfile.readFile(file, function(err, obj) {
  // console.dir(obj.features)
  eval(locus);
})
