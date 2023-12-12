import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
const AllocationForm = () => {
  const {currency,expenses, budget } = useContext(AppContext)
  const [dept,setDept] = useState('Marketing')
  const [opt,setOpt] = useState('add')
  const [amnt,setAmnt] = useState()
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
  const handleDept = (e) =>{
    console.log(e.target.value)
    setDept(e.target.value)
  }
  const handleOpt = (e) =>{
    console.log(e.target.value)
    setOpt(e.target.value)
  }
  const handleAmnt = (e) =>{
    console.log(e.target.value)
    setAmnt(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(remainBudget < amnt ){
      alert(`The value cannot exceed remaining funds ${currency} ${remainBudget} `)
    }
    console.log(amnt)

  }
  return (
    <div className='allc-container'>
      <h4>Change allocation</h4>
       <form onSubmit={handleSubmit}>
        <label>Department</label>
        <select value={dept} onChange={handleDept}>
            <option name="marketing" value="marketing">Marketing</option>
            <option name="finance" value="finance">Finance</option>
            <option name="sales" value="sales">Sales</option>
            <option name="human_resource" value="human_resource">Human Resource</option>
            <option name="it" value="it">IT</option>
        </select>

        <label>Allocation</label>
        <select value={opt} onChange={handleOpt}>
            <option>Add</option>
            <option>Reduce</option>
        </select>

        Budget: <span>{currency}</span>
        <input type="number" value={amnt}  max='20000' onChange={handleAmnt}/>

        <button>Save</button>
       </form>
    </div>
  );
};

export default AllocationForm;
