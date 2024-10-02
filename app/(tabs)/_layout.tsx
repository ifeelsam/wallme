import { Tabs } from 'expo-router';
import  FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function RootLayout() {
  return (
     <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'black'
     }} >
      <Tabs.Screen 
        name='index'
        options={{
          title: "For You",
          tabBarIcon: ({color}) => <FontAwesome size = {28} name="home" color={color} />
        }}
      />
      <Tabs.Screen 
        name='explore'
        options={{
          title: "Explore",
          tabBarIcon: ({color}) => <MaterialCommunityIcons name="pokeball" size={24} color={color} /> 
        }}
      />
      <Tabs.Screen 
      name='accounts'
      options={{
        title: "Account",
        tabBarIcon: ({color}) => <AntDesign name="setting" size={24} color={color}/>
        }}
      />
    </Tabs> 
  ) 
}
