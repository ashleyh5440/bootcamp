// TODO: Import the Validate class.
const Validate = require('../validate');
// TODO: Describe a testing suite for checking the functionality of the Validate class.
describe('Validate', () => {
  describe('isPassword', () => {
    // TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
    it("should return false when passed an empty string", () => {
      const expOutput = false;
      const validate = new Validate();
      // expect isPassword with an empty string to equal false
      expect(validate.isPassword("")).toEqual(expOutput);
    });
  });
})