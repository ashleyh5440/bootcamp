const Validate = require('../validate.js');

describe('Validate', () => {
  describe('isPassword', () => {
    // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
    it('should return false when password is less than 8 characters', () => {
      const expectedOutput = false;
      const validate = new Validate();
      expect(validate.isPassword("")).toEqual(expectedOutput);
    });
    // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
    it('should return false when the password does not contain at least 1 uppercase.', () => {
      const expectedOutput = false;
      const validate = new Validate();
      // at least 8, no uppercharacters for input
      expect(validate.isPassword("aaaaaaaaaaa")).toEqual(expectedOutput);
    });
    // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
    it('should return false when the password does not contain at least 1 lowercase.', () => {
      const expectedOutput = false;
      const validate = new Validate();
      // at least 8, no uppercharacters for input
      expect(validate.isPassword("AAAAAAAAAAAA")).toEqual(expectedOutput);
    });
    // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
    it('should return false when the password does not contain at least 1 number.', () => {
      const expectedOutput = false;
      const validate = new Validate();
      // at least 8, no uppercharacters for input
      expect(validate.isPassword("AaAaAaAaAa")).toEqual(expectedOutput);
    });
    // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
    it('should return true when password is at least 8 characters long, contains an uppercase, lowercase character and number', () => {
      const expectedOutput = true;
      const validate = new Validate();
      expect(validate.isPassword("Password12")).toEqual(expectedOutput);
    });
});
});
