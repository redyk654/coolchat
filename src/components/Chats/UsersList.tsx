"use client";
import React from 'react'
import UserCard from './UserCard';
import { CustomUser } from '@/interfaces/CustomUser';
import useAuth from '@/hooks/useAuth';
import useFetchUsers from '@/hooks/useFetchUsers';

export default function UsersList({ handleChatSelection, search }: { handleChatSelection: (user: CustomUser) => void, search: string }) {

    const { user } = useAuth();
    const { listOfUsers, isFetching } = useFetchUsers();

    const removeCurrentUser = (usersList: CustomUser[]): CustomUser[] => {
        if (user) {
            return usersList.filter(u => u.id !== user.id);
        }
        return [];
    }

    const filterUsers = (users: CustomUser[], search: string): CustomUser[] => {
        users = removeCurrentUser(users);
        if (!search) {
            return users;
        }
        if (isFetching) {
            return [];
        }
        return users.filter(user => user.username.toLowerCase().includes(search.toLowerCase()));
    }

    const filteredUsers = filterUsers(listOfUsers, search);

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
        {isFetching && <p>Loading users...</p>}
        {filteredUsers.map((user: CustomUser) => (
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
