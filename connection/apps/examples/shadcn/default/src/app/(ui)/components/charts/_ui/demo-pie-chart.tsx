import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

interface LabelProps {
  name: string;
  percent: number;
}

const DemoPieChartComponent = ({
  data,
}: {
  data: { region: string; sales: number }[];
}) => (
  <ResponsiveContainer width="100%" height={400}>
    <PieChart>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={({ name, percent }: LabelProps) =>
          `${name} ${(percent * 100).toFixed(0)}%`
        }
        outerRadius={80}
        fill="#8884d8"
        dataKey="sales"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
);

export default DemoPieChartComponent;
