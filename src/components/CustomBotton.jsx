import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFCB05",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#3B4CCA",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});