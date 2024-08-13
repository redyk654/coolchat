"use client";
import ChatButton from '@/components/Chats/ChatButton';
import CheckUserAuth from '@/components/Chats/CheckUserAuth'
import Discussion from '@/components/Chats/Discussion';
import Profile from '@/components/Chats/Profile';
import SearchInput from '@/components/Chats/SearchInput'
import SignOutButton from '@/components/Chats/SignOutButton'
import UsersList from '@/components/Chats/UsersList'
import H2Title from '@/components/shared/H2Title'
import { CustomUser } from '@/interfaces/CustomUser';
import React, { useState } from 'react'

export default function Chats() {

    const [userSelected, setUserSelected] = useState<CustomUser | null>(null);

    const handleChatSelection = (user: CustomUser) => {
        setUserSelected(user);
    }

  return (
    <div className='container mx-auto pt-2'>
        <CheckUserAuth />
        <div className="grid grid-cols-12 gap-2">
            <div className="w-full rounded h-[88vh] bg-stone-300">
                {/* lateral navbar */}
                <div className='grid grid-rows-12 gap-1'>
                    <ChatButton />
                    <SignOutButton />
                    <Profile />
                </div>
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
            <div className="w-full col-span-8 rounded bg-slate-100 h-[88vh]">
                {/* chat window */}
                <Discussion userSelected={userSelected} />
            </div>
        </div>
    </div>
  )
}
