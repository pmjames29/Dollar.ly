import React, {Component} from 'react'
import {BrowserRoute, Routes, Route, Navigate, Link} from 'react-router-dom'

class NavBar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render() {
        const loginRegLink = (
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link to='/login' className='nav-link'>
                        Login
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='register' className='nav-link'>
                        Register
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link to='/profile' className='nav-link'>
                        User
                    </Link>
                </li>
                <li className='nav-item'>
                    <a href='#' onClick={this.logOut.bind(this)} className='nav-link'>
                        Logout
                    </a>
                </li>
            </ul>
        )

        return (
            <nav className='navbar navbar-expand-lg navbar-dark bd-dark rounded'>
                <button className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    aria-controls='navbar1'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse justify-content-md-center' id='navbar1'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>
                                Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

export default withRouter(NavBar)