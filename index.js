import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/monthly-sales', (req, res) => {
  res.json([
    { month: 'January', value: 1200 },
    { month: 'February', value: 1800 },
    { month: 'March', value: 1500 },
    { month: 'April', value: 2100 },
  ]);
});

app.get('/api/users-by-country', (req, res) => {
  res.json([
    { country: 'USA', count: 5 },
    { country: 'Germany', count: 3 },
    { country: 'Poland', count: 4 },
  ]);
});

app.get('/api/orders-by-category', (req, res) => {
  res.json([
    { category: 'Electronics', count: 10 },
    { category: 'Food', count: 7 },
    { category: 'Clothing', count: 4 },
  ]);
});

app.get('/api/revenue-sources', (req, res) => {
  res.json([
    { source: 'Online', value: 6000 },
    { source: 'Store', value: 3500 },
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
