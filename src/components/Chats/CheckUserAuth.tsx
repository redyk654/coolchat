"use client"
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import React from 'react'


export default function CheckUserAuth() {

    const router = useRouter();
    const { user, loading } = useAuth()

    if (loading) {
        return (
            <div>
                <h1>Veuillez patienter...</h1>
            </div>
        )
    }

    if (user) {
        return (
            <></>  
        )
    } else {
        router.push('/signin')
    }
}
