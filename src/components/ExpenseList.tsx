import ExpenseItem from "./ExpenseItem";

type Expense = {
  id: number;
  name: string;
  amount: number;
  category: string;
};

type Props = {
  expenses: Expense[];
  onEdit: (id: number, text: string, amount: number, category: string) => void;
  onDelete: (id: number) => void;
};

function ExpenseList({ expenses, onEdit, onDelete }: Props) {
  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
