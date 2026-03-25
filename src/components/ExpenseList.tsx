import ExpenseItem from "./ExpenseItem";

type Expense = {
  id: number;
  name: string;
  amount: number;
  category: string;
};

type Props = {
  expenses: Expense[];
  onDelete: (id: number) => void;
};

function ExpenseList({ expenses, onDelete }: Props) {
  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ExpenseList;
