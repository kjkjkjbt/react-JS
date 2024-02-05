import React, { Component } from 'react';

// Xây dựng UI

export default class ExViewDetail extends Component {
  render() {
    return (
      <div className="container">
        <h3>Xem chi tiết phone</h3>
        {/* Danh sách sản phẩm */}
        <div className="row">
          <div className="col-4 px-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://i.pravatar.cc?u=15"
                alt="Title"
              />
              <div className="card-body">
                <h4 className="card-title">Tên sản phẩm</h4>
                <button className="btn btn-success ">Xem chi tiết</button>
              </div>
            </div>
          </div>
          <div className="col-4 px-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://i.pravatar.cc?u=20"
                alt="Title"
              />
              <div className="card-body">
                <h4 className="card-title">Tên sản phẩm</h4>
                <button className="btn btn-success ">Xem chi tiết</button>
              </div>
            </div>
          </div>
          <div className="col-4 px-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://i.pravatar.cc?u=75"
                alt="Title"
              />
              <div className="card-body">
                <h4 className="card-title">Tên sản phẩm</h4>
                <button className="btn btn-success ">Xem chi tiết</button>
              </div>
            </div>
          </div>
        </div>
        {/* Chi tiết sản phẩm */}
        <div className="row">
          <div className="col-3">
            <h3>Hình ảnh</h3>
            <img src="https://i.pravatar.cc?u=2" alt="" />
          </div>
          <div className="col-9">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>Màn hình</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>Hệ điều hành</td>
                </tr>
                <tr>
                  <td>Cam trước</td>
                  <td>Cam trươc</td>
                </tr>
                <tr>
                  <td>Cam sau</td>
                  <td>Cam sau</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
