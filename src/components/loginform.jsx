import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const Loginform = ({setIsAuthenticate}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            
            const request = await axios.post('http://localhost:8000/api/auth/login', {
                email,
                password
            })

            localStorage.setItem('token', request.data.token)
            setIsAuthenticate(true)
            navigate('/')
            
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div className='flex items-center justify-center h-full w-full'>
            <form onSubmit={handleSubmit} action="" className='flex flex-col gap-2 w-96'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="">UserName</label>
                    <input 
                     value={email} onChange={(e) => setEmail(e.target.value)}
                    className='border-2 p-2 rounded-lg' type="email" placeholder='email' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="">Password </label>
                    <input 
                     value={password} onChange={(e) => setPassword(e.target.value)}
                    className='border-2 p-2 rounded-lg' type="password" placeholder='Password' />
                </div>
                <button type='submit' className='bg-gray-500 text-white px-3 py-1 rounded-md ms-auto' >Login</button>
            </form>
        </div>
    );
}

export default Loginform;
