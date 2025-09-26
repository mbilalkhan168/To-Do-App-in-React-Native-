import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useRouter } from "expo-router";
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const body = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <TouchableOpacity
        onPress={() => router.navigate("/onboarding/login01")}
        style={{
          position: "absolute",
          top: 30,
          left: 24,
        }}
      >
        <SimpleLineIcons name="arrow-left" size={24} color="white" />
      </TouchableOpacity>

      <Text
        style={{
          color: "white",
          fontSize: 30,
          position: "absolute",
          top: 60,
          left: 30,
          fontWeight: "bold",
        }}
      >
       Register
      </Text>

      <View
        style={{
          marginTop: 110,
          flexDirection: "column",
          paddingLeft: 30,
          paddingRight: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Username</Text>
        <TextInput
          style={{
            margin: 4,
            padding: 14,
            backgroundColor: "transparent",
            borderColor: "white",
            borderWidth: 2,
            borderRadius: 10,
            color: "white",
          }}
          placeholder="Enter your Username"
          placeholderTextColor="#aaa"
        />
        <Text style={{ color: "white", fontSize: 18, marginTop: 20 }}>
          Password
        </Text>
        <TextInput
          style={{
            margin:4,
            padding: 14,
            backgroundColor: "transparent",
            borderColor: "white",
            borderWidth: 2,
            borderRadius: 10,
            color: "white",
          }}
          placeholder="***********"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
        <Text style={{ color: "white", fontSize: 18, marginTop: 20 }}>
         Confirm Password
        </Text>
        <TextInput
          style={{
            margin: 4,
            padding: 14,
            backgroundColor: "transparent",
            borderColor: "white",
            borderWidth: 2,
            borderRadius: 10,
            color: "white",
          }}
          placeholder="***********"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 210,
          left: 0,
          right: 0,
          alignItems: "center",
          gap: 12,
          marginBottom: 20,
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
          onPress={() => router.navigate("/onboarding/singup01")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
           Singup
          </Text>
        </TouchableOpacity>
        <View

          style={{
            position: "absolute",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            bottom: -50,
            paddingHorizontal: 20,
            marginTop: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 3,
              backgroundColor: "#666",
            }}
          />
          <Text
            style={{
              fontSize: 16,
              color: "#666",
              fontWeight: "400",
            }}
          >
            or
          </Text>
          <View
            style={{
              flex: 1,
              height: 3,
              backgroundColor: "#666",
            }}
          />
        </View>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 50,
          left: 0,
          right: 0,
          alignItems: "center",
          gap: 15,
        }}
      >
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
          // onPress={() => router.navigate("/onboarding/registera")}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image source={require("../../assets/images/google.png")} />

            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Login with Google
            </Text>
          </View>
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
          // onPress={() => router.navigate("/onboarding/registera")}
        >
          <View
          
            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          >
            <Image source={require("../../assets/images/apple.png")} />
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Login with Apple
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default body ;
