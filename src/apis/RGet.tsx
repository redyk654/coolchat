import { supabase } from "@/lib/supabase";

export const fetchUsers = async (): Promise<any[]> => {
    try {
        const { data, error } = await supabase
            .from('user')
            .select('id, username')

        if (error) {
            console.error('Error fetching users:', error.message);
            return [];
        } else {
            return data;
        }
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};

export const fetchMessages = async (user: any, userSelected: any): Promise<any> => {
    if (userSelected?.id === '0') {
        // fetch group messages
        const { data, error } = await supabase
        .from('message')
        .select(`
            id,
            created_at,
            sender_id,
            receiver_id,
            contain,
            sender:sender_id (username)
        `)
        .eq('receiver_id', '0')
        .order('id', { ascending: true });

        if (error) {
            console.error('Error fetching messages:', error.message);
            return { error: error.message };
        } else {
            return { data };
        }
    }
    // fetch messages between two users
    const { data, error } = await supabase
    .from('message')
    .select(`
        id,
        created_at,
        sender_id,
        receiver_id,
        contain,
        sender:sender_id (username)
    `)
    .or(`and(sender_id.eq.${user?.id},receiver_id.eq.${userSelected?.id}),and(sender_id.eq.${userSelected?.id},receiver_id.eq.${user?.id})`)
    .order('id', { ascending: true });

    if (error) {
        console.error('Error fetching messages:', error.message);
        return { error: error.message };
    } else {
        return { data };
    }
}