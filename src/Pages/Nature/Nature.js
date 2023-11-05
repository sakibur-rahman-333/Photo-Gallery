import '../All/All.css';
import React, { Component } from 'react';

class Nature extends Component {
  render() {
    const nature = this.props.data.map((item) => {
      if (item.category === 'nature') {
        return (
          <div key={item.id} style={{cursor: "pointer"}}>
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
    return <div className='all'>{nature}</div>;
  }
}

export default Nature;
