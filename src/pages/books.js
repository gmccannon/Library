import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import  book1 from '../images/documentation.jpg';
import  book2 from '../images/comment-out-tests.jpg';
import  book3 from '../images/jpg-compression.jpg';
import  book4 from '../images/writing-code-noone.jpg';
import  book5 from '../images/exiting-vim.jpg';
import  book6 from '../images/googling-error-messages.jpg';
import  book7 from '../images/hoping-nobody.jpg';
import  book8 from '../images/ignore-warnings.jpg';
import  book9 from '../images/hoping-this-works.jpg';
import  book10 from '../images/regex.jpg';
import  book11 from '../images/tyring-stuff-until-it-works.jpg';
import  book12 from '../images/zindez.jpg';
import  book13 from '../images/memor.jpg';
import  book14 from '../images/naming.jpg';
import  book15 from '../images/changing-stuff.jpg';

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