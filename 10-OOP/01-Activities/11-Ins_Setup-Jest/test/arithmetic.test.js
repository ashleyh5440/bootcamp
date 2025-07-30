// Constructor Arithmetic is imported.
const Arithmetic = require('../arithmetic.js');

// A testing suite for Arithmetic is created.
describe('Arithmetic', () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe('sum', () => {
    it('should take two numbers and add them together', () => {
      // SEET
      // Setup
      const total = 4;
      const arithmetic = new Arithmetic();

      // Execute and Expect
      // arithmetic.sum(2,2) is execute
      // expect(...).toEqual(total) is expect
      expect(arithmetic.sum(2, 2)).toEqual(total);

      // Teardown
      // removing old code, old data values, etc.
      // remove all remnants of the test

    });
  });
});

// A testing suite for Arithmetic is created.
describe('Arithmetic', () => {
  // A test is created to check that the difference does in fact return the difference between the two numbers.
  describe('difference', () => {
    it('should take two numbers find the difference', () => {
      const total = 0;
      const arithmetic = new Arithmetic();
      expect(arithmetic.difference(2, 2)).toEqual(total);
      // testing/executing difference
      // we expect the different of 2 and 2 to equal 0
      // expect(...).toEqual(0)
    });
  });
});

// A testing suite for Arithmetic is created.
describe('Arithmetic', () => {
  // A test is created to check that product does in fact return the two numbers multiplied together.
  describe('product', () => {
    it('should take two numbers and multiply them together', () => {
      const total = 4;
      const arithmetic = new Arithmetic();
      expect(arithmetic.product(2, 2)).toEqual(total);
    });
  });
});

// A testing suite for Arithmetic is created.
describe('Arithmetic', () => {
  // A test is created to check that quotient does in fact return the quotient of the two numbers.
  describe('quotient', () => {
    it('should take two numbers and divide them', () => {
      const total = 1;
      const arithmetic = new Arithmetic();
      expect(arithmetic.quotient(2, 2)).toEqual(total);
    });
  });
});


describe('Arithmetic', () => {
  describe('doubler', () => {
    it('should double the input number', () => {
      // Setup
      const doubleNumber = 30;
      const arithmetic = new Arithmetic();

      // Expect and Execute
      expect(arithmetic.doubler(15)).toEqual(doubleNumber);

      // Teardown

    });
  });
});