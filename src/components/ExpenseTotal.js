import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
  const { expenses, budget ,currency} = useContext(AppContext);
  const [totalExp, setTotalExp] = useState(0);

  const calcTotal = () => {
    const expTotal = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);
    setTotalExp(expTotal);
    return true;
  };
  useEffect(() => {
    calcTotal();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expenses, budget]);
  return <h4>ExpenseTotal: {currency}{totalExp}</h4>;
};

export default ExpenseTotal;
