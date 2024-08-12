"use client";
import CheckUserAuth from '@/components/Chats/CheckUserAuth'
import SearchInput from '@/components/Chats/SearchInput'
import SignOutButton from '@/components/Chats/SignOutButton'
import UsersList from '@/components/Chats/UsersList'
import H2Title from '@/components/shared/H2Title'
import { CustomUser } from '@/interfaces/CustomUser';
import React from 'react'

export default function Chats() {

    const [userSelected, setUserSelected] = React.useState<CustomUser | null>(null);

    const handleChatSelection = (user: CustomUser) => {
        setUserSelected(user);
    }

  return (
    <div className='container mx-auto pt-2'>
        <CheckUserAuth />
        <div className="grid grid-cols-12 gap-2">
            <div className="w-full rounded h-14 bg-stone-600">
                <SignOutButton />
            </div>
            <div className="w-full col-span-3 rounded h-[88vh]">
                <H2Title styles='text-slate-900'>
                    Chats
                </H2Title>
                <SearchInput />
                {/* list of users */}
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 gap-2'>
                        <UsersList handleChatSelection={handleChatSelection} />
                    </div>
                </div>
            </div>
            <div className="w-full col-span-8 rounded bg-slate-200 h-[88vh]">
                <div className='w-full h-12 bg-slate-700 text-white p-2'>
                    <div className='flex'>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </p>
                        <p className='mx-1 capitalize'>
                            {userSelected?.username}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
