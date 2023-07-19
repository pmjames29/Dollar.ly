import React, {Component} from 'react'
import {login} from './UserFunctions'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            loginError: false
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            console.log(res)
            if (!res.error) {
                this.setState({loginError: false})
                this.props.navigate('/profile')
            } else {
                this.setState({loginError: true})
            }
        })
    }

    render() {
        const failedLogin = (
            <h3 className='h5 mb-3 font-weight-normal' style={{color: 'red'}}>Invalid email or password</h3>
        )

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mt-5 mx-auto'>
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
                            {this.state.loginError ? failedLogin : ''}
                            <div className='form-group'>
                                <label htmlFor='email'>Email Address</label>
                                <input type='email'
                                    className='form-control'
                                    name='email'
                                    placeholder='Enter Email'
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <input type='password'
                                    className='form-control'
                                    name='password'
                                    placeholder='Enter Password'
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>

                            <button type='submit' className='btn btn-lg btn-primary btn-block'>
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}