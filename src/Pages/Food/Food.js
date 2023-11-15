import '../All/All.css';
import React, { Component } from 'react';
import {
  CardImg,
  Modal,
  ModalHeader,
  ModalBody,
  CloseButton,
} from 'reactstrap';
import Comment from '../Comment/Comment';
import { connect } from 'react-redux';

const mapStateToPropsFood = (state) => {
  return {
    image: state.updateModal,
  };
};

class Food extends Component {
  state = {
    image: '',
    modalOpen: false,
  };
  selectImage = (item) => {
    this.setState({
      image: item,
      modalOpen: true,
    });
  };
  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };
  render() {
    const food = this.props.data.map((item) => {
      if (item.category === 'food') {
        return (
          <div
            key={item.id}
            style={{ cursor: 'pointer' }}
            onClick={() => this.selectImage(item)}>
            <img
              className='image'
              src={item.path}
              alt='image'
              title={item.name}
            />
          </div>
        );
      }
    });
    const comments = this.state.image
      ? this.state.image.comments.map((item) => {
          return (
            <div key={item.id} style={{ lineHeight: '5px' }}>
              <p style={{ fontWeight: 'bold' }}>{item.email}</p>
              <p style={{ marginLeft: '10px' }}>{item.comment}</p>
            </div>
          );
        })
      : null;
    return (
      <div>
        <div className='all'>{food}</div>
        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader
            style={{ position: 'absolute', right: '2px', top: '2px' }}>
            <CloseButton onClick={this.toggleModal} />
          </ModalHeader>
          <ModalHeader style={{ textTransform: 'capitalize' }}>
            {this.state.image.name}
          </ModalHeader>
          <ModalBody>
            <CardImg
              className='modal-image'
              src={this.state.image.path}
              alt='image'
              style={{ marginBottom: '15px' }}
            />
            {comments}
            <hr />
            <Comment image={this.state.image} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToPropsFood)(Food);
