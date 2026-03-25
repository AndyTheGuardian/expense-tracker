import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

type Expense = {
  id: number;
  name: string;
  amount: number;
  category: string;
};

type Props = {
  expenses: Expense[];
};

function ExpenseChart({ expenses }: Props) {
  const colors = ["#3399ff", "#66ff66", "#ff6699"];

  const data = [
    {
      name: "Food",
      value: expenses
        .filter((e) => e.category === "Food")
        .reduce((sum, e) => sum + e.amount, 0),
    },
    {
      name: "Rent",
      value: expenses
        .filter((e) => e.category === "Rent")
        .reduce((sum, e) => sum + e.amount, 0),
    },
    {
      name: "Other",
      value: expenses
        .filter((e) => e.category === "Other")
        .reduce((sum, e) => sum + e.amount, 0),
    },
  ];

  return (
    <PieChart width={300} height={180}>
      <Pie data={data} dataKey="value" nameKey="name" outerRadius={70}>
        {data.map((_, index) => (
          <Cell key={index} name="name" fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
}

export default ExpenseChart;
