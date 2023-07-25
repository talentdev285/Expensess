import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import IncomePage from "./pages/IncomePage";
import ExpensePage from "./Pages/ExpensePage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1>Income and Expense Tracker</h1>
        </header>

        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/income" activeClassName="active">
                Income
              </NavLink>
            </li>
            <li>
              <NavLink to="/expense" activeClassName="active">
                Expense
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/income" element={<IncomePage />} />
          <Route path="/expense" element={<ExpensePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
