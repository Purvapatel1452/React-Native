import React from "react";

import {View,Text,Button,StyleSheet,Image, ScrollView} from 'react-native';

import Header from "./Header";
import Product from "./Product";
import UserList from "./UserList";






const ProductWrapper=({navigation})=>{

  const products=[
    {
      id:1,
      name:"Samsung Galaxy Z-Flip",
      color:"Silver",
      price:120000,
      image:"https://rukminim2.flixcart.com/image/832/832/ksnjp8w0/mobile/w/u/8/galaxy-z-flip3-5g-sm-f711bzeeinu-samsung-original-imag662adrayy6cg.jpeg?q=70&crop=false"
    },
    {
      id:2,
      name:"One Plus 11R",
      color:"Blue",
      price:40000,
      image:"https://lh3.googleusercontent.com/spp/AOgFAqPaFjKkUAwuKp8cSunPTVRt9JZDY4DnsUO1KP7e7p-KBm_8Cv3MVHHI3u24VdJ9S4o8njAsyQmrpu9RDAklPAOxMaMMhBNUEfpuD7vCREY0N_PGR3vRdYqGFNS1xdkJw_FRa_cxanRyT_GA8GOcjfezlVUYYW4Ybnllf26o9Zc9RF0VSIlZDEjb2t_MEyRYEAmcruCdmA=s512-rw-pd-pc0x00ffffff"
    },
    {
      id:3,
      name:"Motorola Edge 40",
      color:"Red",
      price:30000,
      image:"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/h/a/k/-original-imagqx45wnzbh25s.jpeg?q=70&crop=false"
    },
    {
      id:4,
      name:"Realme 11 Pro 5G",
      color:"Gold",
      price:25000,
      image:"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/l/8/d/-original-imagqadpnygfnn2v.jpeg?q=70&crop=false"
    },
    {
      id:5,
      name:"Oppo A78 5G",
      color:"Blue",
      price:14000,
      image:"https://m.media-amazon.com/images/I/41yx-OTfNwL._SX300_SY300_QL70_FMwebp_.jpg"
    }
  ]



  return (
    <View>
        <Button title="User" onPress={()=>navigation.navigate("User")} />
      <Header />

      <ScrollView>

      {
        products.map((item)=> <Product key={item.id}  item={item}  />)
      }

      </ScrollView>
      
    </View>
  )
}

export default ProductWrapper