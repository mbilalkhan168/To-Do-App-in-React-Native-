import { View, Text,StyleSheet,Image,TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import * as LocalAuthentication from "expo-local-authentication"


const body = () => {
  const router = useRouter();
  const [isAuthenticated,setIsAuthenticated] = useState(false);
    const localAuthentication = async () => {
    try {
    
      const compatible = await LocalAuthentication.hasHardwareAsync();
      if (!compatible) {
        Alert.alert("Error", "This device is not compatible with biometrics.");
        return;
      }


      const enrolled = await LocalAuthentication.isEnrolledAsync();
      if (!enrolled) {
        Alert.alert("Error", "No biometrics enrolled on this device.");
        return;
      }


      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate with Biometrics",
        fallbackLabel: "Enter Passcode",
        disableDeviceFallback: false, 
      });

      if (result.success) {
        setIsAuthenticated(true);
        router.push("/onboarding/home")
      } else {
        router.push("/onboarding/singup02");
      }
    } catch (error) {
      console.log(error);
          }
  
        };
  return (
    <View style={{backgroundColor:"#363636", position:"absolute", bottom:1 ,height:400,width:'100%',borderRadius:20, alignItems:"center"}}>
{isAuthenticated ? (
  <TouchableOpacity onPress={() => router.replace("/onboarding/login1")}>
    
  </TouchableOpacity>
) : (
  <>
    <TouchableOpacity onPress={localAuthentication}>
      <Image
        source={require("../../assets/images/fingerprint.png")}
        style={{ margin: 15 }}
      />
    </TouchableOpacity>
    <Text
      style={{
        fontSize: 20,
        color: "white",
        padding: 15,
        textAlign: "center",
      }}
    >
      Please hold your finger at the fingerprint scanner to verify your identity
    </Text>
  </>
)}
 
      <TouchableOpacity
        onPress={() => router.navigate("/onboarding/singup02")}
        style={{
          backgroundColor: "#8875ffff",
          width: 135,
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 25,
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
