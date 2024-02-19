import React, { Component } from 'react';
// import CardPerSon from './CardPerson';
import ProductCard from './ProductCard';

export default class DemoProps extends Component {
  // Prop có thể truyền {},[],string,number,bolean, jsx ...
// so sánh Props va State: 
  //   Prop là gì
  // Prop là thuộc tính có sẵn của class component dùng để nhận giá trị từ nơi nó được sử dụng (từ cha chuyền vào con)

//   Props khác gì state 
// Props và state đều là thuộc tính có sẵn của class component , để chứa dữ liệu và binding lên giao diện.
// state: có thể set state (gán lại gia trị mới)
// props : không thể set state (không thể gán lại gia trị mới), giá trị của nó . nhận vào thông qua thằng cha.

  render() {
    const product = {
      id: 1,
      name: 'Vinh',
      age: 3,
      img: 'https://i.pravatar.cc?u=20',
    };
    return (
      <div className="row">
          <div className="col-4">
            <ProductCard dataProduct={product} desc={
            <p>Hãy mua tôi</p>} />
          </div>
        </div>
    );
  }
}
