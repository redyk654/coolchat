"use client";
import React, { FormEvent, useState } from 'react'
import { supabase } from '../../lib/supabase';

export default function SignInForm() {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
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
        e.preventDefault();
        setError(null);
        setIsLoading(true);
        
        // const { data, error } = await supabase.auth.signUp({
        //     email,
        //     password,
        // });

        // if (error) {
        //     setError(error.message);
        //     console.error(error.code, error.message);
        // } else {
        //     // alert('Check your email for the confirmation link');
        //     setError(null);
        // }
        // setIsLoading(false);
    };

  return (
    <form onSubmit={handleSignUpWithEmail} className="p-8 rounded-lg shadow-lg w-full max-w-sm">

        <div className="relative z-0 mb-6 w-full group">
            <input
                value={username}
                onChange={handleChange}
                type="username"
                name="username"
                id="username"
                className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 ${
                error ? 'border-red-400' : 'border-gray-300'
                } appearance-none focus:outline-none focus:ring-0 ${
                error ? 'focus:border-red-400' : 'focus:border-blue-400'
                } peer`}
                placeholder=" "
                required
            />
            <label 
                htmlFor="username"
                className={`absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 ${
                error ? 'text-red-400' : 'text-white peer-focus:text-blue-400'
                } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
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
                className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 ${
                error ? 'border-red-400' : 'border-gray-300'
                } appearance-none focus:outline-none focus:ring-0 ${
                error ? 'focus:border-red-400' : 'focus:border-blue-400'
                } peer`}
                placeholder=" "
                required
            />
            <label 
                htmlFor="password"
                className={`absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 ${
                error ? 'text-red-400' : 'text-white peer-focus:text-blue-400'
                } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
                Password
            </label>
        </div>

        {error && <p className="mt-2 text-sm text-red-400">{error}</p>}

        <button
            type="submit"
            className={`relative flex items-center justify-center w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
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
