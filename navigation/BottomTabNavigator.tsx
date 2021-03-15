import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, View, Image, Button, CheckBox, Switch, Platform, ScrollView, TouchableOpacity  } from 'react-native';
import { useFonts } from 'expo-font';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import Basket from '../screens/Basket';

import FinlandaisScreen from '../screens/docsscreens/FinlandaisScreen';
import MalteScreen from '../screens/docsscreens/MalteScreen';
import MonacoScreen from '../screens/docsscreens/MonacoScreen';
import SaintMartinScreen from '../screens/docsscreens/SaintMartinScreen';
import Vatican2005Screen from '../screens/docsscreens/Vatican2005Screen';
import Vatican2006Screen from '../screens/docsscreens/Vatican2006Screen';


import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint, style: {position: 'absolute', top: -500}}}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={({ navigation, route }) => ({
          header: props => <Top {...props} />,
        })}
      />

      <TabOneStack.Screen
        name="Basket"
        component={Basket}
        options={({ navigation, route }) => ({
          headerTitle: props => <TopBasket {...props} />,
          headerBackTitle: 'Retour',
          headerTitleAlign: 'center',
          headerTintColor: 'black',
          headerStyle: {backgroundColor: '#E7E3D4'}
        })}
      />
      <TabOneStack.Screen
        name="FinlandaisScreen"
        component={FinlandaisScreen}
        options={({ navigation, route }) => ({
          header: props => <Top {...props} />,
        })}
      />
      <TabOneStack.Screen
        name="MalteScreen"
        component={MalteScreen}
        options={({ navigation, route }) => ({
          header: props => <Top {...props} />,
        })}
      />
      <TabOneStack.Screen
        name="MonacoScreen"
        component={MonacoScreen}
        options={({ navigation, route }) => ({
          header: props => <Top {...props} />,
        })}
      />
      <TabOneStack.Screen
        name="Vatican2005Screen"
        component={Vatican2005Screen}
        options={({ navigation, route }) => ({
          header: props => <Top {...props} />,
        })}
      />
      <TabOneStack.Screen
        name="Vatican2006Screen"
        component={Vatican2006Screen}
        options={({ navigation, route }) => ({
          header: props => <Top {...props} />,
        })}
      />

      <TabOneStack.Screen
        name="SaintMartinScreen"
        component={SaintMartinScreen}
        options={({ navigation, route }) => ({
          header: props => <Top {...props} />,
        })}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{header: props => <Top/>}}
      />
    </TabTwoStack.Navigator>
  );
}

function Top( {navigation} ) {
  const [loaded, error] = useFonts({
    AbrilFatfaceRegular: require('../assets/fonts/AbrilFatface-Regular.ttf')
  });
  return (
    <View style={styles.cont_title}>
      {Platform.OS === "ios" ?
      <View style={styles.container_title_ios}>
        <Text style={[styles.title, loaded && {fontFamily: 'AbrilFatfaceRegular'}]}>DeliSous</Text>
        <TouchableOpacity onPress={() => navigation.push("Basket")} style={styles.touch}>
          <Image source={require('../assets/images/shopping-cart.png')} />
        </TouchableOpacity>
      </View>
      :
      <View style={styles.container_title_and}>
        <Text style={[styles.title, loaded && {fontFamily: 'AbrilFatfaceRegular'}]}>DeliSous</Text>
        <TouchableOpacity onPress={() => navigation.push("Basket")} style={styles.touch}>
          <Image source={require('../assets/images/shopping-cart.png')} />
        </TouchableOpacity>
      </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({

  cont_title: {
    height: 90,
    justifyContent: 'flex-end',
    backgroundColor: '#E7E3D4',
  },

  container_title_and: {
    marginBottom: 7,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  container_title_ios: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  title: {
    color: '#19181A',
    fontSize: 40,
  },

  touch: {
    position: 'absolute',
    top: 15,
    right: 10
  },

  button: {
    position: 'absolute',
    top: 5,
    left: 10
  }
});

function TopBasket() {
  const [loaded, error] = useFonts({
    AbrilFatfaceRegular: require('../assets/fonts/AbrilFatface-Regular.ttf')
  });
  return (
    <View>
      {Platform.OS === "ios" ?
      <View>
        <Text style={[{fontSize: 35}, loaded && {fontFamily: 'AbrilFatfaceRegular'}]}>Panier</Text>
      </View>
      :
      <View>
        <Text style={[{fontSize: 35}, loaded && {fontFamily: 'AbrilFatfaceRegular'}]}>Panier</Text>
      </View>
      }
    </View>
  );
}
