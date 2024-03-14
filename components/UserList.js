import React,{useEffect} from "react";

import {View,Text} from 'react-native';
import { getUserList } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";


const UserList=()=>{


  const dispatch=useDispatch()
  const userList=useSelector((state)=>state.reducer)

  useEffect(()=>{
    dispatch(getUserList())
  },[])
 

  console.warn("in component",userList[0].users)
  const list =userList[0].users

  return (
    <View>

      {
        list.length?
        list.map((item,index)=><Text key={index}>{item.firstName}</Text>)
        :<View>
          <Text>hello</Text>
          </View>
      }

    
    </View>
  )
}


export default UserList
