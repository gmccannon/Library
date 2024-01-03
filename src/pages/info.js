import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import NestedModal from '../Components/Model';

import  book1 from '../images/1.jpg';
import  book2 from '../images/2.jpg';
import  book3 from '../images/3.jpg';
import  book4 from '../images/4.jpg';
import  book5 from '../images/5.jpg';
import  book6 from '../images/6.jpg';
import  book7 from '../images/7.jpg';
import  book8 from '../images/8.jpg';
import  book9 from '../images/9.jpg';
import  book10 from '../images/10.jpg';
import  book11 from '../images/11.jpg';
import  book12 from '../images/12.jpg';
import  book13 from '../images/13.jpg';
import  book14 from '../images/14.jpg';
import  book15 from '../images/15.jpg';

export default function Info() {
  const navigate = useNavigate();
  const location = useLocation();
  const [book, setBook] = useState(null);

  const books = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, book13, book14, book15,]

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


        <div class="book-container-info">
        <IconButton id="back-button" onClick={() => navigate('../books')}>
            <p>Back to Books</p>
        </IconButton>

  <img class="bookpage-info" src={books[bookNumber - 1]} alt={`Book${bookNumber}`} />
  
  <div class="book-details">
    {book ? (
        <>
        <h1>{book.title}</h1>
        <p>Author: {book.author}</p>
        <p>Description: {book.description}</p>
        </>
    ) : (
        <p>Loading...</p>
    )}
    <NestedModal book={book?.title}/>
  </div>
</div>

    </div>
  );
}
