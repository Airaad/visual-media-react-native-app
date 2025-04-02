import { Session, User } from '@supabase/supabase-js';
import { createContext, useContext, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { supabase } from '@/utils/supabase';

type AuthContextType = {
    session: Session | null;
    user: User | null;
    isAuthenticated: boolean;
  };

const AuthContext = createContext<AuthContextType>({
    session: null,
  user: null,
  isAuthenticated: false,
});

export default function AuthProvider({ children }: any) {
  const [session, setSession] = useState<Session | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsReady(true);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (!isReady) {
    return <ActivityIndicator />;
  }
  
  return (
    <AuthContext.Provider
      value={{ session, user: session?.user ?? null, isAuthenticated: !!session?.user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);