import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const body = () => {
  const router = useRouter();
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ position: "relative", top: -100 }}
        source={require("../../assets/images/page4.png")}
      />

      <Image
        style={{ marginTop: -30, marginBottom: 50 }}
        source={require("../../assets/images/underline3.png")}
      />
      <Text style={{ color: "white", fontSize: 32 }}>
        Orgonaize your tasks
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 16,
          textAlign: "center",
          marginTop: 35,
          paddingHorizontal: 10,
        }}
      >
        You can organize your daily tasks by
        adding your tasks into separate categories
      </Text>

      <TouchableOpacity
        onPress={() => router.navigate("/onboarding/login01")}
        style={{
          backgroundColor: "#8875FF",
          width: 100,
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 20,
          right: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white" }}> Get Started </Text>
      </TouchableOpacity>
     
      <TouchableOpacity
        onPress={() => router.navigate("/onboarding/login01")}
        style={{
          position: "absolute",
          top: 30,
          left: 24,
        }}
      >
        <Text style={{ color: "rgba(255, 255, 255, 0.44)", fontSize: 16 }}> SKIP</Text>
      </TouchableOpacity>
    
      <TouchableOpacity
        onPress={() => router.navigate("/onboarding/page2")}
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
        <Text style={{ color: "rgba(255, 255, 255, 0.44)" }}> BACK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default body;
