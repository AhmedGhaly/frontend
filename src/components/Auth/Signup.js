import React, { Component } from 'react'
import Axios from 'axios';

import Form from "./form";

class Signup extends Component {
    state = {
        userInfo: {
            password: '',
            email: ''
        }
    }

    onsubmitHandler = (event) => {
        event.preventDefault()
        const data = this.state.userInfo
        Axios.post('http://localhost:8080/signup', data).then(res => {
            console.log(res)
        })
    }

    onChangeHandler = (event) => {
        const name = event.target.name
        const userInfo = {...this.state.userInfo}
        userInfo[name] = event.target.value
        this.setState({userInfo: userInfo})
    }

    render() {
        return <Form url='signup' {...this.state.userInfo} change={(event) => this.onChangeHandler(event)} onSubmit={(event) => this.onsubmitHandler(event)} />
    }
}

export default Signup