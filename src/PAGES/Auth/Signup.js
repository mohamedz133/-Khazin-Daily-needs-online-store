import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './AuthPage.css'
const Signup = () => {
    const [statusMsg, setResponseMsg] = useState('')
    const ProgrammNavigate = useNavigate()
    const handleSignup = (event) => {
        event.preventDefault()
        const form = event.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const password = form.password.value;
        const data = {
            'email': email,
            'displayName': userName,
            'phoneNumber': phoneNumber,
            'password': password

        }

        //     "displayName": "userName",
        //     "email": "ahkmweccded@exkample.com",
        //     "PhoneNumber": "01027387456",
        //     "Password": "H3h@6ji3dhewihdi"
        //   }
        fetch("http://talabat.runasp.net/api/account/register", {
            method: "POST",

            body: JSON.stringify(data),
            headers: {
                'Content-Type': "application/json"
            }
        })
            .then((response) => {
                if (response.statusCode !== 200 && response.statusCode)
                    setResponseMsg('Request Error')
                else

                    return response.json();
            })

            .then((jsonData) => {
                console.log(jsonData);
                if (jsonData.message)

                    setResponseMsg(jsonData.message)
                else if (jsonData.token) {
                    setResponseMsg('Success')
                    ProgrammNavigate('/');
                    localStorage.setItem("token", jsonData.token);



                }

                // Handle your response data here (e.g., update state, redirect, etc.)
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle any error that occurred during fetch
            });
    };
    return (
        <div className='authpage'>
            <Navbar reloadnavbar={false} />

            <div className='authcont'>
                <img src='https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
                    alt='signup' />

                <form onSubmit={handleSignup} className='authform'>
                    <h1>Signup</h1>
                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='fname'>User Name</label>
                            <input type='text' id='userName' />
                        </div>

                    </div>
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' />
                        <label htmlFor='email'>Phone Number</label>
                        <input type='text' id='phoneNumber' />
                    </div>

                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' />
                        </div>

                    </div>

                    <Link to='/login'
                        className='stylenone'
                    >
                        <p style={{ color: 'red' }}>{statusMsg && statusMsg}</p>
                        <p>Already have an account?</p>
                    </Link>
                    <button type='submit' className='btn'>Signup</button>

                </form>
            </div>
        </div>
    )
}

export default Signup