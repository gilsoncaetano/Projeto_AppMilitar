import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

import Inicial from "../screens/Inicial";
import Perfil from "../screens/Perfil";
import Carrinho from "../screens/Carrinho";
import PedidosRealizados from "../screens/PedidosRealizados";

import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Inicial"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Inicial"
        component={InicialNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-home" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Perfil"
        component={PerfilNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-person" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Carrinho"
        component={CarrinhoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-cart" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="PedidosRealizados"
        component={PedidosRealizadosNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-gift" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const InicialStack = createStackNavigator();
function InicialNavigator() {
  return (
    <InicialStack.Navigator>
      <InicialStack.Screen
        name="Inicial"
        component={Inicial}
        options={{ headerTitle: "App Venda" }}
      />
    </InicialStack.Navigator>
  );
}

const PerfilStack = createStackNavigator();
function PerfilNavigator() {
  return (
    <PerfilStack.Navigator>
      <PerfilStack.Screen
        name="Perfil"
        component={Perfil}
        options={{ headerTitle: "Perfil" }}
      />
    </PerfilStack.Navigator>
  );
}

const CarrinhoStack = createStackNavigator();
function CarrinhoNavigator() {
  return (
    <CarrinhoStack.Navigator>
      <CarrinhoStack.Screen
        name="Carrinho"
        component={Carrinho}
        options={{ headerTitle: "Carrinho" }}
      />
    </CarrinhoStack.Navigator>
  );
}

const PedidosRealizadosStack = createStackNavigator();
function PedidosRealizadosNavigator() {
  return (
    <PedidosRealizadosStack.Navigator>
      <PedidosRealizadosStack.Screen
        name="PedidosRealizados"
        component={PedidosRealizados}
        options={{ headerTitle: "Pedidos Realizados" }}
      />
    </PedidosRealizadosStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}
