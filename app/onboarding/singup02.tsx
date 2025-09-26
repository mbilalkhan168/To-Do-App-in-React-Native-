import { View, Text,StyleSheet,Image,TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";




const body = () => {
  const router = useRouter();
  return (
    <View style={{backgroundColor:"#363636", position:"absolute", bottom:1 ,height:400,width:'100%',borderRadius:20, alignItems:"center"}}>
      <Image source={require("../../assets/images/fingerprintred.png")}  style={{margin:15,}}/>
      <Text style={{fontSize:20,color:"#c04040ff", padding:15, textAlign:"center"}}>
        Please hold your finger at the fingerprint scanner to verify your
        identity
      </Text>
<TouchableOpacity
        onPress={() => router.navigate("/onboarding/page3")}
        style={{
          backgroundColor: "#8875ffff",
          width: 135,
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 20,
          right: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white" }}> Use Password</Text>
      </TouchableOpacity>
       <TouchableOpacity
              onPress={() => router.navigate("/onboarding/login01")}
              style={{
                width: 100,
                height: 60,
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: 14,
                left: 20,
                borderRadius: 10,
                
              }}
            >
              <Text style={{ color:"#8875ffff"}}> Cancel</Text>
            </TouchableOpacity>
    </View>
  );
};

export default body;
