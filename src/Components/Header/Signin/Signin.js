import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import myStore from '../../../redux/Store';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

class Signin extends Component {
  handleLogout = (event) => {
    // console.log('Logout successfully!');
    myStore.dispatch({
      type: 'LOGOUT_ME',
      value: 'Sign In',
    });
  };
  render() {
    console.log(this.props.user);
    const logout =
      this.props.user !== 'Sign In' ? (
        <Button onClick={this.handleLogout}>Logout</Button>
      ) : null;
    return (
      <Link to='/signin'>
        <button className='btn btn-secondary'>{this.props.user}</button>
        {logout}
      </Link>
    );
  }
}

export default connect(mapStateToProps)(Signin);
