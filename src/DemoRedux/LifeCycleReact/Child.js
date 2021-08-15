import React, { Component } from 'react'
import { PureComponent } from 'react';

export default class Child extends PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log('constructor child')
        this.timeout = {}
    }
    
    // shouldComponentUpdate(newProps,newState) {

    //     console.log('newProps',newProps);
    //     console.log('this.props',this.props)
    //     console.log('shouldComponentUpdate child')
    //     if(this.props.like === newProps.like) {
    //         return false;
    //     }

    //     return true;
    // }

    static getDerivedStateFromProps(newProps,currentState) {
        console.log('getDerivedStateFromProps child')
        return null;
    }

    render() {
        console.log('render child')
        return (
            <div>
                <div>
                    Id: {this.props.product.id}
                </div>
                <div>
                    Name: {this.props.product.name}
                </div>
                <footer className="p-5 bg-dark text-white text-center">
                    footer
                </footer>
            </div>
        )
    }

    componentDidMount(){

        //Hàm setInterval kích hoạt 1 khoảng thời gian 1 lần
       this.timeout = setInterval(() => {
            console.log('1')
        }, 1000);

        console.log('componentDidMount child')
    }


    componentDidUpdate(prevProps,prevState) {
        

        //Hạn chế setState (xem xét kỹ việc setState) trong hàm này => Dùng if để kiểm tra
        console.log('componentDidUpdate child')
    } 


    componentWillUnmount() {
        //Chạy trước khi component huỷ đi (mất khỏi giao diện) => Dùng huỷ các biến chạy ngầm hoặc xử lý chuyển trang

        // clearInterval(this.timeout);
        console.log('componentWillUnmount')
    }
}