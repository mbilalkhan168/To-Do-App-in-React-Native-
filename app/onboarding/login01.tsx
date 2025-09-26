import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const Login01 = () => {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#121212",
      }}
    >
      <TouchableOpacity
        onPress={() => router.navigate("/onboarding/page3")}
        style={{
          position: "absolute",
          top: 40,
          left: 24,
          zIndex: 1,
        }}
      >
        <SimpleLineIcons name="arrow-left" size={24} color="white" />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingHorizontal: 30,
          marginTop: 140,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 32,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 25,
          }}
        >
          Welcome to UpTodo
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: 24,
          }}
        >
          Please login to your account or create new account to continue
        </Text>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 50,
          left: 0,
          right: 0,
          alignItems: "center",
          gap: 12,
        }}
      >
        <TouchableOpacity
          style={{
            width: 300,
            height: 48,
            backgroundColor: "#8875FF",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
          onPress={() => router.navigate("/onboarding/login1")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 300,
            height: 48,
            borderColor: "#8875FF",
            borderWidth: 2,
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
          onPress={() => router.navigate("/onboarding/singup")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Create account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.navigate("/onboarding/singup01")}
          style={{
            width: 300,
            height: 48,
            borderColor: "#8875FF",
            borderWidth: 2,
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Use biometrics
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login01;
