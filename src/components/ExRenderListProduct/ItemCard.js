import React, { Component } from 'react';

export default class ItemCard extends Component {
  render() {
    let { dataShoe } = this.props;
    console.log('dataShoe: ', dataShoe);
    return (
      <div className="card">
        <img className="card-img-top" src={dataShoe.image} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{dataShoe.name}</h4>
          <p className="card-text">{dataShoe.pro}</p>
          <button className="btn btn-success">Add product</button>
        </div>
      </div>
    );
  }
}
