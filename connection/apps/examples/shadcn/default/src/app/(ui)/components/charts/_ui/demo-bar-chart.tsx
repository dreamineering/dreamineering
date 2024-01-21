import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const DemoBarChartComponent = ({
  data,
}: {
  data: { product: string; totalSales: number }[];
}) => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="product" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="totalSales" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);

export default DemoBarChartComponent;
