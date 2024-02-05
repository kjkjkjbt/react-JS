import React, { Component } from "react";

export default class ShoeItem extends Component {
  render() {
    return (
      <div className="card mx-3">
        <img
          className="card-img-top"
          src="https://i.pravatar.cc?u=18"
          alt="Title"
        />
        <div className="card-body">
          <h4 className="card-title">Tên sp</h4>
          <button className="btn btn-success">
            Add To cart <i class="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}
