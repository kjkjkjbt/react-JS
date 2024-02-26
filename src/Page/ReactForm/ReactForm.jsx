import React, { Component } from 'react';
import ProductForm from './ProductForm';

export default class ReactForm extends Component {
  state = {
    arrProduct: [
      {
        id: 1,
        name: 'Iphone',
        img: 'https://picsum.photos/id/1/200/200',
        price: 5000,
      },
      {
        id: 2,
        name: 'Samsung',
        img: 'https://picsum.photos/id/2/200/202',
        price: 7000,
      },
    ],
  };
  render() {
    return (
      <div>
        <h3>Bài tập react form</h3>

        <ProductForm />

        <table className="table container mt-4">
          <thead>
            <th>id</th>
            <th>name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </thead>
          <tbody>
            {this.state.arrProduct.map((phone) => {
              return (
                <tr key={phone.id}>
                  <td>{phone.id}</td>
                  <td>{phone.name}</td>
                  <td>{phone.img}</td>
                  <td>{phone.price}</td>
                  <td>
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-success">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
