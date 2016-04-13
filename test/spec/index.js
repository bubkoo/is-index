'use strict';

var expect = require('chai').expect;


describe('is-index', function () {

  var isIndex = require('../../');

  it('common test', function () {

    expect(isIndex(1)).to.be.true;
    expect(isIndex(1, 5)).to.be.true;
    expect(isIndex('1', 5)).to.be.true;
    expect(isIndex('1', '5')).to.be.true;

    expect(isIndex()).to.be.false;
    expect(isIndex(true)).to.be.false;
    expect(isIndex(null)).to.be.false;
    expect(isIndex({})).to.be.false;
    expect(isIndex(function () {})).to.be.false;
    expect(isIndex([])).to.be.false;
    expect(isIndex([1, 2])).to.be.false;
  });

});
