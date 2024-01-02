import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch } from "@mui/material"

import  TopBar  from './Components/Topbar'
import BottomBar from './Components/bottombar';

import  book1 from './images/documentation.jpg';
import  book2 from './images/comment-out-tests.jpg';
import  book3 from './images/jpg-compression.jpg';
import  book4 from './images/writing-code-noone.jpg';
import  book5 from './images/exiting-vim.jpg';
import  book6 from './images/googling-error-messages.jpg';
import  book7 from './images/hoping-nobody.jpg';
import  book8 from './images/ignore-warnings.jpg';
import  book9 from './images/know-about-stuff.jpg';
import  book10 from './images/regex.jpg';
import  book11 from './images/tyring-stuff-until-it-works.jpg';
import  book12 from './images/zindez.jpg';
import  book13 from './images/memor.jpg';
import  book14 from './images/naming.jpg';
import  book15 from './images/changing-stuff.jpg';


import './App.css'

function Homepage() {
  return(
    <div id="homepage">
      <div>
        <h1>KOALA - Knowledgebase for Online Application Learning and Advancement</h1>
        <h4>Check out this month's featured books below!</h4>
      </div>
      <div>
        <img class="coverpage" src={book1} alt="Book1"></img>
        <img class="coverpage" src={book2} alt="Book2"></img>
        <img class="coverpage" src={book3} alt="Book3"></img>
        <img class="coverpage" src={book4} alt="Book4"></img>
      </div>
    </div>
  )
}

function Bookspage() {
  return(
    <div id="bookspage">
      <h1>Our Books</h1>
      <div>
        <img class="bookpage" src={book1} alt="Book1"></img>
        <img class="bookpage" src={book2} alt="Book2"></img>
        <img class="bookpage" src={book3} alt="Book3"></img>
        <img class="bookpage" src={book4} alt="Book4"></img>
        <img class="bookpage" src={book5} alt="Book5"></img>
        <img class="bookpage" src={book6} alt="Book6"></img>
        <img class="bookpage" src={book7} alt="Book7"></img>
        <img class="bookpage" src={book8} alt="Book8"></img>
        <img class="bookpage" src={book9} alt="Book9"></img>
        <img class="bookpage" src={book10} alt="Book10"></img>
        <img class="bookpage" src={book11} alt="Book11"></img>
        <img class="bookpage" src={book12} alt="Book9"></img>
        <img class="bookpage" src={book13} alt="Book10"></img>
        <img class="bookpage" src={book14} alt="Book11"></img>
        <img class="bookpage" src={book15} alt="Book11"></img>
      </div>
    </div>
  )
}

function About() {
  return(
    <div id="aboutpage">
      <h1>About</h1>
    </div>
  )
}

function Login() {
  return(
    <div id="loginpage">
      <h1>Login</h1>
    </div>
  )
}

function Cart() {
  return(
    <div id="cartpage">
      <h1>Cart</h1>
    </div>
  )
}

function App() {
  // state to manage the dark mode
  const [toggleDarkMode, setToggleDarkMode] = React.useState(false);

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light', // handle the dark mode state on toggle
      primary: {
        main: '#ffffff',
      },
      secondary: {
        main: '#000000',

      },
    },
  });

  return(
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Router>
          <TopBar theme={darkTheme}/>
          <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
          <Routes>
            {["/home", ""].map((path, index) => <Route path={path} element={<Homepage theme={darkTheme} />} />)}
            <Route path="/books" element={<Bookspage theme={darkTheme}/>} />
            <Route path="/about" element={<About theme={darkTheme}/>} />
            <Route path="/cart" element={<Cart theme={darkTheme}/>} />
            <Route path="/login" element={<Login theme={darkTheme}/>} />
          </Routes>
          <BottomBar theme={darkTheme}/>
        </Router>
    </ThemeProvider>

  )

}

export default App;