import '../All/All.css';
import React, { Component } from 'react';
import {
  CardImg,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  CloseButton,
} from 'reactstrap';
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
              src={this.state.image.path}
              alt='image'
              style={{ marginBottom: '15px' }}
            />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Food;
