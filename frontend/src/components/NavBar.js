import React, {Component} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

export default class NavBar extends Component {
    
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.navigate('/')
    }

    render() {
        const loginRegLink = (
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <NavLink to='/login' className='nav-link'>
                        Login
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/register' className='nav-link'>
                        Register
                    </NavLink>
                </li>
            </ul>
        )

        const userLink = (
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <NavLink to='/profile' className='nav-link'>
                        User
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <a href='#' onClick={this.logOut.bind(this)} className='nav-link'>
                        Logout
                    </a>
                </li>
            </ul>
        )

        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark rounded'>
                <button className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbar1'
                    aria-controls='navbar1'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse justify-content-md-center' id='navbar1'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink to='/' className='nav-link'>
                                Home
                            </NavLink>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}