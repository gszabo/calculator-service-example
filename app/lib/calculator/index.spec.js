'use strict';

let Calculator = require('./');

let chai = require('chai');
let expect = chai.expect;

describe('Calculator lib',
function() {

  describe('#add', function() {

    it('should add the given two numbers', function() {
      let calculator = new Calculator();
      let result = calculator.add(1, 2);
      expect(result).to.eql(3);
    });

  });

});
