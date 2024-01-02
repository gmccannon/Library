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

import './App.css'

function Homepage() {
  return(
    <div id="homepage">
      <div>
        <h1>KOALA - Knowledgebase for Online Application Learning and Advancement</h1>
        <h4>Check out this month's featured books below!</h4>
      </div>
      <img class="coverpage" src={book1} alt="Book1"></img>
      <img class="coverpage" src={book2} alt="Book2"></img>
      <img class="coverpage" src={book3} alt="Book3"></img>
      <img class="coverpage" src={book4} alt="Book4"></img>
    </div>
  )
}

function Bookspage() {
  return(
    <div id="bookspage">
      <h1>Books</h1>
      <h4>Our books</h4>
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
            <Route path="/home" element={<Homepage theme={darkTheme}/>} />
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