import React, { useState } from "react";

const IncomeForm = () => {
  const [details, setDetails] = useState([]);
  const [incomeData, setIncomeData] = useState({
    date: "",
    description: "",
    account: "",
    category: "",
    amount: "",
    action: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setIncomeData({
      ...incomeData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddIncome = () => {
    setDetails([...details, incomeData]);
    setIncomeData({
      date: "",
      description: "",
      account: "",
      category: "",
      amount: "",
      action: false,
    });
  };

  const handleRemoveIncome = (index) => {
    setDetails((prevDetails) => prevDetails.filter((_, i) => i !== index));
  };

  return (
    <div className="form-container">
      <h2>Enter Income Transaction</h2>
      <form>
        <div className="form-row">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleInputChange}
            value={incomeData.date}
          />
        </div>
        <div className="form-row">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={handleInputChange}
            value={incomeData.description}
            placeholder="Enter description"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="account">Account</label>
          <input
            type="text"
            id="account"
            name="account"
            onChange={handleInputChange}
            value={incomeData.account}
            placeholder="Enter account"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            onChange={handleInputChange}
            value={incomeData.category}
            placeholder="Enter category"
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
            value={incomeData.amount}
            placeholder="Enter amount"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="action">Action</label>
          <input
            type="checkbox"
            id="action"
            name="action"
            onChange={handleInputChange}
            checked={incomeData.action}
          />
        </div>
        <div className="form-row">
          <button type="button" onClick={handleAddIncome}>
            Add
          </button>
        </div>
      </form>

      <div className="income-table">
        <h3>Income Details</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Account</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {details.map((income, index) => (
              <tr key={index}>
                <td>{income.date}</td>
                <td>{income.description}</td>
                <td>{income.account}</td>
                <td>{income.category}</td>
                <td>{income.amount}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleRemoveIncome(index)}
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

export default IncomeForm;
