import { useState } from "react";
import {
  ImageSourcePropType,
  StyleSheet,
  FlatList,
  Platform,
  Pressable,
} from "react-native";
import { Image } from "expo-image";

import emoji1 from "../assets/emoji1.png";
import emoji2 from "../assets/emoji2.png";
import emoji3 from "../assets/emoji3.png";
import emoji4 from "../assets/emoji4.png";
import emoji5 from "../assets/emoji5.png";
import emoji6 from "../assets/emoji6.png";

type Props = {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState<ImageSourcePropType[]>([
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji5,
    emoji6,
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
