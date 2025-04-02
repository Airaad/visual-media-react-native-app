import { AppState } from 'react-native' //AppState: Tracks whether the app is in the foreground or background.
import 'react-native-url-polyfill/auto' //'react-native-url-polyfill/auto': Ensures URL-related features work in React Native.
import AsyncStorage from '@react-native-async-storage/async-storage' //AsyncStorage: Used for storing authentication tokens so the user stays logged in.
import { createClient } from '@supabase/supabase-js' //createClient: Creates a Supabase client to interact with the backend.

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || ""

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage, // Saves login session
    autoRefreshToken: true, // Refreshes session token automatically
    persistSession: true, // Keeps the user logged in even after app restart
    detectSessionInUrl: false,
  },
})

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh() // Refresh session when app is active
  } else {
    supabase.auth.stopAutoRefresh() // Stop refreshing when app is in the background
  }
})