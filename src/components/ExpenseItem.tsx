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
  onDelete: (id: number) => void;
};

function ExpenseItem({ expense, onEdit, onDelete }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(expense.name);
  const [editAmount, setEditAmount] = useState(expense.amount);
  const [editCategory, setEditCategory] = useState(expense.category);

  function handleSubmit() {
    onEdit(expense.id, editName, editAmount, editCategory);
    setIsEditing(false);
  }

  return (
    <>
      {isEditing ? (
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
      ) : (
        <div className="flex bg-gray-50 dark:bg-gray-800 p-2 rounded my-2">
          <p className="flex-grow">
            {expense.name} - €{expense.amount} ({expense.category})
          </p>
          <button
            className="flex-r text-blue-500 mr-2"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            className="flex-r text-red-500"
            onClick={() => onDelete(expense.id)}
          >
            ❌
          </button>
        </div>
      )}
    </>
  );
}

export default ExpenseItem;
