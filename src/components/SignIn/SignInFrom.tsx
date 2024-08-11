"use client"
import React, { FormEvent, useState } from 'react'

export default function SignInFrom() {

    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate form submission
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    };

  return (
    <form onSubmit={handleSubmit} className="p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="relative z-0 mb-6 w-full group">
            <input
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
                loading ? 'cursor-not-allowed' : ''
            }`}
            disabled={loading}
        >
            {loading && (
                <span className="loader animate-spin mr-2 border-2 border-t-2 border-t-transparent border-white rounded-full w-4 h-4"></span>
            )}
            {loading ? 'Connection...' : 'Login'}
        </button>
    </form>
  )
}
