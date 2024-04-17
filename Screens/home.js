import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const HomeScreen = (navigation) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#9fa1a0",
          width: "25%",
          height: "100%",
          padding: 10,
          justifyContent: "flex-start",
        }}
      >
        <Image
          source={require("../images/AppLogo.png")}
          style={{
            height: 200,
            width: 200,
            alignSelf: "center",
            marginTop: 10,
            marginBottom: 40
        
        }}
        />
        <TouchableOpacity
          onPress={() => console.log("Dashboard button pressed")}
          onPressIn={() => setHoveredButton("Dashboard")}
          onPressOut={() => setHoveredButton(null)}
        >
          <Text
            style={[
              styles.navbarContent,
              hoveredButton === "Dashboard" && styles.navbarContentHovered,
            ]}
          >
            Dashboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Client button pressed")}
          onPressIn={() => setHoveredButton("Client")}
          onPressOut={() => setHoveredButton(null)}
        >
          <Text
            style={[
              styles.navbarContent,
              hoveredButton === "Client" && styles.navbarContentHovered,
            ]}
          >
            Client
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Worker button pressed")}
          onPressIn={() => setHoveredButton("Worker")}
          onPressOut={() => setHoveredButton(null)}
        >
          <Text
            style={[
              styles.navbarContent,
              hoveredButton === "Worker" && styles.navbarContentHovered,
            ]}
          >
            Worker
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Hires button pressed")}
          onPressIn={() => setHoveredButton("Hires")}
          onPressOut={() => setHoveredButton(null)}
        >
          <Text
            style={[
              styles.navbarContent,
              hoveredButton === "Hires" && styles.navbarContentHovered,
            ]}
          >
            Hires
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("rating");
          }}
          onPressIn={() => setHoveredButton("Ratings")}
          onPressOut={() => setHoveredButton(null)}
        >
          <Text
            style={[
              styles.navbarContent,
              hoveredButton === "Ratings" && styles.navbarContentHovered,
            ]}
          >
            Ratings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Reviews button pressed")}
          onPressIn={() => setHoveredButton("Reviews")}
          onPressOut={() => setHoveredButton(null)}
        >
          <Text
            style={[
              styles.navbarContent,
              hoveredButton === "Reviews" && styles.navbarContentHovered,
            ]}
          >
            Reviews
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{
        position:'absolute',
        justifyContent:"center",
        alignSelf:'center'
      }}>
        <Text style={{
          fontSize: 30
        }}>Thsi is home mf.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbarContent: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 20,
    margin: 10,
    color: "black",
    backgroundColor: "#b3b5b4",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: '90%'
  },
  navbarContentHovered: {
    backgroundColor: "#666",
  },
});

export default HomeScreen;
