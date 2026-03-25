type Expense = {
  id: number;
  name: string;
  amount: number;
  category: string;
};

type Props = {
  expense: Expense;
  onDelete: (id: number) => void;
};

function ExpenseItem({ expense, onDelete }: Props) {
  return (
    <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-950 p-2 rounded my-2">
      <p>
        {expense.name} - €{expense.amount} ({expense.category})
      </p>
      <button className="text-red-500" onClick={() => onDelete(expense.id)}>
        ❌
      </button>
    </div>
  );
}

export default ExpenseItem;
