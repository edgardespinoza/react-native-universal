import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
  isVisible: boolean;
};

export default function EmojiPicker({ children, onClose, isVisible }: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a Sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#000" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    height: "50%",
    width: "100%",
    backgroundColor: "#673ab7",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "16%",
    backgroundColor: "#673ab7",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
