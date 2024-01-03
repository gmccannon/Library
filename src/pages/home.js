import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import  book1 from '../images/1.jpg';
import  book2 from '../images/2.jpg';
import  book3 from '../images/3.jpg';
import  book4 from '../images/4.jpg';

export default function Homepage() {
  const navigate = useNavigate();

  const bookSources = [
    book1, book2, book3, book4,
  ];

    return(
      <div id="homepage">
        <div>
          <h1>KOALA - Knowledgebase for Online Application Learning and Advancement</h1>
          <h4>Check out this month's featured books below!</h4>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {bookSources.map((bookSource, index) => (
          <form onSubmit={ () => { navigate("../books/info", { state: { info: index + 1} }); }}>

            <button type="submit">
              <img className="bookpage" src={bookSource} alt={`Book${index + 1}`} />
            </button>

          </form>
          ))}
        </div>
      </div>
    )
  }