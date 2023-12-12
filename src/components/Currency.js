import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrency = (e) => {
    console.log(e.target.value);

    dispatch({
      type: 'CHG_CURRENCY',
      payload: e.target.value,
    });
  };
  return (
    <div className='currency-container'>
      <h4>Currency</h4>
      <select value={currency} onChange={handleCurrency}>
        <option value='$' name='dollar'>
          $ Dollar
        </option>
        <option value='£' name='pound'>
          £ Pound
        </option>
        <option value='€' name='euro'>
          € Euro
        </option>
        <option value='₹' name='rupee'>
          ₹ Rupee
        </option>
      </select>
    </div>
  );
};

export default Currency;
