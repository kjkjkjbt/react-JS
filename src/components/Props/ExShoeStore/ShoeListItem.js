import React, { Component } from 'react';
import ShoeItem from './ShoeItem';

export default class ShoeListItem extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4">
          <ShoeItem />
        </div>
        <div className="col-4">
          <ShoeItem />
        </div>
        <div className="col-4">
          <ShoeItem />
        </div>
      </div>
    );
  }
}
