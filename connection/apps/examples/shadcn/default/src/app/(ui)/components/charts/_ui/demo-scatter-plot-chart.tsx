import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const DemoScatterPlotComponent = ({
  data,
}: {
  data: { quantity: number; price: number }[];
}) => (
  <ResponsiveContainer width="100%" height={400}>
    <ScatterChart>
      <CartesianGrid />
      <XAxis type="number" dataKey="quantity" name="Quantity" unit="" />
      <YAxis type="number" dataKey="price" name="Price" unit="$" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="Quantity vs Price" data={data} fill="#8884d8" />
    </ScatterChart>
  </ResponsiveContainer>
);

export default DemoScatterPlotComponent;
