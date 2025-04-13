import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";

type Props = {
  imageSize: number;
  stickerSource: string;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        style={{
          width: imageSize,
          height: imageSize,
        }}
      />
    </View>
  );
}
