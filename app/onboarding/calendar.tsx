import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function BottomNav() {
  const router = useRouter();

  return (
    <View
  style={{
    flex:1,
  }}
    >
      <View 
      style={{width:100,position:"absolute", top:50,marginHorizontal:140}}
      > 
        <Text
      style={{
        fontSize:20,
        color:"white"
      }}
      
      
      >Calendar</Text>
    </View>
    <View
     style={{
      backgroundColor:"#363636"

    }}
    >
    </View>
<View
style={{height:110, backgroundColor:"#363636" , position:"relative", top:100 ,alignItems:"center",paddingTop:9,paddingBottom:15}}
>
<Text style={{color:"white"}}>FEBRUARY</Text>
<Text style={{color:"white",fontSize:10}}>2025</Text>
<View style={{flexDirection:"row"}}>
  <View style={{backgroundColor:"#272727",padding:10,alignItems:"center",justifyContent:"center", margin:8,height:48 ,borderRadius:5}}>
  
<Text style={{color:"red" ,fontSize:12,}}>SUN</Text>
<Text style={{color:"white",fontSize:16}}>6</Text>
</View>
  <View style={{backgroundColor:"#272727",padding:10,alignItems:"center",justifyContent:"center", margin:8,height:48 ,borderRadius:5}}>
  
<Text style={{color:"white" ,fontSize:12,}}>MON</Text>
<Text style={{color:"white",fontSize:16}}>7</Text>
</View>
  <View style={{backgroundColor:"#272727",padding:10,alignItems:"center",justifyContent:"center", margin:8,height:48 ,borderRadius:5}}>
  
<Text style={{color:"white" ,fontSize:12,}}>TUE</Text>
<Text style={{color:"white",fontSize:16}}>8</Text>
</View>
  <View style={{backgroundColor:"#5a5cc7ff",padding:10,alignItems:"center",justifyContent:"center", margin:8,height:48 ,borderRadius:5}}>
  
<Text style={{color:"white" ,fontSize:12,}}>WED</Text>
<Text style={{color:"white",fontSize:16}}>9</Text>
</View>
  <View style={{backgroundColor:"#272727",padding:10,alignItems:"center",justifyContent:"center", margin:8,height:48 ,borderRadius:5}}>
  
<Text style={{color:"white" ,fontSize:12,}}>sun</Text>
<Text style={{color:"white",fontSize:16}}>6</Text>
</View>
  <View style={{backgroundColor:"#272727",padding:10,alignItems:"center",justifyContent:"center", margin:8,height:48 ,borderRadius:5}}>
  
<Text style={{color:"red" ,fontSize:12, }}>THU</Text>
<Text style={{color:"white",fontSize:16}}>10</Text>
</View>

  

</View>
<View style={{width:320,height:100,backgroundColor:"#363636",marginTop:18,borderRadius:8,alignItems:"center",justifyContent:"center",flexDirection:"row",padding:20}}>
<TouchableOpacity style={{width:120,height:50,backgroundColor:"#5a5cc7ff", marginRight:20,alignItems:"center", padding:15,borderRadius:8}}>
<Text style={{color:"white"}}> Today</Text>
</TouchableOpacity>
<TouchableOpacity style={{width:120,height:50, alignItems:"center", padding:15 , borderColor:"white", borderWidth:2 ,borderRadius:8}}>
<Text style={{color:"white"}}> Today</Text>
</TouchableOpacity>





</View>
<View style={{width:320,height:100,backgroundColor:"#363636",marginTop:18,borderRadius:8,justifyContent:"center",padding:20, }}>
<Text style={{color:"white", fontSize:16}}> Do Math Homework</Text>
<Text style={{color:"white", fontSize:14}}> Today At 16:45</Text>
</View>
<View style={{width:320,height:100,backgroundColor:"#363636",marginTop:18,borderRadius:8,justifyContent:"center",padding:20, }}>
<Text style={{color:"white", fontSize:16}}> Do Math Homework</Text>
<Text style={{color:"white", fontSize:14}}> Today At 16:45</Text>
</View>
</View>

    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#363636",
        height: 100,
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        position:"absolute",
        bottom:1
      }}
    >
 
      <TouchableOpacity onPress={() => router.push("/onboarding/home")}>
        <Image
          source={require("../../assets/images/home-2.png")}
          style={{ marginBottom: 4, marginLeft: 5 }}
        />
        <Text style={{ color: "white", fontSize: 12 }}>Home</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => router.push("/onboarding/calendar")}>
        <Image
          source={require("../../assets/images/calendar.png")}
          style={{ marginBottom: 4, marginLeft: 8 }}
        />
        <Text style={{ color: "white", fontSize: 12 }}>Calendar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/onboarding/home")}>
  
        <Image
          source={require("../../assets/images/addbutton.png")}
          style={{
            position: "relative",
            marginTop: -80,
            marginBottom: 10,
            opacity:0.3
          }}
        />
        <Image
          source={require("../../assets/images/add.png")}
          style={{
            position: "absolute",
            zIndex: 1,
            marginTop: -65,
            left: 15,
            
          }}
          />
          </TouchableOpacity>

         <TouchableOpacity onPress={() => router.push("/onboarding/focus")}>
        <Image
          source={require("../../assets/images/clock.png")}
          style={{ marginBottom: 4, marginLeft: 5 }}
        />
        <Text style={{ color: "white", fontSize: 12 }}>Focus</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => router.push("/onboarding/profile")}>
        <Image
          source={require("../../assets/images/user.png")}
          style={{ marginBottom: 4, marginLeft: 5 }}
        />
        <Text style={{ color: "white", fontSize: 12 }}>Profile</Text>
      </TouchableOpacity>
    
    </View>
    </View>
  );
}
