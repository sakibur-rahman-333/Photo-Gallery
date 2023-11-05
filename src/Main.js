import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import All from './Pages/All/All';
import Animal from './Pages/Animal/Animal';
import Food from './Pages/Food/Food';
import Nature from './Pages/Nature/Nature';
import Signin from './Pages/Signin/Signin';

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path='/' render={() => <All data={this.props.data} />} />
        <Route
          exact
          path='/animal'
          render={() => <Animal data={this.props.data} />}
        />
        <Route
          exact
          path='/food'
          render={() => <Food data={this.props.data} />}
        />
        <Route
          exact
          path='/nature'
          render={() => <Nature data={this.props.data} />}
        />
        <Route exact path='/signin' component={Signin} />
        <Body />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Main;
