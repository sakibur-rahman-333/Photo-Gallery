import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import All from './Pages/All/All';
import Animal from './Pages/Animal/Animal';
import Food from './Pages/Food/Food';
import Nature from './Pages/Nature/Nature';
import Signin from './Pages/Signin/Signin';

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={All} />
      <Route exact path='/animal' component={Animal} />
      <Route exact path='/food' component={Food} />
      <Route exact path='/nature' component={Nature} />
      <Route exact path='/signin' component={Signin} />
      <Body />
      <Footer />
    </BrowserRouter>
  );
}

export default Main;
