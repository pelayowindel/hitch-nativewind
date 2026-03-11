import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

export type AppRole = 'rider' | 'driver' | 'admin';

interface SupabaseContextType {
  session: Session | null;
  user: User | null;
  role: AppRole | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
}

const SupabaseContext = createContext<SupabaseContextType>({
  session: null,
  user: null,
  role: null,
  isLoading: true,
  signOut: async () => {},
});

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (!context) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  return context;
};

export const SupabaseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<AppRole | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isRoleLoading, setIsRoleLoading] = useState(false);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsAuthLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    if (!user) {
      setRole(null);
      setIsRoleLoading(false);
      return;
    }

    const loadRole = async () => {
      setIsRoleLoading(true);

      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      if (!isMounted) {
        setIsRoleLoading(false);
        return;
      }

      if (error || !data?.role) {
        setRole('rider');
      } else {
        setRole(data.role as AppRole);
      }

      setIsRoleLoading(false);
    };

    loadRole();

    return () => {
      isMounted = false;
    };
  }, [user]);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <SupabaseContext.Provider
      value={{
        session,
        user,
        role,
        isLoading: isAuthLoading || isRoleLoading,
        signOut,
      }}
    >
      {children}
    </SupabaseContext.Provider>
  );
};
