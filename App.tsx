import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, View } from "react-native";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const handleNotification = async () => {
    const statusNotification = await Notifications.getPermissionsAsync();

    if (statusNotification.status !== "granted") {
      Alert.alert("Alerta", "Você não permitiu as notificações");
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Notificação 1',
        body: 'Primeira notificação'
      },
      trigger: {
        seconds: 5,
      }
    })
    
    
  };
  return (
    <View style={styles.container}>
      <Button title="chamar notificação" onPress={handleNotification} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});
