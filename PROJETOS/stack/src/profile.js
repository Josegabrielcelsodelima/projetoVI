import React from "react";
import { Button, Text, View } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>👤 Tela Perfil 👤</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
