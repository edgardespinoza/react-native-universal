import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import EmojiList from "@/components/EmojiList";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiSticker from "@/components/EmojiSticker";
import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const imageSource = require("@/assets/images/background-image.png");

  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("No image selected");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onCloseModal = () => {
    setIsModalVisible(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    // Logic to save the image
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={selectedImage ?? imageSource} />
        {pickedEmoji && (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        )}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            label="Choose a photo"
            theme="primary"
            onPress={pickImageAsync}
          />
          <Button label="Use this photo" />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onCloseModal}>
        <EmojiList onCloseModal={onCloseModal} onSelect={setPickedEmoji} />
      </EmojiPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
