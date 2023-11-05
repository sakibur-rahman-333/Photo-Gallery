import '../All/All.css';
import React, { Component } from 'react';

class Animal extends Component {
  render() {
    const animal = this.props.data.map((item) => {
      if (item.category === 'animal') {
        return (
          <div key={item.id} style={{ cursor: 'pointer' }}>
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
    return <div className='all'>{animal}</div>;
  }
}

export default Animal;
