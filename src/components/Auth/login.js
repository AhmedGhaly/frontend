import React, { Component } from 'react'
import Axios from 'axios';

import Card from '../Cards/Card'
import Form from "./form";

class Login extends Component {
    state = {
        userInfo: {
            password: '',
            email: ''
        }, 
        token: null,
        loding: true
    }


    onsubmitHandler = (event) => {
        event.preventDefault()
        const data = this.state.userInfo
        Axios.post('http://localhost:8080/login', data).then(res => {
            this.setState({token: res.data.token})
            this.setState({loding: false})
        })
    }

    onChangeHandler = (event) => {
        const name = event.target.name
        const userInfo = {...this.state.userInfo}
        userInfo[name] = event.target.value
        this.setState({userInfo: userInfo})

    }
    
    render() {
        let card = null;
        if(this.state.loding === false)
            card = <Card token={this.state.token} />
        return (
            <React.Fragment>
                <Form url='login' {...this.state.userInfo} change={(event) => this.onChangeHandler(event)} onSubmit={(event) => this.onsubmitHandler(event)} />
                {card}
            </React.Fragment>
        )
    }
}

export default Login