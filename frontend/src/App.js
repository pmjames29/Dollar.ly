import React, {Component} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

import NavBar from './components/NavBar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<Landing />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/profile' element={<Profile />} />
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
