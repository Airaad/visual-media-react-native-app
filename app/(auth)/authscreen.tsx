import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'

export default function AuthScreen() {
  const [isSignIn, setIsSignIn] = useState(true)

  return (
    <View className='bg-black flex-1 justify-center p-20'>
      {isSignIn ? (
        <SignIn onSwitchAuth={() => setIsSignIn(false)} />
      ) : (
        <SignUp onSwitchAuth={() => setIsSignIn(true)} />
      )}
    </View>
  )
}

