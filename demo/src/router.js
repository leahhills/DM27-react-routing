import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Faq from './Faq.js';
import People from './People.js';
import Person from './Person.js';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about/faq' component={Faq} />
    <Route path='/about' component={About} />
    <Route path='/people/:id' component={Person} />
    <Route path='/people' component={People} />
  </Switch>
)