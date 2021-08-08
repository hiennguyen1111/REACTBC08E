import React, { Component } from 'react'
import { PureComponent } from 'react';
// PureComponent dung de toi uu render, nhan biet props co thay doi thi se render, khong thi se khong render

export default class Child extends PureComponent {

    constructor(props){
        super(props);
        this.state = {

        }
        console.log('constructor child')
    }

    timeout = {}

    static getDerivedStateFromProps(newProps,currentState){
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
                    name: {this.props.product.name}
                </div>
            <footer className="bg-dark p-5 text-white text-center">
                Footer
            </footer>
            </div>
        )
    }

    componentDidMount(){
        // Ham setInterval kich hoat 1 khoang time 1 lan
        this.timeout = setInterval(()=>{
            console.log('1')
        },1000);
        console.log('componentDidMount child')
    }

    componentDidUpdate(prevProps,prevState){
        // Han che setState trong ham nay ma khong co if se bi vong lap vo tan => Dung if de kiem tra
        console.log('componentDidUpdate child')
    }

    shouldComponentUpdate(newProps,newState){
        console.log('newProps',newProps);
        console.log('this.props',this.props);
        console.log('shouldComponentUpdate child')
        if(this.props.like === newProps.like){
            return false; // Muon set cung giao dien thi return false
        }
        return true;
        // this.props la props cu cua render lan truoc
        // newProps la props truoc khi render
    }
    componentWillUnmount(){
        // Chay trc khi component huy di (mat khoi giao dien)
        clearInterval(this.timeout);
        console.log('componentWillUnmount')
    }
}

