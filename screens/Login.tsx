import * as React from "react";
import { Text, View } from "../components/Themed";
import { TextInput } from "react-native-gesture-handler";
import { Button, StyleSheet, Image, unstable_enableLogBox } from "react-native";

export default function Login() {
  return (
    <View style={estilo.area}>
      <Image source={require("../img/saw-logo.png")}style={estilo.logo} />

      <TextInput placeholder="Usuario" style={estilo.acesso} />
      <TextInput secureTextEntry placeholder="Senha" style={estilo.acesso} />

      <View style={estilo.logar}>
        <Button title="" />
        <Text style={estilo.txtlogar}>Login</Text>
      </View>
      <View style={estilo.cadastrar}>
        <Button title="" />
        <Text style={estilo.txtlogar}>Cadastrar</Text>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  area: {
    backgroundColor: "white",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  acesso: {
    backgroundColor: "white",
    color: "#f50057",
    padding: 14,
    width: "60%",
    margin: 5,
    marginLeft: "auto",
    marginRight: "auto",
    shadowColor: "gray",
    shadowOpacity: 1,
    borderRadius: 3,
    borderBottomColor: "silver",
  },
  logar: {
    borderRadius: 4,
    textAlign: "center",
    marginTop: 50,
    backgroundColor: "#f9a825",
    width: 220,
    marginLeft: "auto",
    marginRight: "auto",
  },
  txtlogar: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginTop: -20,
    marginBottom: 13,
  },
  cadastrar: {
    borderRadius: 4,
    textAlign: "center",
    marginTop: 60,
    backgroundColor: "#f9a825",
    width: 220,
    marginLeft: "auto",
    marginRight: "auto",
  },
  logo:{
    width:130,
    height:150,
    marginLeft:"auto",
    marginRight:"auto",
    marginBottom:30,
  }
});
