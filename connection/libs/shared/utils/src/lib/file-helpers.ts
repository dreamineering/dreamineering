import { saveAs } from 'file-saver';
import Papa from 'papaparse';

export function exportToCsv(filename: string, rows: object[]) {
  const csv = Papa.unparse(rows);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  saveAs(blob, filename);
}
