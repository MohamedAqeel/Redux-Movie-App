import React from "react";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import "./App.scss"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import MovieDetails from "./components/MovieDetails/MovieDetails"
import PageNotFound from "./components/404NotFound/PageNotFound"
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
    <Router>
      <Header></Header>
      <div className="container">
      <Routes>
      <Route path="/" exact element={<Home></Home>} />
      <Route path="/movie/:imdbID"  element={<MovieDetails></MovieDetails>} />
      <Route element={<PageNotFound></PageNotFound>} />
      </Routes>
      </div>
     <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
