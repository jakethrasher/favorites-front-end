import React, { Component } from 'react'
import { signUpUser } from '../api-utils'
import '../App.css'
export default class SignUp extends Component {
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
        const user = await signUpUser(this.state.email, this.state.password)
        this.props.handleUserChange(user)
        this.props.history.push('/search')
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                            <h1>Sign Up</h1>
                            <span>Email:</span>
                        
                            <input onChange={this.handleEmailChange} value={this.state.email} type="text"/>
    
                            <span>Password:</span>
                       
                            <input onChange={this.handlePasswordChange } value={this.state.password} type="text"/>

                        <button>Sign Up</button>
                </form>
            </div>
        )
    }
}
