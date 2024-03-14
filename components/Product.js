import React, { useEffect, useState } from "react";

import {View,Text,Button,StyleSheet,Image} from 'react-native';

import { useDispatch,useSelector } from "react-redux";

import { addToCart,removeFromCart } from "./redux/action";



const Product=(props)=>{
    const item=props.item

    const dispatch=useDispatch()

    const handleAddToCart=(item)=>{
        dispatch(addToCart(item))
    }

    const handleRemoveFromCart=(item)=>{
      dispatch(removeFromCart(item.name))
  }

    const cartItems=useSelector((state)=>state.reducer)

    const [isAdd,setIsAdd]=useState(false)
    console.warn('item',item.name)

    useEffect(()=>{

      let result=cartItems.filter((element)=>{
        return element.name==item.name
          
        })
        


        if(result.length){
          setIsAdd(true)
        }
        else{
          setIsAdd(false)
        }



      },[cartItems])
    

  return (
    <View style={{borderBottomWidth:2, borderColor:'silver',paddingBottom:20,flex:1,alignItems:'center',marginBottom:80,paddingTop:1}}>
          <Text style={{fontSize:30,marginTop:10}}>{item.name}</Text>
          <Text style={{fontSize:20}}>{item.color}</Text>
          <Text style={{fontSize:20}}>{item.price}</Text>
          <Image style={{width:200,height:250,marginBottom:10}} source={{uri:item.image}} /> 
          
          <View style={{width:200,paddingTop:20}}>
          {
            isAdd?
            <Button title='Remove from CART' onPress={()=>handleRemoveFromCart(item)} />
            :
            <Button title='Add to CART' onPress={()=>handleAddToCart(item)} />
          }

          </View>
          </View>
  )
}

export default Product