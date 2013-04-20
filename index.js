var nwlnr = require('nwlnr')
  , loopr = require('loopr');

module.exports = function whtspcr(input) {
  return loopr(nwlnr(input), [], function(index, value, output) {
    value.length && value.match(/^\s+/) ?
    output.push(value.match(/^\s+/)[0].length) :
    output.push(0);
  });
};
