"use client";
import { signInUser } from '@/apis/Authentication';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'

export default function SignInForm() {

    const router = useRouter()
    const { user, loading } = useAuth()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'email':
                setEmail(e.target.value)
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

        const result = await signInUser(email, password);

        if(result.error) {
            setError(result.error)
        } else {
            console.log('User Signed in successfully');
        }

        setIsLoading(false);
    };

    if (loading) {
        return (
            <div>
                <h1>Veuillez patienter...</h1>
            </div>
        )
    }

  if (user) {
    router.push('/chats')
  } else {
    return (
        <form onSubmit={handleSignUpWithEmail} className="p-8 rounded-lg shadow-lg w-full max-w-sm">

            <div className="relative z-0 mb-6 w-full group">
                <input
                    value={email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                    className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 ${
                    error ? 'border-red-400' : 'border-gray-300'
                    } appearance-none focus:outline-none focus:ring-0 ${
                    error ? 'focus:border-red-400' : 'focus:border-blue-400'
                    } peer`}
                    placeholder=" "
                    required
                />
                <label 
                    htmlFor="email"
                    className={`absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 ${
                    error ? 'text-red-400' : 'text-white peer-focus:text-blue-400'
                    } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                >
                    Email
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
}
