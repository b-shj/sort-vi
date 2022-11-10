import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SortingVisualiser from './Components/sortingVisualiser'
import More from './Components/More'
import About from './Components/about'
import NavBar from './Components/navBar'


class App extends Component{
  state = {};
  render(){
    return (
      <>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SortingVisualiser />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/more" element={<More />}/>
          </Routes>
       </BrowserRouter>
      </>
    );
  }
}

export default App;
