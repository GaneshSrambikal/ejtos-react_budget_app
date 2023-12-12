import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { budget, expenses, currency } = useContext(AppContext);
  const [remainBudget, setRemainBudget] = useState(0);

  useEffect(() => {
    calcRemaining();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [budget, expenses]);
  const calcRemaining = () => {
    let totalExp = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);
    let remaining = budget - totalExp;
    setRemainBudget(remaining);
    return true;
  };

  return <h4>Remaining: {currency}{remainBudget}</h4>;
};

export default Remaining;
