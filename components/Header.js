import React, { useState,useEffect } from "react";

import {View,Text,Button,StyleSheet} from 'react-native';
import { useSelector } from "react-redux";



const Header=()=>{



  const cartData=useSelector((state)=>state.reducer)
  const [cartItems,setCartItems]=useState(0)

  console.warn(cartData)

  useEffect(()=>{
    setCartItems(cartData.length)
  },[cartData])
  


  return (
    <View>
      <Text style={{fontSize:40,backgroundColor:'grey',textAlign:'center',shadowColor:'black',elevation:4,shadowOpacity:10}}>{cartItems}</Text>
    </View>
  )
}

export default Header