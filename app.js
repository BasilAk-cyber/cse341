import express from 'express';
import { getDb } from './src/db/connect.js';
import { getBooksHandler } from './src/controllers/book.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Books API is running'
  });
});

app.get('/trails', async (req, res) => {
  try {
    console.log('Fetching trails...');

    const trails = await getDb()
      .collection('trails')
      .find({})
      .toArray();

    return res.status(200).json(trails);
  } catch (error) {
    console.error('Failed to retrieve trails:', error);

    return res.status(500).json({
      message: 'Failed to retrieve trails',
    });
  }
});

app.get('/books', getBooksHandler);

app.use((req, res) => {
  console.log('Unmatched request:', req.method, req.url);
  res.status(404).send('Route not found');
});

export default app;