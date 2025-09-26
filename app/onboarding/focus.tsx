import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function BottomNav() {
  const router = useRouter();

  return (
    <View>
      <View
        style={{ width: 100, position: "absolute", top: 50, marginHorizontal: 140 }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "white"
          }}


        >Calendar</Text>
      </View>

      <View style={{
        
        justifyContent: "center",
        alignItems: "center",
        alignContent:"center"

      }}

      >
        <View style={{
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 14,
          borderColor: "#555555",
          borderRightColor: "#8687E7",
          borderBottomColor: "#8687E7",
          position: "relative",
          borderRadius: '50%',
          width: 213,
          height: 213,
          top: 150

          ,
        }}>
          <Text style={{ fontSize: 40, color: "white" }}>22:15</Text>
        </View>
        
        <Text style={{ fontSize: 16, color: "white", position:"absolute",top:400,textAlign:"center"}}>While your focus mode is on, all of your notifications will be off</Text></View>
      <TouchableOpacity style={{width:160,height:50,backgroundColor:"#5a5cc7ff", marginLeft:120,alignItems:"center", padding:15,borderRadius:8,position:"absolute",top:500,}}>
      <Text style={{color:"white"}}> Start Focusing</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#363636",
          height: 100,
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
          position: "relative",
          bottom: 1,
          top: 500,
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
