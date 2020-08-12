import React from "react";
import { FlatList, View } from "react-native";

import Tag from "./Tag";

const TagList = ({ tags }) => {
  return (
    <View>
      <FlatList
        data={tags}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View onStartShouldSetResponderCapture={() => true}>
            <Tag title={item} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TagList;
