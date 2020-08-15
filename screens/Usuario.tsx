import * as React from "react";
import { Text, View } from "../components/Themed";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import {
  Button,
  StyleSheet,
  Image,
  ImageBackground,
  unstable_enableLogBox,
  Alert,
} from "react-native";
import Endereco from "../screens/Endereco";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Usuario({ navigation }) {
  return (
    <View style={estilo.area}>
      <ImageBackground
        source={require("../img/camuflada.png")}
        style={estilo.fundo}
      >
        <Text style={estilo.areausu}> Acesso</Text>
        <TextInput placeholder="Usuário" style={estilo.acessousu} />
        <TextInput
          secureTextEntry
          placeholder="Senha"
          style={estilo.acessousu}
        />
        <TextInput
          secureTextEntry
          placeholder="Confirme"
          style={estilo.acessousu}
        />
        <TextInput
          placeholder="E-Mail"
          keyboardType="email-address"
          style={estilo.acessousu}
        />

        <View style={estilo.botao}>
          <Button title="" />
          <Text
            style={estilo.txtlogar}
            onPress={() => navigation.navigate("Endereco")}
          >
            Cadastrar{" "}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );

  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Endereco" component={Endereco} />
    </Stack.Navigator>
  </NavigationContainer>;
}

const estilo = StyleSheet.create({
  fundo: {
    flex: 1,
    resizeMode: "center",
    justifyContent: "center",
  },
  area: {
    backgroundColor: "white",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  areausu: {
    fontSize: 18,
    padding: 14,
    marginLeft: "auto",
    marginRight: "auto",
  },
  acessousu: {
    backgroundColor: "white",
    color: "#f50057",
    padding: 18,
    width: "85%",
    margin: 6,
    marginLeft: "auto",
    marginRight: "auto",
    shadowColor: "gray",
    shadowOpacity: 1,
    borderRadius: 5,
    borderBottomColor: "silver",
  },
  txtlogar: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginTop: -20,
    marginBottom: 13,
  },
  botao: {
    borderRadius: 4,
    textAlign: "center",
    marginTop: 60,
    backgroundColor: "#f9a825",
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
