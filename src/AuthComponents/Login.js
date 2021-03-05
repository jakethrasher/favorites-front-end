import React, { Component } from 'react'
import { loginUser } from '../api-utils.js'
export default class Login extends Component {
    state={
        email:'',
        password:'',
    }

    handleEmailChange = (e)=>{
        this.setState({email: e.target.value})
    }

    handlePasswordChange = (e)=>{
        this.setState({password: e.target.value})
    }

    handleSubmit= async (e) =>{
        e.preventDefault();
        const user = await loginUser(this.state.email, this.state.password)
        this.props.handleUserChange(user)
        this.props.history.push('/search')
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <span>Email:</span>
                        
                    <input onChange={this.handleEmailChange} value={this.state.email} type="text"/>
    
                    <span>Password:</span>
                       
                    <input onChange={this.handlePasswordChange } value={this.state.password} type="text"/>

                    <button>Login</button>
                </form>
            </div>
        )
    }
}
