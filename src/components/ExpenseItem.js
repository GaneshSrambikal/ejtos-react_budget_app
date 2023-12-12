import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaPlusCircle } from 'react-icons/fa';
import { AiOutlineMinusCircle } from "react-icons/ai";
const ExpenseItem = (props) => {
  const { dispatch, budget, currency } = useContext(AppContext);

  const handleDeleteItem = () => {
    console.log('clicked', props.name);
    // const item = {
    //     name: props.name,
    // };

    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.name,
    });
    console.log(budget);
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <FaPlusCircle size='2em' color='green'></FaPlusCircle>
      </td>
      <td>
        <AiOutlineMinusCircle  size='2em' color='red'></AiOutlineMinusCircle>
      </td>
      <td>
        <FaTimesCircle
          size='2em'
          color='grey'
          onClick={handleDeleteItem}
        ></FaTimesCircle>
      </td>
    </tr>
  );
};

export default ExpenseItem;
