import * as React from 'react';
import { useNavigate } from 'react-router-dom';

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

export default function Bookspage() {
  const navigate = useNavigate();

  const bookSources = [
    book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, book13, book14, book15
  ];

  return(
    <div id="bookspage">
      <h1>Our Books</h1>
      <div className="row">
      {bookSources.map((bookSource, index) => (
        <div className="book-container" key={index}>
          <form onSubmit={() => { navigate("./info", { state: { info: index + 1 } }); }}>
            <button type="submit">
              <img className="bookpage" src={bookSource} alt={`Book${index + 1}`} />
            </button>
          </form>
        </div>
      ))}
    </div>
    </div>
  )
}