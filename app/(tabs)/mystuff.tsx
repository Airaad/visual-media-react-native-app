import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '@/context/AuthProvider'
import { Redirect } from 'expo-router';

const MyStuff = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Redirect href="/login"/>;
  }
  return (
    <View>
      <Text>MyStuff</Text>
    </View>
  )
}

export default MyStuff