const { expect } = require('@jest/globals');
const funToTest = require('./convertToMiles');

test('test 1: Looks like your convertToMiles function does not work the way it should.', () => {
  expect(funToTest(5)).toBeCloseTo(3.10686,4);
});

test('test 2: Looks like your convertToMiles function does not work the way it should.', () => {
  expect(funToTest(8)).toBeCloseTo(4.97097,4);
});
