import { View, Text, Image, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { useGlobalSearchParams, useLocalSearchParams, useNavigation } from "expo-router";
import b3trToken from "@/assets/images/b3trToken.png"

type Props = {};

const Page = (props: Props) => {
  const glob = useGlobalSearchParams();
  const local = useLocalSearchParams();

  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: slug,
      headerBackTitle: "Lessons"
    })
  
  
  }, [navigation])
  


  const { difficulty, equipment, instructions, muscle, rewards, type, slug } =
    glob;
  return (
    <View className="h-full bg-slate-300 px-4">
      <SafeAreaView className="bg-slate-300 w-full h-full flex flex-col gap-4 font-bold p-4 justify-evenly">
        <Text className="text-3xl">{slug}</Text>
        <Text className="text-2xl capitalize italic">{type}</Text>
        <Text className="text-2xl uppercase">{difficulty}</Text>
        <Text className="text-2xl capitalize">{equipment}</Text>
        <Text className="text-2xl capitalize">{muscle}</Text>
        <Text className="text-xl">{instructions}</Text>
        <View className="bg-orange-500 rounded-md px-2 py-2 justify-center items-center flex-row gap-4">
          <Text className="">{rewards} B3tr Coins</Text>
          <Image className="w-10 h-10"
            source={b3trToken}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Page;
