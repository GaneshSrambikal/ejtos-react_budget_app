

const checkCurrency = (props) => {
  let curVal = '';
  switch (props) {
    case 'pound':
      curVal = '£';
      break;
    case 'dollar':
      curVal = '$';
      break;
    case 'rupee':
      curVal = '₹';
      break;
    case 'euro':
      curVal = '€';
      break;

    default:
      return curVal = '$';
  }
  return curVal;
};

export default checkCurrency;
