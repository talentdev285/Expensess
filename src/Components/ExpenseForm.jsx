import React, { useState } from "react";

const ExpenseForm = () => {
  const [details, setDetails] = useState([]);
  const [expenseData, setExpenseData] = useState({
    receipt: null,
    paymentType: "",
    expenseType: "",
    vendorDetails: "",
    date: "",
    amount: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExpenseData({ ...expenseData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setExpenseData({ ...expenseData, receipt: file });
  };

  const handleAddExpense = () => {
    setDetails([...details, expenseData]);
    setExpenseData({
      receipt: null,
      paymentType: "",
      expenseType: "",
      vendorDetails: "",
      date: "",
      amount: "",
    });
  };

  const handleRemoveExpense = (index) => {
    setDetails((prevDetails) => prevDetails.filter((_, i) => i !== index));
  };

  return (
    <div className="form-container">
      <h2>Enter Expense Transaction</h2>
      <form>
        <div className="form-row">
          <label htmlFor="receipt">Receipt</label>
          <input
            type="file"
            id="receipt"
            name="receipt"
            onChange={handleFileChange}
          />
          {expenseData.receipt && (
            <img src={URL.createObjectURL(expenseData.receipt)} alt="Receipt" />
          )}
        </div>
        <div className="form-row">
          <label htmlFor="paymentType">Payment Type</label>
          <select
            id="paymentType"
            name="paymentType"
            onChange={handleInputChange}
            value={expenseData.paymentType}
          >
            <option value="">Select Payment Type</option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="cash">Cash</option>
            {/* Add other payment types here */}
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="expenseType">Expense Type</label>
          <input
            type="text"
            id="expenseType"
            name="expenseType"
            onChange={handleInputChange}
            value={expenseData.expenseType}
            placeholder="Enter expense type"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="vendorDetails">Vendor Details</label>
          <input
            type="text"
            id="vendorDetails"
            name="vendorDetails"
            onChange={handleInputChange}
            value={expenseData.vendorDetails}
            placeholder="Enter vendor details"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleInputChange}
            value={expenseData.date}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            onChange={handleInputChange}
            value={expenseData.amount}
            placeholder="Enter amount"
            required
          />
        </div>
        <div className="form-row">
          <button type="button" onClick={handleAddExpense}>
            Add
          </button>
        </div>
      </form>

      <div className="expense-table">
        <h3>Expense Details</h3>
        <table>
          <thead>
            <tr>
              <th>Receipt</th>
              <th>Payment Type</th>
              <th>Expense Type</th>
              <th>Vendor Details</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {details.map((expense, index) => (
              <tr key={index}>
                <td>
                  {expense.receipt && (
                    <img
                      src={URL.createObjectURL(expense.receipt)}
                      alt="Receipt"
                    />
                  )}
                </td>
                <td>{expense.paymentType}</td>
                <td>{expense.expenseType}</td>
                <td>{expense.vendorDetails}</td>
                <td>{expense.date}</td>
                <td>{expense.amount}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleRemoveExpense(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseForm;
