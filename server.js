import app from './app.js';

const PORT = process.env.PORT;

if (!PORT) {
  throw new Error('PORT is missing. Check that your .env file exists and is being loaded.');
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});