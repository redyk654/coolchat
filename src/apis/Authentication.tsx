import { supabase } from '@/lib/supabase';

export const signUpWithEmail = async (email: string, password: string, username: string) => {
    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            console.error(error.code, error.message);
            return { error: error.message };
        }

        const userId = data?.user?.id;

        if (userId) {
            // store additional information about user
            const { error } = await supabase.from('user').insert({
            id: userId,
            email: email,
            username: username,
            });

            if (error) {
                console.error(error.code, error.message);
                return { error: error.message };
            }

            return { data: userId };
        } else {
            return { error: 'User ID is undefined.' };
        }
    } catch (err) {
        console.error('Unexpected error:', err);
        return { error: 'Unexpected error occurred.' };
    }
};
