import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h3 className='mt-3'>Company's Budget Allocation</h3>
                    <div className='row mt-3'>
                        {
                            /* Add Budget component here */
                            <Budget />
                        }        

                        {
                            /* Add Remaining component here*/
                            <Remaining />
                        }        

                        {
                            /* Add ExpenseTotal component here */
                            <ExpenseTotal />
                        }        
                       

                        {
                            /* Add Currency component here */
                            <Currency />
                        }        
                        {
                            /* Add ExpenseList component here */
                            <ExpenseList />
                        }         

                        {
                            /* Add AllocationForm component here under */
                            <AllocationForm />
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
