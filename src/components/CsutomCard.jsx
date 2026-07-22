//Custom card para mostrar la información

import { StyleSheet, Text, View } from "react-native";

/**https://retoolapi.dev/GH2Ivb/dataMovil
 * 
 * 
 * "id": 1,
    "name": "Katerine Schirak",
    "work": "Building Materials",
    "work_since": "Apr 6, 2026 6:19 PM"
 */

const CustomCard = ({ worker }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{worker.name}</Text>
      <Text style={styles.work}>{worker.work}</Text>
      <Text style={styles.work_since}>{worker.work_since}</Text>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  work: {
    fontSize: 16,

    marginBottom: 5,
  },
  work_since: {
    fontSize: 14,
    color: "#666",
  },
});