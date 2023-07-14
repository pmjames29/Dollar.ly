import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import './App.css';

import NavBar from './components/NavBar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

const App = () => {

    // Creating this variable in order to try different way of navigating on login/registration
    const navigate = useNavigate()

    return (
        <div className='App'>
            <NavBar navigate={navigate}/>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/register' element={<Register navigate={navigate}/>} />
                <Route path='/login' element={<Login navigate={navigate}/>} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </div>
    )
}

export default App;
