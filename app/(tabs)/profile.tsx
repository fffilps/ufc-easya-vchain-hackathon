import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Card } from "react-native-elements";
import image from "../../assets/images/JohnPicture.jpg";
import ProgressBar from "@/components/Profile/ProgressBar";

const ProfilePage = () => {
  const [progress, setProgress] = useState(0.57);
  return (
    <SafeAreaView>
      <ScrollView className="gap-4" contentContainerStyle={styles.container}>
        <Card containerStyle={styles.card}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={image} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.role}>1st Gen Graduate</Text>
            <Text style={styles.bio}>
              John is a highly skilled software engineer with over 3 years of
              experience in the tech industry. He specializes in building
              high-quality mobile applications and has a passion for learning
              new technologies.
            </Text>
          </View>
          <View className="py-4 justify-evenly gap-4" >
            <View className="gap-4 py-2">
              <Text>Education Track Progress</Text>
              <ProgressBar
                color="orange"
                height={15}
                progress={progress + 0.15}
              />
            </View>
            <View className="gap-4 py-2">
              <Text>Physical Training Track Progress</Text>
              <ProgressBar
                color="green"
                height={15}
                progress={progress + 0.12}
              />
            </View>
            <View className="gap-4 py-2">
              <Text>Community Track Progress</Text>
              <ProgressBar color="red" height={15} progress={progress + 0.23} />
            </View>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f9fa",
  },
  card: {
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    width: "100%",
    maxWidth: 400,
    height: "100%",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  infoContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  role: {
    fontSize: 18,
    color: "#888",
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
  },
});

export default ProfilePage;
