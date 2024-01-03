import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Info() {
  const navigate = useNavigate();
  const location = useLocation();
  const [book, setBook] = useState(null);

  // Access the passed variable from the state object
  const bookNumber = location.state?.info;

  useEffect(() => {
    fetch(`http://localhost:3001/api/books/${bookNumber}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((error) => console.error('Error fetching book data:', error));
  }, [bookNumber]);

  return (
    <div id="cartpage">
        <h1>{bookNumber}</h1>
      {book ? (
        <>
          <h1>{book.title}</h1>
          <p>Author: {book.author}</p>
          <p>Description: {book.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={() => navigate('../books')}>Go back</button>
    </div>
  );
}
