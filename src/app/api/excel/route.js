// app/api/filterCsv/route.js
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

export async function GET(req) {
  const url = new URL(req.url);
  const id = url.searchParams.get('id'); // Get the ID from query parameters

  if (!id) {
    return new Response(JSON.stringify({ error: 'ID is required' }), { status: 400 });
  }

  // Path to your CSV file
  const filePath = path.join(process.cwd(), '/public/xl1.csv'); // Update with the correct path

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return new Response(JSON.stringify({ error: 'File not found' }), { status: 404 });
  }

  const results = [];

  // Read and parse the CSV file
  const readStream = fs.createReadStream(filePath).pipe(csv());

  // Process each row of the CSV file
  for await (const row of readStream) {
    if (row.time_point_id === id) {  // Assuming your CSV file has a column named 'id'
      results.push(row);
    }
  }

  // Return the filtered records
  if (results.length > 0) {
    return new Response(JSON.stringify(results), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new Response(JSON.stringify({ error: 'No records found for the given ID' }), { status: 404 });
  }
}
