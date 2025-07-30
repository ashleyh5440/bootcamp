const Arithmetic = require('../arithmetic.js');

describe('Arithmetic', () => {
  // TODO: 

  describe('constructor', () => {
    describe('num1 test', () => {
      it('should throw an error when either num1 are not a number', () => {
        const cb = () => new Arithmetic('E'); // num1 constructor test execution
        // num1 is not a number
        // error message must be an exact match
        const err = new Error('Please enter numbers for calculation');

        // expect needs an input callback function
        // err is the type of error or the error message expected
        expect(cb).toThrowError(err);
      });
    });

    describe('num2 test', () => {
      it('should throw an error when either num2 are not a number', () => {
        const cb = () => new Arithmetic(1, 'F'); // num2
        // num1 is not a number
        const err = new Error('Please enter numbers for calculation');

        expect(cb).toThrowError(err);
      });
    });
  });

});
