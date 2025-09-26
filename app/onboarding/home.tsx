import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  Modal,
  TextInput,
  FlatList,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Home() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [step, setStep] = useState(1);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<
    { text: string; reminder: string; time: string; priority: string }[]
  >([]);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [priority, setPriority] = useState("Medium");
  const [showPicker, setShowPicker] = useState(false);
  const [pickerMode, setPickerMode] = useState<"date" | "time">("date");
  const saveTask = () => {
    if (task.trim() === "") return;
    setTasks((prev) => [
      ...prev,
      {
        text: task,
        reminder: date.toDateString(),
        time: time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        priority,
      },
    ]);
    setTask("");
    setStep(1);
    setModalVisible(false);
  };
  const deleteTask = (index: number) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };
  const onChangeDateTime = (event: any, selectedDate?: Date) => {
    if (Platform.OS === "android") {
      setShowPicker(false);
    }
    if (selectedDate) {
      if (pickerMode === "date") setDate(selectedDate);
      if (pickerMode === "time") setTime(selectedDate);
    }
  };



  // all const





  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
     
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingTop: 40,
        }}
      >
        <Image source={require("../../assets/images/ham.png")} />
        <Text style={{ color: "white", fontSize: 16 }}>Index</Text>
        <Image source={require("../../assets/images/loginimg.png")} />
      </View>

  
      {tasks.length === 0 && (
        <View style={{ alignItems: "center", paddingVertical: 20 }}>
          <Image source={require("../../assets/images/homemin.png")} />
          <Text style={{ color: "white", fontSize: 20, marginTop: 10 }}>
            What do you want to do today?
          </Text>
          <Text style={{ color: "white", fontSize: 16 }}>
            Tap + to add your tasks
          </Text>
        </View>
      )}

 
      <View style={{ flex: 1, padding: 20 }}>
        {tasks.length > 0 && (
          <FlatList
            data={tasks}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#333",
                  padding: 10,
                  borderRadius: 8,
                  marginBottom: 10,
                }}
              >
                <View>
                  <Text style={{ color: "white", fontSize: 16 }}>
                    {item.text}
                  </Text>
                  <Text style={{ color: "gray", fontSize: 12 }}>
                    {item.reminder} {item.time}
                  </Text>
                  <Text style={{ color: "orange", fontSize: 12 }}>
                    Priority: {item.priority}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => deleteTask(index)}>
                  <Text style={{ color: "red", fontWeight: "bold" }}>🗑️</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>

   
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#363636",
          height: 100,
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => router.push("/onboarding/login01")}>
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

        
        <TouchableOpacity onPress={() => setModalVisible(true)}>
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

    
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 12,
              padding: 20,
            }}
          >
         
            {step === 1 && (
              <>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}
                >
                  Enter Task
                </Text>
                <TextInput
                  placeholder="Enter task..."
                  style={{
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 8,
                    padding: 10,
                    marginBottom: 15,
                  }}
                  value={task}
                  onChangeText={setTask}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Button title="Cancel" onPress={() => setModalVisible(false)} />
                  <Button title="Next" onPress={() => setStep(2)} />
                </View>
              </>
            )}

            
            {step === 2 && (
              <>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}
                >
                  Pick Date
                </Text>
                <Button
                  title="Select date"
                  onPress={() => {
                    setPickerMode("date");
                    setShowPicker(true);
                  }}
                />
                <Text style={{ marginVertical: 10 }}>{date.toDateString()}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Button title="Back" onPress={() => setStep(1)} />
                  <Button title="Next" onPress={() => setStep(3)} />
                </View>
              </>
            )}

            {/* Step 3: Time */}
            {step === 3 && (
              <>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}
                >
                  Pick Time
                </Text>
                <Button
                  title="Select Time"
                  onPress={() => {
                    setPickerMode("time");
                    setShowPicker(true);
                  }}
                />
                <Text style={{ marginVertical: 10 }}>
                  {time.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Button title="Back" onPress={() => setStep(2)} />
                  <Button title="Next" onPress={() => setStep(4)} />
                </View>
              </>
            )}

            {/* Step 4: Priority */}
            {step === 4 && (
              <>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}
                >
                  Select Priority
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap:"wrap",
                     gap:10,
                    marginBottom: 15,
                  }}
                >
                  <Button title="⭐️1" onPress={() => setPriority("⭐️")} />
                  <Button title="⭐️2" onPress={() => setPriority("⭐️⭐️")} />
                  <Button title="⭐️3" onPress={() => setPriority("⭐️⭐️⭐️")} />
                  <Button title="⭐️4" onPress={() => setPriority("⭐️⭐️⭐️⭐️")} />
                  <Button title="⭐️5" onPress={() => setPriority("⭐️⭐️⭐️⭐️⭐️")} />
                  <Button title="⭐️6" onPress={() => setPriority("⭐️⭐️⭐️⭐️⭐️⭐️")} />
                  <Button title="⭐️7" onPress={() => setPriority("⭐️⭐️⭐️⭐️⭐️⭐️⭐️")} />
                  <Button title="⭐️8" onPress={() => setPriority("⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️")} />
                  <Button title="⭐️9" onPress={() => setPriority("⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️")} />
                </View>
                <Text>Selected: {priority}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 15,
                  }}
                >
                  <Button title="Back" onPress={() => setStep(3)} />
                  <Button title="Save" onPress={saveTask} />
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>

      {/* Date/Time Picker */}
      {showPicker && (
        <DateTimePicker
          value={pickerMode === "date" ? date : time}
          mode={pickerMode}
          display="default"
          onChange={onChangeDateTime}
        />
      )}
      



</View>



  );
}
