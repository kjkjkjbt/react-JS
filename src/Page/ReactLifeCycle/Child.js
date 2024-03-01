import React, { Component, PureComponent } from 'react'
// Pure component giống hết component nhưng sẽ không có shouldComponentUpdate
// chỉ nhận thấy sự thay đổi của cac props boolean, number, string, undefined, null.
// còn các biến value như [],{} thì phải clone ở cha ra.

export default class Child extends PureComponent {
  constructor(props) {
    console.log('constructor child: ');
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log('getDerivedStateFromProps child: ');
    return null;
  }
  // shouldComponentUpdate(newProps, newState) {
  //   // newProps là props sau khi thay đổi trước khi render
  //   // newState là state sau khi thay đổi trước khi render
  //   console.log('shouldComponentUpdate child: ');
  //   // Can thiệp vào shouldComponentUpdate để biết là khi bấm tăng number thì k render lại còn bấm like thì sẽ render lại
  //   if (newProps.like != this.props.like) {
  //     return true;
  //   }
  //   return false;
  // }
  render() {
    console.log('render: child ');
    return (
      <div>
        <p className="bg-dark text-white text-center">{this.props.like}</p>
      </div>
    );
  }
  componentDidMount() {
    console.log('componentDidMount child: ');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate child ');
  }
}