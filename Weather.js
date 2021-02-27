//temperature component
//여러개의 props를 가질거라서 prop-types를 설치함
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

//Text를 temp로 하기 위해 인자로 넣음
export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
    </View>
  );
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired, //temp가 숫자이기 때문에 number를 쓴거 같음
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Dust",
    "Haze",
    "Mist",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
