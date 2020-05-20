import React from 'react'


const form = props => {
    return (
        <form>
            <input value={props.email} onChange={props.change} className='form-control' type='email' name='email'  placeholder='enter yout email'/>
            <input value={props.name}  onChange={props.change} className='form-control' type='password' name='password'  placeholder='enter your password'/>
            <input onClick={props.onSubmit} className='btn btn-outline-primary' value={props.url} type='button' />
        </form>
    )
}

export default form