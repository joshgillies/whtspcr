var fs = require('fs')
  , whtspcr = require('whtspcr');

function testSpace(data, space, line) {
  return whtspcr(data)[line || 0] === space ? 'Pass!' : 'Fail!';
}

function testLine(data, line) {
  return whtspcr(data).length === line ? 'Pass!' : 'Fail!';
}

function testFile(file, callback) {
  fs.readFile(file, 'utf8', function(err, data) {
    if (err) throw err;
    return callback(data);
  });
}

// Testing standard whitespace
console.log('Test 1.1: ' + testSpace(' ', 1));
// BTW unicode for tabspace like a bru!
console.log('Test 1.2: ' + testSpace('\u0009', 1));
console.log('Test 1.3: ' + testSpace('  ', 2));
console.log('Test 1.4: ' + testSpace('\u0009\u0009', 2));
// mixin' it up!
console.log('Test 1.5: ' + testSpace(' \u0009 \u0009', 4));

// Testing new lines
console.log('Test 2.1: ' + testLine('This is testing more than just lines!', 1));
console.log('Test 2.2: ' + testLine('\n', 2));

// Testing files
// BTW this is not REAL testing, sheesh!
testFile('./tests/file1.txt', function(data){
  console.log('Test 3.1.1: ' + testSpace(data, 2));
  console.log('Test 3.1.2: ' + testSpace(data, 4, 1));
  console.log('Test 3.1.3: ' + testLine(data, 4));
});
testFile('./tests/file2.txt', function(data){
  console.log('Test 3.2.1: ' + testSpace(data, 2));
  console.log('Test 3.2.2: ' + testSpace(data, 4, 1));
  console.log('Test 3.2.3: ' + testLine(data, 4));
});
testFile('./tests/file3.txt', function(data){
  console.log('Test 3.3.1: ' + testSpace(data, 2));
  console.log('Test 3.3.2: ' + testSpace(data, 4, 1));
  console.log('Test 3.3.3: ' + testLine(data, 4));
});
