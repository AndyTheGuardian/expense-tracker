import { useState } from "react";

type Expense = {
  id: number;
  name: string;
  amount: number;
  category: string;
};

type Props = {
  expense: Expense;
  onEdit: (id: number, text: string, amount: number, category: string) => void;
};

function ExpenseEdit({ expense, onEdit }: Props) {
  const [editName, setEditName] = useState(expense.name);
  const [editAmount, setEditAmount] = useState(expense.amount);
  const [editCategory, setEditCategory] = useState(expense.category);

  const handleSubmit = () => {
    // setEditIsEditing(false);
    onEdit(expense.id, editName, editAmount, editCategory);
  };

  return (
    <div className="flex">
      <input
        className="w-36 h-10 flex-l mr-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
        type="text"
        placeholder="Name"
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
      />
      <input
        className="w-20 h-10 flex-1 mr-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
        type="number"
        placeholder="Amount"
        value={editAmount}
        onChange={(e) => setEditAmount(Number(e.target.value))}
      />
      <input
        className="w-24 h-10 flex-l mr-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
        type="text"
        placeholder="Category"
        value={editCategory}
        onChange={(e) => setEditCategory(e.target.value)}
      />
      <button
        className="h-10 flex-r bg-sky-500 bg-opacity-50 hover:bg-opacity-100 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Save
      </button>
    </div>
  );
}

export default ExpenseEdit;
