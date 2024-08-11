import H2Title from '@/components/shared/H2Title'
import SignInFrom from '@/components/SignIn/SignInFrom'
import React from 'react'

export default function SignIn() {
  return (
    <div className='container p-4 flex justify-center items-center'>
      <div className='container w-1/2 h-96 bg-slate-700 text-white rounded-lg'>
          <H2Title styles='text-center'>Sign In</H2Title>
          <div className="flex justify-center">
              <SignInFrom />
          </div>
      </div>
  </div>
  )
}
