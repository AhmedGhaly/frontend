import React, { Component } from 'react'
import Axios from 'axios'

class Order extends Component {
    state = {
        order: []
    }
    componentDidMount() {
        const headers = {
            // i need the token 
            // i should turn the app to redux only for the token util now
            'Authorization': this.props.token,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        Axios.get('http://localhost:8080/order', {headers: {headers}}).then(res => {
            console.log(res.data)
        })
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
export default Order