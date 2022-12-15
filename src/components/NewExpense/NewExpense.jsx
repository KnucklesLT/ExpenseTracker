import { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = ({onAddExpense}) => {

  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData ={
      ...enteredExpenseDate,
      id: Math.random().toString()
    }
    onAddExpense(expenseData);
    setIsEditing(false)
  }

  const startIsEditing = () => {
    setIsEditing(true)
  }

  const stopEditing = () => {
    setIsEditing(false)
  }
  return ( 
    <div className='new-expense'>
      {!isEditing && <button onClick={startIsEditing}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}/>}
    </div>
  );
}

export default NewExpense;