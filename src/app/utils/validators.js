const phoneNumberValid = (phoneNumber) => {
  return !!phoneNumber.match(/^\+375[0-9]{0,9}$/);
};

export default phoneNumberValid;
