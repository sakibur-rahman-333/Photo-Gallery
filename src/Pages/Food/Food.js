import '../All/All.css';
import React, { Component } from 'react';
import { CardImg } from 'reactstrap';

class Food extends Component {
  render() {
    const food = this.props.data.map((item) => {
      if (item.category === 'food') {
        return (
          <div key={item.id} style={{cursor:"pointer"}}>
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
    return <div className='all'>{food}</div>;
  }
}

export default Food;
