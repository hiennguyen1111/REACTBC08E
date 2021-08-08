import React, { Component } from 'react'
import Child from './Child';


export default class LifeCycleReact extends Component {

    constructor(props){
        super(props);
        this.state = {
            number: 1,
            like: 1,
            product: {
                id: 1,
                name: 'iphone'
            }
        }
        console.log('constructor')
    }

    shouldComponentUpdate(newProps,newState){
        console.log('shouldComponentUpdate')
        return true;
    }

    static getDerivedStateFromProps(newProps,currentState){
        console.log('getDerivedStateFromProps')
        return null;
    }


    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>LifeCycle React</h3>
                <h3>Number: {this.state.number}</h3>
                <button className="btn btn-success" onClick={()=>{
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>+</button>
                <h3>Product name parent: {this.state.product.name}</h3>
                <button onClick={()=>{
                    let product = this.state.product;
                    product.name = 'Samsung galaxy'
                    this.setState({
                        product:{...product}
                    })
                }}>
                    Change Product
                </button>
                <div className="abc">Slide1</div>
                <div className="abc">Slide1</div>
                {this.state.number > 2 ? '' : 
                <Child product={this.state.product} />}
            </div>
        )
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps,prevState){
        console.log('componentDidUpdate')
    }
}
