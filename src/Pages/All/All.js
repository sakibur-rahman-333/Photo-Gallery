import './All.css';
import React, { Component } from 'react';

class All extends Component {
  render() {
    const all = this.props.data.map((item) => {
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
    });
    return <div className='all'>{all}</div>;
  }
}

export default All;
