import { CustomUser } from "@/interfaces/CustomUser";
import { supabase } from "@/lib/supabase";

export const storeMessage = async (user: any, userSelected: CustomUser | null, message: string) => {
    try {
        if (user && userSelected) {
            // insert message in the database
            const { data, error } = await supabase
            .from('message')
            .insert({
                sender_id: user.id,
                receiver_id: userSelected.id,
                contain: message
            })
            .select()

            if (error) {
                return { error };
            } else {
                return { data };
            }
        }
    } catch (error) {
        console.error('Error sending message:', error);
        return { error };
    }
}