var fs = require('fs');
var rework = require('rework');
var expect = require('chai').expect;
var packer = require('../');

function fixture(name) {
  return fs.readFileSync('test/fixtures/' + name + '.css', 'utf8').trim();
}

function compareFixtures(name) {
  return expect(
    rework(fixture(name))
    .use(packer)
    .toString().trim()
  ).to.equal(fixture(name + '.out'));
}

describe('rework-rule-packer', function() {
  it('pack rulesets', function() {
    compareFixtures('pack');
  });

  it('pack rulesets', function() {
    compareFixtures('multi-pack');
  });
});

