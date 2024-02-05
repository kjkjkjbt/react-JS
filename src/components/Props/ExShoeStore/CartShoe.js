import React, { Component } from 'react';

export default class CartShoe extends Component {
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <td>Name</td>
              <td>Image</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>total</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Adidas</td>
              <td>
                <img width={50} src="https://i.pravatar.cc?u=18" alt="" />
              </td>
              <td>30</td>
              <td>2</td>
              <td>60</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
