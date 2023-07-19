import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000';

export const register = newUser => {
    return axios
        .post("users/register", {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log("Registered")
        })
}

export const login = user => {
    return axios
        .post("users/login", {
            email: user.email,
            password: user.password
        })
        .then(response => {
            console.log(response)
            console.log(response.data.error)
            if (!response.data.error) {
                localStorage.removeItem('error')
                localStorage.setItem('usertoken', response.data.token)
            }
            
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}