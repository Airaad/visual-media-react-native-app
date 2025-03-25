import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabLayout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarItemStyle:{
        paddingVertical: 8,
      },
      tabBarLabelStyle:{
        fontSize: 14
      },
      tabBarActiveTintColor: '#1CEE87',
      tabBarStyle:{
        backgroundColor: "#000000",
        height: 80,
        position: 'absolute',
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={23} name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="mystuff"
        options={{
          title: "My Stuff",
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={23} name="bookmark" color={color} />,
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={23} name="search" color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={23} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
