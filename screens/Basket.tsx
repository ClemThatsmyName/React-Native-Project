import * as React from 'react';
import { StyleSheet, Text, View, Image, Button, CheckBox, Switch, Platform, ScrollView  } from 'react-native';
import { useFonts } from 'expo-font';

export default function Basket() {
  const [loaded, error] = useFonts({
    AbrilFatfaceRegular: require('../assets/fonts/AbrilFatface-Regular.ttf'),
    Montserrat: require('../assets/fonts/Montserrat-Medium.ttf'),
    Montserrat_light: require('../assets/fonts/Montserrat-Light.ttf'),
    Montserrat_italic: require('../assets/fonts/Montserrat-LightItalic.ttf'),
    Montserrat_bold: require('../assets/fonts/Montserrat-Bold.ttf'),
  });
  return(
    <View>
      <Text> TODO: Panier 💲💲</Text>
    </View>
  );
}
