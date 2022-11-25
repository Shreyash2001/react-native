import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-web";

const HeaderButton = ({
  text,
  btnColor,
  textColor,
  activeTab,
  setActiveTab,
}) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: btnColor,
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => setActiveTab(text)}
    >
      <Text
        style={{
          color: activeTab === textColor ? "#fff" : "#222",
          fontSize: 15,
          fontWeight: "900",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);
const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};
export default HeaderTabs;
