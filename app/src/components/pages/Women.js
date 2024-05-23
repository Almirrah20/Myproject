import React, { useState } from 'react';
import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom';
import './womenc.css';
import './women.css';
import Womencc from './Womencc.js';
import main from './main.json';
import Navwomen from '../Navwomen.js';
import Bridalss from './Bridals.js';
import Weddingw from './Weddingw.js';
import Meetingg from './Meeting.js';
import Partyy from './Party.js';
import Brunchh from './Brunch.js';
import Casuall from './Casual.js';
import Bridals from './Bridals.js';
import Meeting from './Meeting.js';





export default function Women() {


  return (
    <>
    <div className='main'>
    <Router>
      <Navwomen />
      <Switch>
      <Route path="/" exact component={Weddingw} />
      <Route path="/Bridals" component={Bridals} />
      <Route path="/Party" component={Partyy} />
      <Route path="/Meeting" component={Meeting} />
      <Route path="/Casual" component={Casuall} />
      </Switch>
    </Router>
    <h2 className='headingg'>Trendy Looks </h2>
    <div className="App1">
      {main.map(item => (
        <Womencc key={item.id} item={item} />
      ))}
      
    </div>
    </div>
    </>
    
  );
}
