import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Page2 = () => {
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
        source={require("../../assets/images/page3.png")}
      />

      <Image
        style={{ marginTop: -30, marginBottom: 50 }}
        source={require("../../assets/images/underline2.png")}
      />
      <Text style={{ color: "white", fontSize: 32 }}> Create daily routine </Text>
      <Text
        style={{
          color: "white",
          fontSize: 16,
          textAlign: "center",
          marginTop: 35,
          textAlignVertical: "center",
          paddingHorizontal: 36,
        }}
      >
        In Uptodo you can create your
        personalized routine to stay productive
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
        <Text style={{ color: "rgba(255, 255, 255, 0.44)", fontSize: 16 }}> SKIP</Text>
      </TouchableOpacity>
      {/* BACK */}
      <TouchableOpacity
        onPress={() => router.navigate("/onboarding/page01")}
        style={{
          width: 100,
          height: 60,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 15,
          left: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "rgba(255, 255, 255, 0.44)" }}> BACK</Text>
      </TouchableOpacity>
      {/* NEXT */}
      <TouchableOpacity
        onPress={() => router.navigate("/onboarding/page3")}
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

export default Page2;
