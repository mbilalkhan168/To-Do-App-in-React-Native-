import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Text, View } from "react-native";

const Body = () => {
  const router = useRouter();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/onboarding/page2");
    }, 2000); // 2 seconds
    
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Image source={require("../../assets/images/cbox.png")} />

      <Text
        style={{
          color: "white",
          fontSize: 40,
          textAlign: "center",
          marginTop: 35,
          paddingHorizontal: 40,
          fontWeight: "bold",
        }}
      >
        UpTodo
      </Text>
    </View>
  );
};

export default Body;