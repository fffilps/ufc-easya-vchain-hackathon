import { View, Text, Image, SafeAreaView, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useGlobalSearchParams, useLocalSearchParams, useNavigation } from "expo-router";
import b3trToken from "@/assets/images/b3trToken.png"
import SlidingModal from "@/components/Rewards/SlidingModal";

type Props = {};

const Page = (props: Props) => {
  const glob = useGlobalSearchParams();
  const navigation = useNavigation()

const [isModalVisible, setModalVisible] = useState(false)

const toggleModal = () => {
    setModalVisible(!isModalVisible)
}

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: slug,
      headerBackTitle: "Rewards"
    })
  
  
  }, [navigation])
  
  const { id, category, name, value, description, slug, image } =
    glob;

  return (
    <View className="h-full bg-slate-300 px-4">
      <SafeAreaView className="bg-slate-300 w-full h-full flex flex-col gap-4 font-bold p-4 justify-evenly">
        <Text className="text-3xl">{slug}</Text>
        <Text className="text-2xl capitalize italic">{name}</Text>
        <Image source={image} className="w-24 h-24" />
        <Text className="text-2xl uppercase">{category}</Text>
        <Text className="text-xl">{description}</Text>
        <View className="bg-orange-500 rounded-md px-2 py-2 justify-center items-center flex-row gap-4">
            <Button title={`Get ${value} with B3tr Coins`} onPress={toggleModal}></Button>
          <Image className="w-10 h-10"
            source={b3trToken}
          />
        </View>
        <SlidingModal value={value} visible={isModalVisible} onClose={toggleModal} />
      </SafeAreaView>
    </View>
  );
};

export default Page;
