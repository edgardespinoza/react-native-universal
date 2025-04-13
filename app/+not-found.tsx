import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: "oops! not found" }} />
      <View style={styles.container}>
        <Text style={styles.text}>Index.</Text>
        <Link href="/" style={styles.button}>
          Go to Home
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#3d3",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    padding: 10,
    color: "#000",
  },
});
