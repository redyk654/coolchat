import { fetchMessages } from '@/apis/RGet';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react'

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

        // Listen to new messages
        const subscription = supabase
        .channel('public:message')
        .on(
            'postgres_changes',
            {
                event: '*',
                schema: 'public',
                table: 'message',
            },
            async (payload) => {
                const newMessage = payload.new;
                // Check if the message is for the current user or the selected user
                if (
                ((newMessage as { sender_id: string, receiver_id: string }).sender_id === user.id && (newMessage as { sender_id: string, receiver_id: string }).receiver_id === userSelected.id) ||
                ((newMessage as { sender_id: string, receiver_id: string }).sender_id === userSelected.id && (newMessage as { sender_id: string, receiver_id: string }).receiver_id === user.id)
                ) {
                    // Fetch sender username if not available
                    if (!(newMessage as { sender?: { username?: string } }).sender || !(newMessage as { sender?: { username?: string } }).sender?.username) {
                        const { data: senderData } = await supabase
                            .from('user')
                            .select('username')
                            .eq('id', (newMessage as { sender_id: string }).sender_id)
                            .single();
                    
                        if (senderData !== null) {
                            (newMessage as { sender?: { username?: string } }).sender = senderData; // Add sender username to the message
                        }
                    }
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
