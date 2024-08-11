"use client";
import React, { FormEvent, useState } from 'react'
import { supabase } from '../../../lib/supabase';

export default function SignUpForm() {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'email':
                setEmail(e.target.value)
                break
            case 'username':
                setUsername(e.target.value)
                break
            case 'password':
                setPassword(e.target.value)
                break
            default:
                break
        }
    }

    const handleSignUpWithEmail = async (e: FormEvent) => {

        try {
            e.preventDefault();
            setIsLoading(true);

            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                console.error(error.code, error.message);
            } else {
                // alert('Check your email for the confirmation link');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

  return (
    <form onSubmit={handleSignUpWithEmail} className="p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="relative z-0 mb-6 w-full group">
            <input
                value={email}
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" "
                required
            />
            <label 
                htmlFor="email" 
                className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                Email
            </label>
        </div>

        <div className="relative z-0 mb-6 w-full group">
            <input
                value={username}
                onChange={handleChange}
                type="text" 
                name="username" 
                id="username" 
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                required 
            />
            <label 
                htmlFor="username" 
                className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                Username
            </label>
        </div>

        <div className="relative z-0 mb-6 w-full group">
            <input
                value={password}
                onChange={handleChange}
                type="password" 
                name="password" 
                id="password" 
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                required 
            />
            <label 
                htmlFor="password" 
                className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                Password
            </label>
        </div>

        <button
            type="submit"
            className={`relative flex items-center justify-center w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                isLoading ? 'cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
        >
            {isLoading && (
                <span className="loader animate-spin mr-2 border-2 border-t-2 border-t-transparent border-white rounded-full w-4 h-4"></span>
            )}
            {isLoading ? 'Registering...' : 'Register'}
        </button>
    </form>
  )
}
