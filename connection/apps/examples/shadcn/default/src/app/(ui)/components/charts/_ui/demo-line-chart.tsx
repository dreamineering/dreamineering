import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

/*
. In Recharts, you need to pass an array of objects as the data prop, 
where each object represents a point on the chart, 
and the dataKey prop specifies the key in those objects to use as the value.

*/

const DemoLineChartComponent = ({
  northData,
  southData,
}: {
  northData: number[];
  southData: number[];
}) => {
  // Create an array of objects where each object represents a point on both lines
  const data = northData.map((value, index) => ({
    northData: value,
    southData: southData[index],
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="northData" stroke="#8884d8" />
        <Line type="monotone" dataKey="southData" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DemoLineChartComponent;
