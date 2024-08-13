import Link from 'next/link';
import React from 'react'

export default function GoToSignUp({ title }: { title: string }) {

  return (
    <Link
        href={'/signup'}
        className='text-blue-500 hover:underline cursor-pointer'
    >
        {title}
    </Link>
  )
}
