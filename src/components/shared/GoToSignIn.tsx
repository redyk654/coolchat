import Link from 'next/link';
import React from 'react'

export default function GoToSignIn({ title }: { title: string }) {

  return (
    <Link
        href={'/signin'}
        className='text-blue-500 hover:underline cursor-pointer'
    >
        {title}
    </Link>
  )
}
