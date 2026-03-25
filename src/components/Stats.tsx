type Expense = {
  id: number;
  name: string;
  amount: number;
  category: string;
};

type Props = {
  expenses: Expense[];
};

function Stats({ expenses }: Props) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="grid grid-cols-3 gap-3 text-black dark:text-white mx-6">
      <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded shadow">
        <p className="text-gray-500 text-sm">Total Expenses</p>
        <h2 className="text-xl font-bold">€{total}</h2>
      </div>
      <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded shadow">
        <p className="text-gray-500 text-sm">Transactions</p>
        <h2 className="text-xl font-bold">{expenses.length}</h2>
      </div>
      <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded shadow">
        <p className="text-gray-500 text-sm">Average</p>
        <h2 className="text-xl font-bold">
          €{expenses.length ? Math.round(total / expenses.length) : 0}
        </h2>
      </div>
    </div>
  );
}

export default Stats;
