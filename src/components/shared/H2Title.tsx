import React from 'react'

export default function H2Title({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <h2 className='text-2xl text-center'>{children}</h2>
  )
}
