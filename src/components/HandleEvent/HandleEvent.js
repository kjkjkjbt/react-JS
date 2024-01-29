    import React, { Component } from 'react';

    export default class HandleEvent extends Component {
    handleSayHello = () => {
        console.log('hello');
    };
    handleSayName = (name) => {
        console.log('hello bạn ', name);
    };
    render() {
        return (
        <div className="container">
            <button onClick={this.handleSayHello}>Click me</button>
            <button
            onClick={() => {
                console.log('yes');
            }}
            >
            Click tôi
            </button>
            <button
            onClick={() => {
                // this.handleSayHello();
                this.handleSayName('Vinh');
            }}
            >
            Click mình
            </button>

            {/* hàm thay đổi sự kiện để chạy khi user nhập value vào ô input. nếu mà ko ghi let value....clg(value) mà truyền vào clg ('no') chẳng hạn, thì dù user co nhập bất kỳ cái gì vào ô input, clg ở giao diện vẫn hiện là chữ NO */}
            <input
            type="text"
            className="py-3 px-3"
            onChange={(e) => {
                let value = e.target.value;
                console.log('value: ', value);
            }}
            />
        </div>
        );
    }
    }
