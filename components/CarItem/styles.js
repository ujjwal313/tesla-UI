import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    backgroundColor: "red",
    width: "100%",
    height: "100%",
  },
  header: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "#fff",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  batterySection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  batteryImage: {
    width: 60,
    height: 25,
    marginRight: 12,
  },
  batteryText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  statusText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  status: {
    alignItems: "center",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 180,
  },
  controlButton: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 50,
    padding: 20,
  },
});

export default styles;
