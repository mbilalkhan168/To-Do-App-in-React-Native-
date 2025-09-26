import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function BottomNav() {
  const router = useRouter();

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 100,
          position: "absolute",
          top: 50,
          marginHorizontal: 140,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "white",
            top: 10,
            left: 20,
          }}
        >
          Profile
        </Text>
      </View>
      <View style={{ top: 100 }}>
        <Image
          source={require("../../assets/images/loginimg.png")}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          color: "white",
          top: 120,
          left: 2,
        }}
      >
        Amir Baghestani
      </Text>
      <TouchableOpacity
        style={{
          width: 150,
          height: 50,
          backgroundColor: "#363636",
          marginLeft: -180,
          alignItems: "center",
          padding: 15,
          borderRadius: 8,
          position: "absolute",
          top: 280,
        }}
      >
        <Text style={{ color: "white" }}> 15 Task left</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 150,
          height: 50,
          backgroundColor: "#363636",
          marginLeft: 180,
          alignItems: "center",
          padding: 15,
          borderRadius: 8,
          position: "absolute",
          top: 280,
        }}
      >
        <Text style={{ color: "white" }}>5 Task done</Text>
      </TouchableOpacity>
      <View>
        <Text
          style={{ color: "white", position: "absolute", top: 220, left: -160 }}
        >
          Settings
        </Text>

        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: 250,
            left: -170,
            marginHorizontal: 16,
          }}
        >
          <Image source={require("../../assets/images/setting.png")} />
          <Text style={{ color: "white", marginLeft: 10, fontSize: 16 }}>
            App Settings
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{ color: "white", position: "absolute", top: 290, left: -160 }}
        >
        Account
        </Text>

        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: 330,
            left: -170,
            marginHorizontal: 16,
          }}
        >
          <Image source={require("../../assets/images/user.png")} />
          <Text style={{ color: "white", marginLeft: 10, fontSize: 16 }}>
       Change account name
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: 380,
            left: -170,
            marginHorizontal: 16,
          }}
        >
          <Image source={require("../../assets/images/key.png")} />
          <Text style={{ color: "white", marginLeft: 10, fontSize: 16 }}>
        Change account password
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: 440,
            left: -170,
            marginHorizontal: 16,
          }}
        >
          <Image source={require("../../assets/images/camera.png")} />
          <Text style={{ color: "white", marginLeft: 10, fontSize: 16 }}>
        Change account Image
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: 500,
            left: -170,
            marginHorizontal: 16,
          }}
        >
          <Image source={require("../../assets/images/logout.png")} />
          <Text style={{ color: "#b94343ff", marginLeft: 10, fontSize: 16 }}>
        Log Out
          </Text>
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
          position: "absolute",
          bottom: 1,
          top: 700,
        }}
      >
        <TouchableOpacity onPress={() => router.push("/onboarding/home")}>
          <Image
            source={require("../../assets/images/home-2.png")}
            style={{ marginBottom: 4, marginLeft: 5 }}
          />
          <Text style={{ color: "white", fontSize: 12 }}>Home</Text>
        </TouchableOpacity>

        {/* Calendar */}
        <TouchableOpacity onPress={() => router.push("/onboarding/calendar")}>
          <Image
            source={require("../../assets/images/calendar.png")}
            style={{ marginBottom: 4, marginLeft: 8 }}
          />
          <Text style={{ color: "white", fontSize: 12 }}>Calendar</Text>
        </TouchableOpacity>

        {/* Add Button */}
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

        {/* Focus */}
        <TouchableOpacity onPress={() => router.push("/onboarding/focus")}>
          <Image
            source={require("../../assets/images/clock.png")}
            style={{ marginBottom: 4, marginLeft: 5 }}
          />
          <Text style={{ color: "white", fontSize: 12 }}>Focus</Text>
        </TouchableOpacity>

        {/* Profile */}
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
