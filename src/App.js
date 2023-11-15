import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Main from './Main';
import axios from 'axios';
import { Provider } from 'react-redux';
import myStore from './redux/Store';

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
    return this.state.data ? (
      <Provider store={myStore}>
        <Main data={this.state.data} />
      </Provider>
    ) : null;
  }
}

export default App;
