import React, { useState } from 'react';
import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom';
import './Mencc.css';
import main1 from './main1.json';
import Mennav from '../Mennav.js'
import Engagements from './Engagement.js';
import Seminar1 from './Seminars.js';
import Gatherings1 from './Gatherings.js'
import Weddings from './Wedding.js'
import Sports1 from './Sports';
import Mencc from './Mencc.js';





export default function Men() {


  return (
    <>
    <div className='main'>
    <Router>
      <Mennav />
      <Switch>
      <Route path="/" exact component={Weddings} />
      <Route path="/Engagement" component={Engagements} />
      <Route path="/Seminars" component={Seminar1} />
      <Route path="/Gatherings" component={Gatherings1} />
      <Route path="/Sports" component={Sports1} />
      </Switch>
    </Router>
    <h2 className='headingg'>Trendy Looks </h2>
    <div className="App1">
      {main1.map(item => (
        <Mencc key={item.id} item={item} />
      ))}
      
    </div>
    </div>
    </>
    
  );
}
