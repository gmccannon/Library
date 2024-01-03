import React from 'react';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch } from "@mui/material"

import Homepage from './pages/home'
import Bookspage from './pages/books';
import About from './pages/about';
import Info from './pages/info';

import  TopBar  from './Components/Topbar'
import BottomBar from './Components/bottombar';

import './App.css'

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
        <BrowserRouter>
          <TopBar theme={darkTheme}/>
          <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
          <Routes>
            {["/home", ""].map((path, index) => <Route path={path} element={<Homepage theme={darkTheme} />} />)}
            <Route path="/books" element={<Bookspage theme={darkTheme}/>} />
            <Route path="/about" element={<About theme={darkTheme}/>} />
            <Route path="/cart" element={<Cart theme={darkTheme}/>} />
            <Route path="/login" element={<Login theme={darkTheme}/>} />
            <Route path="/books/info" element={<Info theme={darkTheme}/>} />
          </Routes>
          <BottomBar theme={darkTheme}/>
        </BrowserRouter>
    </ThemeProvider>

  )

}

export default App;