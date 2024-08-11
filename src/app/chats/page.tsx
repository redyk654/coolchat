import SearchInput from '@/components/Chats/SearchInput'
import H2Title from '@/components/shared/H2Title'
import React from 'react'

export default function Chats() {
  return (
    <div className='container mx-auto pt-2'>
        <div className="grid grid-cols-12 gap-2">
            <div className="w-full rounded h-14 bg-stone-600">01</div>
            <div className="w-full col-span-3 rounded">
                <H2Title styles='text-slate-900'>
                    Chats
                </H2Title>
                <SearchInput />
                {/* list of users */}
            </div>
            <div className="w-full col-span-8 rounded h-14">
                <div className='w-full h-12 bg-slate-700 text-white'>
                    <div className='flex'>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </p>
                        <p className='mx-1'>
                            Username
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
