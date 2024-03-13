import React from "react";

// import {View,Text,Button,StyleSheet,Image, ScrollView} from 'react-native';



import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductWrapper from "./components/ProductWrapper";
import UserList from "./components/UserList";


const Stack=createNativeStackNavigator()


const App=()=>{


  return (
  

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={ProductWrapper} />
          <Stack.Screen name="User" component={UserList} />
          
        </Stack.Navigator>
      </NavigationContainer>
    
      
   
  )
}

export default App