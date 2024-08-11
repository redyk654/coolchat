"use client"
import { supabase } from '@/lib/supabase'
import React from 'react'

export default function SignOutButton() {

    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut()

        if (error) {
            console.error(error)
        }
    }

  return (
    <button onClick={handleSignOut}>SignOut</button>
  )
}
