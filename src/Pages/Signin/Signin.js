import './Signin.css';
import axios from 'axios';
import React, { Component } from 'react';
import { Alert, Form, FormGroup, Input, Label } from 'reactstrap';
import myStore from '../../redux/Store';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      userData: null,
      user: 'Sign In',
      signinAlert: '',
      signupAlert: '',
    };
    this.handleInputField = this.handleInputField.bind(this);
  }
  handleInputField = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSigninButton = (event) => {
    event.preventDefault();
    axios
      .get('http://localhost:3001/users')
      .then((response) => {
        response.data.map((item) => {
          if (
            item.email === this.state.email &&
            item.password === this.state.password
          ) {
            // this.setState({
            //   user: item.email,
            // });
            myStore.dispatch({
              type: 'VALID_USER',
              value: item.email,
            });
          }
        });
      })
      .catch((error) => console.log(error));
    this.props.history.goBack('/');
  };

  handleSignupButton = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3001/users', {
        id: Math.random(),
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        if (response.status === 201) {
          this.setState({
            signupAlert: (
              <Alert color='primary'>
                You have successfully sign up! Please sign in...
              </Alert>
            ),
          });
        }
      })
      .catch((error) => console.log(error));
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    return (
      <div>
        {this.state.signupAlert}
        <Form className='signin'>
          <FormGroup>
            <Label for='emailField'>Email</Label>
            <Input
              id='emailField'
              name='email'
              placeholder='Email...'
              type='email'
              value={this.state.email}
              onChange={this.handleInputField}
            />
          </FormGroup>
          <FormGroup>
            <Label for='passwordField'>Password</Label>
            <Input
              id='passwordField'
              name='password'
              placeholder='Password...'
              type='password'
              value={this.state.password}
              onChange={this.handleInputField}
            />
          </FormGroup>
          <FormGroup>
            <button
              className='btn btn-primary'
              onClick={this.handleSigninButton}>
              Sign In
            </button>
            <br />
            <button
              className='btn btn-secondary'
              onClick={this.handleSignupButton}>
              Sign Up
            </button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Signin;
