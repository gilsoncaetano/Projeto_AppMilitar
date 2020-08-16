import * as React from "react";
import { Text, View } from "../components/Themed";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import {
  SectionList,
  Picker,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
  unstable_enableLogBox,
  Alert,
} from "react-native";
import Usuario from "../screens/Usuario";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
let nome = "";
let cpf = "";
let email = "";
let tel = "";
let sx = "";
let us = "";
let sh = "";
let ft = "";

export default function Cadastrar({ navigation }) {
  const [sexo, setSexo] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [nomecli, setNomecli] = React.useState("");
  const [cpfcli, setCPFcli] = React.useState("");
  const [emailcli, setEmailcli] = React.useState("");
  //const [foto, setFoto] = React.useState("");

  return (
    <View style={estilo.area}>
      <ImageBackground
        source={require("../img/camuflada.png")}
        style={estilo.fundo}
      >
        <Text style={estilo.dados}> Dados Pessoas</Text>
        <TextInput
          placeholder="Nome Completo"
          style={estilo.cadastro}
          onChangeText={(value) => setNomecli(value)}
          value={nomecli}
        />
        <TextInput
          placeholder="CPF"
          style={estilo.cadastro}
          onChangeText={(value) => setCPFcli(value)}
          value={cpfcli}
        />
        <TextInput
          placeholder="E-Mail"
          keyboardType="email-address"
          style={estilo.cadastro}
          onChangeText={(value) => setEmailcli(value)}
          value={emailcli}
        />
        <TextInput
          placeholder="Telefone"
          keyboardType="phone-pad"
          style={estilo.cadastro}
          onChangeText={(value) => setTelefone(value)}
          value={telefone}
        />
        <Picker
          selectedValue={sexo}
          mode="dialog"
          onValueChange={setSexo}
          style={estilo.sexo}
        >
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
        </Picker>

        <View style={estilo.botao}>
          <Button title="" />
          <Text
            style={estilo.txtlogar}
            onPress={() => {
              nome = nomecli;
              cpf = cpfcli;
              sx = sexo;
              email = emailcli;
              tel = telefone;
              efetuarCadastro();
            }}
            //onPress={() => navigation.navigate("Usuario")}
          >
            Cadastrar{" "}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Usuario" component={Usuario} />
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
  dados: {
    marginTop: 60,
    fontSize: 25,
    margin: 14,
    marginLeft: "auto",
    marginRight: "auto",
  },

  cadastro: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 18,
    width: "85%",
    margin: 8,
    marginLeft: "auto",
    marginRight: "auto",
    shadowColor: "gray",
    shadowOpacity: 1,
  },

  usuario: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 14,
    width: "85%",
    margin: 14,
    marginLeft: "auto",
    marginRight: "auto",
    shadowColor: "gray",
    shadowOpacity: 1,
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
    marginBottom: 50,
    marginTop: -30,
    backgroundColor: "#f9a825",
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  sexo: {
    marginTop: -40,
    marginLeft: "auto",
    marginRight: "auto",
    width: "85%",
  },
});

function efetuarCadastro() {
  Alert.alert(
    "Nome: " +
      nome +
      "\nCPF: " +
      cpf +
      "\nEmail: " +
      email +
      "\nTel: " +
      tel +
      "\nSexo: " +
      sx
  );

  // function efetuarCadastro() {
  //   fetch("http://192.168.0.2:8080/projeto/service/usuario/cadastro.php", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       nomeusuario: us,
  //       senha: sh,
  //       foto: ft,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((resposta) => {
  //       console.log(resposta);
  //       Alert.alert("Olhe na tela de console");
  //     })
  //     .catch((error) => console.error(error));
}
