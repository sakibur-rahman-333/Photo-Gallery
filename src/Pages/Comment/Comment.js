import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Input } from 'reactstrap';
import myStore from '../../redux/Store';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userComment: '',
    };
    this.handleUserComment = this.handleUserComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUserComment = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.image.comments.push({
      id: Math.random(),
      email: this.props.user,
      comment: this.state.userComment,
    });
    this.setState({
      userComment: '',
    });
    // console.log(this.props.image);
    const url = 'http://localhost:3001/data/' + this.props.image.id;
    await axios.put(url, this.props.image);
    const responseData = await axios.get(url);
    // console.log(responseData.data);
    myStore.dispatch({
      type: 'UPDATE_MODAL',
      value: responseData.data.comments,
    });
  };

  render() {
    const flag = this.props.user !== 'Sign In' ? false : true;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Input
            type='text'
            name='userComment'
            placeholder='Add a comment...'
            value={this.state.userComment}
            onChange={this.handleUserComment}
          />
        </FormGroup>
        <FormGroup>
          <Input className='btn btn-primary' type='submit' disabled={flag} />
        </FormGroup>
      </Form>
    );
  }
}

export default connect(mapStateToProps)(Comment);
