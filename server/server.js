const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3');

const app = express();
const port = 3001;

const db = new sqlite3.Database('./library.db');

app.use(cors());

app.get('/api/books/:id', (req, res) => {

  console.log('Received request for book with id:', req.params.id); //debug output

  const bookId = req.params.id;

  db.get('SELECT * FROM books WHERE number = ?', [bookId], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(row);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
