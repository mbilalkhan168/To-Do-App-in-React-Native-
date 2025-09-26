import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Page1 = () => {
  const router = useRouter();
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Image
        style={{ position: "relative", top: -100 }}
        source={require("../../assets/images/page2.png")}
      />

      <Image
        style={{ marginTop: -30, marginBottom: 50 }}
        source={require("../../assets/images/underline1.png")}
      />
      <Text style={{ color: "white", fontSize: 32, fontWeight: "bold" }}>
        Manage your tasks
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 16,
          textAlign: "center",
          marginTop: 35,
          paddingHorizontal: 40,
        }}
      >
        You can easily manage all of your daily
        tasks in DoMe for free
      </Text>

      {/* SKIP */}
      <TouchableOpacity
        onPress={() => router.navigate("/onboarding/login01")}
        style={{
          position: "absolute",
          top: 30,
          left: 24,
        }}
      >
        <Text style={{ color: "rgba(255, 255, 255, 0.44)", fontSize: 16 }}>
          SKIP
        </Text>
      </TouchableOpacity>

      {/* NEXT */}
      <TouchableOpacity
        onPress={() => router.navigate("/onboarding/page2")}
        style={{
          backgroundColor: "#8875FF",
          width: 100,
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 14,
          right: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white" }}> NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page1;
