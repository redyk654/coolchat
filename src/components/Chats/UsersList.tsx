"use client";
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';
import { supabase } from '@/lib/supabase';
import { CustomUser } from '@/interfaces/CustomUser';

export default function UsersList({ handleChatSelection }: { handleChatSelection: (user: CustomUser) => void }) {

    const [listOfUsers, setListOfUsers] = useState<CustomUser[]>([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    // fetch list of users
    const fetchUsers = async () => {
        const { data, error } = await supabase
            .from('user')
            .select('id, username');

        if (error) {
            console.error('Error fetching users:', error.message);
        } else {
            setListOfUsers(data);
        }
    };

    const showMessages = (id: string) => {
        if (id === "0") {
            handleChatSelection({id: "0", username: "Chat group"});
            return;
        }
        const user = listOfUsers.find(user => user.id === id);
        if (user) {
            handleChatSelection(user);
        }
    }

  return (
    <div className='mt-3 h-[73vh] overflow-auto'>
        <UserCard
            username='Chat group'
            id={"0"}
            showMessages={showMessages}
        />
        {listOfUsers.map((user: CustomUser) => (
            <UserCard
                key={user.id}
                username={user.username}
                id={user.id}
                showMessages={showMessages}
            />
        ))}
    </div>
  )
}
