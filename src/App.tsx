import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";

type Expense = {
  id: number;
  name: string;
  amount: number;
  category: string;
};

function App() {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all");

  // useEffect(() => {
  //   const saved = localStorage.getItem("expenses");
  //   if (saved) {
  //     setExpenses(JSON.parse(saved));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense: Omit<Expense, "id">) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const filteredExpenses = expenses.filter((expense) => {
    if (filter === "all") return true;
    return expense.category === filter;
  });
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      {/* Sidebar */}
      <div className="p-4 ml-4 text-black dark:text-white flex gap-x-2 ">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="mt-2">Expenses</p>
        <p className="mt-2">Overview</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-4 gap-3 text-black dark:text-white mx-6">
        <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded shadow">
          <p>Total Expenses</p>
          <h2 className="text-xl font-bold">€{total}</h2>
        </div>
        <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded shadow">
          <p>Number of Items</p>
          <h2 className="text-xl font-bold">{expenses.length}</h2>
        </div>
        <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded shadow">
          <p>Average</p>
          <h2 className="text-xl font-bold">
            €{expenses.length ? Math.round(total / expenses.length) : 0}
          </h2>
        </div>
        <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded shadow">
          <p>Chart</p>
          <ExpenseChart expenses={expenses} />
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-6 text-black dark:text-white">
        <div className="max-w-xxl mx-auto bg-gray-200 dark:bg-gray-900 p-6 rounded-l shadow">
          <div>
            {/* <h1 className="text-2xl font-bold mb-4 text-center">
              Expense Tracker
            </h1> */}
            <div className="flex gap-2 mb-4">
              <button
                className={
                  filter === "all"
                    ? "font-bold px-3 py-1 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded"
                    : "px-3 py-1 text-gray-500 bg-gray-100 dark:bg-gray-800 rounded"
                }
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={
                  filter === "Food"
                    ? "font-bold px-3 py-1 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded"
                    : "px-3 py-1 text-gray-500 bg-gray-100 dark:bg-gray-800 rounded"
                }
                onClick={() => setFilter("Food")}
              >
                Food
              </button>
              <button
                className={
                  filter === "Rent"
                    ? "font-bold px-3 py-1 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded"
                    : "px-3 py-1 text-gray-500 bg-gray-100 dark:bg-gray-800 rounded"
                }
                onClick={() => setFilter("Rent")}
              >
                Rent
              </button>
              <button
                className={
                  filter === "Other"
                    ? "font-bold px-3 py-1 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded"
                    : "px-3 py-1 text-gray-500 bg-gray-100 dark:bg-gray-800 rounded"
                }
                onClick={() => setFilter("Other")}
              >
                Other
              </button>
            </div>
            <ExpenseForm onAdd={addExpense} />
            <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} />
            <h2 className="text-lg font-semibold mt-4">Total: €{total}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
