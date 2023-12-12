import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
  const { budget, dispatch, currency, expenses } = useContext(AppContext);
  const [totalSpend, setTotalSpend] = useState(null);

  useEffect(() => {
    calcRemaining();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [budget, expenses]);
  const calcRemaining = () => {
    let totalExp = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);
    
    setTotalSpend(totalExp);
    return true;
  };
  const handleChangeBudget = (e) => {
    if (e.target.value > 20000) {
      alert('The value cannot exceed 20000 amount');
      e.target.value = 20000;
    }
    if (e.target.value < totalSpend) {
      alert('You cannot reduce the budget value lower than the spending');
      e.target.value = totalSpend ;
    }

    dispatch({
      type: 'SET_BUDGET',
      payload: e.target.value,
    });
  };
  return (
    <div className='budget-container'>
      <h4>Budget</h4>
      <div className='budget-input-c'>
        <span>{currency}</span>{' '}
        <input
          type='number'
          value={budget}
          step={10}
          max={20000}
          onChange={(e) => handleChangeBudget(e)}
        />
      </div>
    </div>
  );
};

export default Budget;
