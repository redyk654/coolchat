import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js'; // Importer les types de Supabase

interface AuthState {
  user: User | null;
  loading: boolean;
}

const useAuth = (): AuthState => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        // fetch current user
        setLoading(true);
        const { data, error } = await supabase.auth.getUser();

        if (error) {
            console.error('Error fetching user:', error.message);
            setUser(null);
        } else {
            setUser(data?.user ?? null);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchUser();

        // Listen authentication state changes
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (session?.user) {
                setUser(session.user);
            } else {
                setUser(null);
        }
        });

        return () => {
            authListener?.subscription.unsubscribe();
        };
    }, []);

  return { user, loading };
};

export default useAuth;
