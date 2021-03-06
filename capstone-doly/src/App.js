import React from 'react'

import ListArticle  from './pages/article-list/ListArticle';
import Education from './pages/edukasi/Edukasi';
import CheckKesehatan from './pages/cek-kesehatan/Kesehatan';
import Navigasi from './pages/navbar/Navbar';
import Dashboard from './pages/dashboard/dashboard'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import getData from './utils/data';

import './App.css'

function App() {
  const datas = getData();

  return (

    <Router>
      <div className="App">
        <Navigasi />
        <Switch>
          <Route exact path='/' children={<Dashboard />} />
          <Route path='/article' children={<ListArticle article={datas} />} />
          <Route path="/edukasi" children={<Education />} />
          <Route path="/cek-kesehatan" children={<CheckKesehatan />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

