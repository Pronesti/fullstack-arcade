import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './views/home.js';
import PlayGame from './views/playGame.js';


const getData = async () => {
  const res = await axios.get('/api/items')
  const token = res.data.token
  console.log(token) // guardar en localstorage

  const verify = await axios.post('/api/items/verify', {
    token,
  })

}

function App() {
  return (
    <div className='App'>
      <div className='Screen'>
      <p>{getData()}</p>
        <Router>
          <div>
            <Header />
            <Route exact path='/' component={Home} />
            <Route path='/games/' component={PlayGame}/>
            <Footer />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
