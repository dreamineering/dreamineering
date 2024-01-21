import { Payment, columns } from './_ui/columns';
import { DataTable } from './_ui/data-table';

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    // ...
  ];
}

export default async function JourneyDashboardPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <h1>Journey Dashboard</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
