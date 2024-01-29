import React, { Component } from 'react';

// Import css (css sẽ ăn hết cho cả dự án)
// import './StyleComponent.css';

// import module css (sẽ chỉ ăn cho component được import)
// Khi xài module css thì khai báo class (style["tên class"])
import abc from './StyleComponent.module.css';
export default class StyleComponent extends Component {
  render() {
    return (
      <div className={`display-4 ${abc['text-red']}`}>
        Hello các bạn ăn tối chưa nhỉ
      </div>
    );
  }
}
// muốn ăn css chỗ này phải đổi file la .module.css 
