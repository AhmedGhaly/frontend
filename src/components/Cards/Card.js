import React, { Component } from 'react'
import Axios from 'axios'

import Prodcut from './product/product'

class Card extends Component {

    state = {
        product : []
    }
    componentDidMount() {
        Axios.get('http://localhost:8080/').then(res => {
            this.setState({product: res.data.products})
        })
    }
    onClickHandler = (productId) => {
        const data = this.state.product.find(product => product._id === productId)
        console.log(data)
        const headers = {
            'Authorization': this.props.token,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        Axios.post('http://localhost:8080/product', data, {headers: headers})
    }
    render() {
        let products = this.state.product.map(product => {
            return <Prodcut 
                        key={product._id}
                        // image={product.image}
                        description={product.description}
                        title={product.title}
                        price={product.price}
                        onClick={() => this.onClickHandler(product._id)}
                         />
        })
        return (
            <div>
                {products}
            </div>
        )
    }
}

export default Card