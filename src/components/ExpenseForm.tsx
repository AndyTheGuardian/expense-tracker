type Props = {
  onAdd: (expense: { name: string; amount: number; category: string }) => void;
};

import { useState } from "react";

function ExpenseForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    onAdd({ name, amount, category });
    setName("");
    setAmount(0);
    setCategory("");
  };

  return (
    <div>
      <input
        className="flex-r border border-gray-300 dark:bg-gray-800 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mr-2"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="flex-1 border border-gray-300 dark:bg-slate-800 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mr-2"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <input
        className="flex-l border border-gray-300 dark:bg-gray-800 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mr-2"
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button
        className="bg-blue-500 hover: bg-blue-600 text-white px-4 py-2 rounded-lg"
        onClick={handleSubmit}
      >
        Add Expense
      </button>
    </div>
  );
}

export default ExpenseForm;
