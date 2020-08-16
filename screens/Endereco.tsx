import * as React from "react";
import { Text, View } from "../components/Themed";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import {
  Picker,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
  unstable_enableLogBox,
  Alert,
} from "react-native";
import Login from "../screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
let cp = "";
let lograd = "";
let numer = "";
let compl = "";
let bair = "";
let tip = "";

export default function Endereco({ navigation }) {
  const [cepend, setCepend] = React.useState("");
  const [tipoend, setTipoend] = React.useState("");
  const [logradouroend, setLogradouroend] = React.useState("");
  const [numeend, setNumeend] = React.useState("");
  const [complementoend, setComplementoend] = React.useState("");
  const [bairroend, setBairroend] = React.useState("");

  return (
    <View style={estilo.area}>
      <ImageBackground
        source={require("../img/camuflada.png")}
        style={estilo.fundo}
      >
        <TextInput
          placeholder="CEP"
          keyboardType="numeric"
          style={estilo.endcaixa}
          onChangeText={(value) => setCepend(value)}
          value={cepend}
        />
        <TextInput
          placeholder="Logradouro"
          style={estilo.endcaixa}
          onChangeText={(value) => setLogradouroend(value)}
          value={logradouroend}
        />
        <TextInput
          placeholder="Número"
          style={estilo.endcaixa}
          onChangeText={(value) => setNumeend(value)}
          value={numeend}
        />
        <TextInput
          placeholder="Complemento"
          style={estilo.endcaixa}
          onChangeText={(value) => setComplementoend(value)}
          value={complementoend}
        />
        <TextInput
          placeholder="Bairro"
          style={estilo.endcaixa}
          onChangeText={(value) => setBairroend(value)}
          value={bairroend}
        />
        <Picker
          selectedValue={tipoend}
          mode="dialog"
          onValueChange={setTipoend}
          style={estilo.rolo}
        >
          <Picker.Item label="Tipo" value="Tipo" />
          <Picker.Item label="Av" value="Av" />
          <Picker.Item label="Rua" value="Rua" />
          <Picker.Item label="Al" value="Al" />
          <Picker.Item label="Praça" value="Praça" />
        </Picker>

        <View style={estilo.botao}>
          <Button title="" />
          <Text
            style={estilo.txtlogar}
            onPress={() => {
              cp = cepend;
              lograd = logradouroend;
              numer = numeend;
              compl = complementoend;
              bair = bairroend;
              tip = tipoend;
              efetuarCadastro();
            }}
            //onPress={() => navigation.navigate("Login")}
          >
            SALVAR{" "}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );

  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
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
  areaend: {
    fontSize: 18,
    padding: 14,
    marginLeft: "auto",
    marginRight: "auto",
  },
  endcaixa: {
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
    marginTop: -40,
    backgroundColor: "#f9a825",
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  rolo: {
    marginTop: -40,
    marginLeft: "auto",
    marginRight: "auto",
    width: "85%",
  },
});

// function efetuarCadastro() {
//   Alert.alert(
//     "CEP: " +
//       cp +
//       "\nlograd: " +
//       lograd +
//       "\nNumero: " +
//       numer +
//       "\nCompl: " +
//       compl +
//       "\nBairro: " +
//       bairr+
//       "\nTipo:"+
//       tip

//   );

function efetuarCadastro() {
  fetch("http://192.168.0.2:8080/projeto/service/endereco/cadastro.php", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tipo: tip,
      logradouro: lograd,
      numero: numer,
      complemento: compl,
      bairro: bair,
      cep: cp,
    }),
  })
    .then((response) => response.json())
    .then((resposta) => {
      console.log(resposta);
      Alert.alert("Olhe na tela de console");
    })
    .catch((error) => console.error(error));
}
