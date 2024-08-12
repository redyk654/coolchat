import { fetchMessages } from '@/apis/RGet';
import { supabase } from '@/lib/supabase';
import React, { useEffect, useState } from 'react'

export default function useRealTimeMessages(user: any, userSelected: any) {
    const [messages, setMessages] = useState<any[]>([]);

    useEffect(() => {
    if (user && userSelected) {
        const fetchInitialMessages = async () => {
        const { data, error } = await fetchMessages(user, userSelected);
        if (!error) {
            setMessages(data);
        }
        };

        fetchInitialMessages();

        // listen to new messages
        const subscription = supabase
        .channel('public:message')
        .on(
            'postgres_changes',
            {
                event: '*',
                schema: 'public',
                table: 'message',
            },
            (payload) => {
                const newMessage = payload.new;
                // check if the message is for the current user or the selected user
                if (
                ((newMessage as { sender_id: string, receiver_id: string }).sender_id === user.id && (newMessage as { sender_id: string, receiver_id: string }).receiver_id === userSelected.id) ||
                ((newMessage as { sender_id: string, receiver_id: string }).sender_id === userSelected.id && (newMessage as { sender_id: string, receiver_id: string }).receiver_id === user.id)
                ) {
                    setMessages((prevMessages) => [...prevMessages, newMessage]);
                }
            }
        )
        .subscribe();

        return () => {
            supabase.removeChannel(subscription);
        };
    }
    }, [user, userSelected]);

    return messages;
}
