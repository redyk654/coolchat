import H2Title from '@/components/shared/H2Title';
import SignUpForm from '@/components/SignUp/SignUpForm';
import React, { FormEvent, useState } from 'react'

export default function SingUp() {

  return (
    <div className='container p-4 flex justify-center items-center'>
        <div className='container w-1/2 h-96 bg-slate-700 text-white rounded-lg'>
            <H2Title>Sign Up</H2Title>
            <div className="flex justify-center">
                <SignUpForm />
            </div>
        </div>
    </div>
  )
}
