var test = require('tap').test
  , whtspcr = require('whtspcr');

test('whitespace detection', function(t) {
  t.equal(whtspcr(' ')[0], 1, "space, we got one");
  t.equal(whtspcr('\u0009')[0], 1, "tabspace, we got that too");
  t.equal(whtspcr(' \u0009 \u0009')[0], 4, "combination of the above");
  t.end();
});

test('line detection', function(t) {
  t.equal(whtspcr('').length, 1, 'one line here');
  t.equal(whtspcr('\n').length, 2, 'two lines here');
  t.end();
});

test('file input', function(t){
  t.plan(9);
  file('./data/file1.txt', function(data){
    t.equal(whtspcr(data)[1], 2, 'line two has two spaces');
    t.equal(whtspcr(data)[2], 4, 'line three has four spaces');
    t.equal(whtspcr(data).length, 5, 'five lines in total');
  });
  file('./data/file2.txt', function(data){
    t.equal(whtspcr(data)[1], 2, 'line two has two spaces');
    t.equal(whtspcr(data)[2], 4, 'line three has four spaces');
    t.equal(whtspcr(data).length, 5, 'five lines in total');
  });
  file('./data/file3.txt', function(data){
    t.equal(whtspcr(data)[1], 2, 'line two has two spaces');
    t.equal(whtspcr(data)[2], 4, 'line three has four spaces');
    t.equal(whtspcr(data).length, 5, 'five lines in total');
  });
});

function file(path, callback) {
  var fs = require('fs');
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) throw err;
    return callback(data);
  });
}