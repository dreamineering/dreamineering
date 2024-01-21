import { RevenueChart } from 'shared-models';

export const generateYAxis = (revenue: RevenueChart[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels: string[] = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    const label = `$${i / 1000}K`;
    yAxisLabels.push(label);
  }

  return { yAxisLabels, topLabel };
};

// function transformSaturationData(
//   results: SaturationResultType[],
//   key: string
// ): TransformedData[] {
//   return results.map((result) => {
//     let value: number | null = null;

//     // Create intermediate variables to handle TypeScript's inability to discern types
//     // when accessing values with bracket notation.
//     const sumValue = result._sum?.[key as keyof typeof result._sum] as
//       | Decimal
//       | number
//       | null;
//     const avgValue = result._avg?.[key as keyof typeof result._avg];

//     if (sumValue && typeof sumValue !== 'number') {
//       // Assume sumValue is a Decimal and has a toNumber() method
//       value = roundToOneDecimalPlace(sumValue);
//     } else if (avgValue && typeof avgValue !== 'number') {
//       // Assume avgValue is a Decimal and has a toNumber() method
//       value = roundToOneDecimalPlace(avgValue);
//     } else {
//       value = roundToOneDecimalPlace(avgValue);
//     }

//     return {
//       name: result.provider_name,
//       [key]: value,
//     };
//   });
// }
