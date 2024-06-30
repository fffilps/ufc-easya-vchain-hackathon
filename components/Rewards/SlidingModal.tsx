import React, { useState } from "react";
import { Icon } from "react-native-elements";


import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  Image,
} from "react-native";


interface SlidingModalProps {
  visible: boolean;
  onClose: () => void;
  value: string;
}

const SlidingModal: React.FC<SlidingModalProps> = ({
  visible,
  onClose,
  value,
}) => {
  const [slideAnim] = useState(new Animated.Value(-300));

  console.log(value);

  React.useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -300,
        duration: 300,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideAnim]);

  return (
    <Modal
      transparent
      animationType="none"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.overlay} onPress={onClose} />
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          <View className="gap-8" style={styles.modalContent}>
            <Text className="py-4" style={styles.modalText}>
              Are you sure you want to exchange
            </Text>
            <View className="flex-row gap-4 justify-evenly items-center w-4/5 pb-4">
              <Text className="bg-green-500 p-4">{value}</Text>
              <Icon name="swap-horizontal-outline" type="ionicon" />

              <Text className="bg-green-500 p-4">250 B3tr Coins</Text>
            </View>
            <View className="flex-row gap-4 justify-evenly w-full">
              <TouchableOpacity
                className="py-4 gap-2 bg-blue-500 px-4 flex-nowrap"
                onPress={onClose}
              >
                <Text className="w-full px-2 flex-nowrap" >
                  Exchange
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="py-4 gap-2 bg-blue-500 w-max px-4 flex-nowrap"
                onPress={onClose}
              >
                <Text className="w-full px-2 flex-nowrap" >
                  Close
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    height: 300,
  },
  modalContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default SlidingModal;
