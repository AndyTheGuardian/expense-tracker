import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-6 text-black dark:text-white">
      <div className="max-w-xxl mx-auto bg-gray-200 dark:bg-gray-900 p-6 rounded-xl shadow">
        <div>
          <h1 className="text-2xl font-bold mb-4 text-center">
            Expense Tracker
          </h1>
          <div className="flex gap-2 mb-4">
            <button
              className="px-3 py-1 text-gray-500 bg-gray-200 dark:bg-gray-800 rounded"
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className="px-3 py-1 text-gray-500 bg-gray-200 dark:bg-gray-800 rounded"
              onClick={() => setFilter("Food")}
            >
              Food
            </button>
            <button
              className="px-3 py-1 text-gray-500 bg-gray-200 dark:bg-gray-800 rounded"
              onClick={() => setFilter("Rent")}
            >
              Rent
            </button>
            <button
              className="px-3 py-1 text-gray-500 bg-gray-200 dark:bg-gray-800 rounded"
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
  );
}

export default App;
