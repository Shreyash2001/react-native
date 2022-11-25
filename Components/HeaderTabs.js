import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";

const HeaderButton = ({ text }) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: "#222",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
    >
      <Text style={{ color: "#fff", fontSize: 15, fontWeight: "900" }}>
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);
const HeaderTabs = () => {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton text="Delivery" btnColor="black" textColor="white" />
      <HeaderButton text="Pickup" btnColor="white" textColor="black" />
    </View>
  );
};
export default HeaderTabs;
