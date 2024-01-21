import { KpiResultType, ChartType } from 'shared-models';
import { getWeekNumber } from './date-helpers';

export function filterAndMapMetrics(
  array: KpiResultType[],
  predicate: (value: KpiResultType) => boolean
): ChartType[] {
  return array.filter(predicate).map((item) => ({
    week: getWeekNumber(item.date),
    value: item.value,
  }));
}

/*

// http://learnjsdata.com/combine_data.html

### `any` Type:

- The `any` type is a type that TypeScript allows anything to be assigned to. 
- You can call any methods on it, assign it to any other type, etc., without any compile-time checking.
- It effectively turns off TypeScript's type checking for that variable.
- In your function, using `any` would mean that you could pass values with any structure to it
- TypeScript wouldn't check whether the `property` actually exists on those values or not.

### `unknown` Type:

- The `unknown` type is a safer alternative to `any`. 
- It's a type-safe counterpart that forces you to perform some kind of type checking before performing operations on the value or passing it to a function that expects a more specific type.
- In your function, using `unknown` ensures that the value of `property` must be a key of `T`
- TypeScript will enforce that any usage of that value adheres to the constraints of `T`.
- By using `unknown`, you're telling TypeScript that you don't know the exact type, but you still want to enforce type safety by only allowing operations that are valid on all types.

### How This Works in Your Function:

`T extends Record<string, unknown>`: 
- Here, `T` is constrained to an object type where the keys are strings, and the values can be anything (`unknown`).
- `keyof T`: This represents the union of all known, public property names of `T`.
- `value: unknown`: Since the value is being compared for equality, it doesn't need a specific type. 
- Using `unknown` ensures that you can pass any value, but you can't perform operations on it that aren't valid for all types.

By using `unknown` instead of `any`, the function maintains flexibility in handling various types but enforces that the `property` argument is a valid key of the objects within the array, enhancing type safety.

*/
export function filterByProperty<T extends Record<string, unknown>>(
  array: T[],
  property: keyof T,
  value: unknown
): T[] {
  return array.filter((item) => item[property] === value);
}

export function mapProperty<
  T extends Record<string, unknown>,
  K extends keyof T
>(array: T[], property: K): T[K][] {
  return array.map((item) => item[property]);
}

export function groupBy<T extends Record<string, unknown>>(
  array: T[],
  property: keyof T
): Record<string, T[]> {
  return array.reduce((acc: Record<string, T[]>, obj: T) => {
    const key = String(obj[property]);
    acc[key] = acc[key] || [];
    (acc[key] as T[]).push(obj);
    return acc;
  }, {} as Record<string, T[]>);
}

export function sumByProperty<T extends Record<string, unknown>>(
  array: T[],
  property: keyof T
): number {
  return array.reduce((sum, obj) => sum + Number(obj[property]), 0);
}

export function sortBy<T extends Record<string, unknown>>(
  array: T[],
  property: keyof T,
  ascending = true
): T[] {
  return array.sort(
    (a, b) => (ascending ? 1 : -1) * (a[property] > b[property] ? 1 : -1)
  );
}

export function uniqueValues<
  T extends Record<string, unknown>,
  K extends keyof T
>(array: T[], property: K): T[K][] {
  return Array.from(new Set(array.map((item) => item[property])));
}
