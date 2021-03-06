import React, { Component } from 'react'
import Child from './Child';

export default class LifeCycleReact extends Component {


    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            like: 1,
            product: {
                id:1,
                name:'Iphone'
            }
        }

        console.log('constructor')
    }

    shouldComponentUpdate(newProps, newState) {

        console.log('shouldComponentUpdate')

        return true;
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps')
        return null;

    }

    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>Lifecycle react</h3>
                <h3>Number: {this.state.number}</h3>
                <button className="btn btn-outline-success" onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>+</button>
                <h3>Product name parent: {this.state.product.name}</h3>
                <button onClick ={()=>{

                    let product = this.state.product;
                    product.name = 'Samsung galaxy note 20'
                    this.setState({
                        product: {...product}
                    })

                }}>Change product</button>
                <div className="abc">slide1</div>
                <div className="abc">slide1</div>
                {this.state.number > 2 ? '' :  <Child  product={this.state.product}/>}
            
            </div>
        )
    }

    componentDidMount() {

        //Nghiệp vụ về api hoặc thư viện
        console.log('componentDidMount')
    }
    componentDidUpdate(prevProps, prevState) {
        //Hạn chế setState (xem xét kỹ việc setState) trong hàm này  => Dùng if để kiểm tra
        console.log('componentDidUpdate')
    }


}