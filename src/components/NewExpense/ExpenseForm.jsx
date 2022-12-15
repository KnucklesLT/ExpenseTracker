import "./ExpenseForm.css";
import { useState } from "react"

const ExpenseForm = ({ onSaveExpenseData, onCancel, }) => {

  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredAmount, setEnteredAmount] = useState("")
  const [enteredDate, setEnteredDate] = useState("")

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate:''
  // })

  const titleChangeHandler = (evt) => {
    setEnteredTitle(evt.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: evt.target.value,
    // })
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: evt.target.value}
    // })
  };

  const amountChangeHandler = (evt) => {
    setEnteredAmount(evt.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: evt.target.value,
    // })
    // setUserInput((prevState) => {
    //   return {...prevState, enteredAmount: evt.target.value}
    // })
  };

  const dateChangeHandler = (evt) => {
    setEnteredDate(evt.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: evt.target.value,
    // })
    // setUserInput((prevState) => {
    //   return {...prevState, enteredDate: evt.target.value}
    // })
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
