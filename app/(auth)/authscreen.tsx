import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'

export default function AuthScreen() {
  const [isSignIn, setIsSignIn] = useState(true)

  return (
    <View style={styles.container}>
      {isSignIn ? (
        <SignIn onSwitchAuth={() => setIsSignIn(false)} />
      ) : (
        <SignUp onSwitchAuth={() => setIsSignIn(true)} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
})