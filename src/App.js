import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Main from './Main';
import axios from 'axios';

class App extends Component {
  state = {
    data: null,
  };
  componentDidMount() {
    axios
      .get('http://localhost:3001/data')
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return this.state.data ? <Main data={this.state.data} /> : null;
  }
}

export default App;
