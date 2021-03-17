import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Button, CheckBox, Switch, Platform, ScrollView, TextInput  } from 'react-native';
import { useFonts } from 'expo-font';

export default function Commander() {

  const [loaded, error] = useFonts({
    AbrilFatfaceRegular: require('../assets/fonts/AbrilFatface-Regular.ttf'),
    Montserrat: require('../assets/fonts/Montserrat-Medium.ttf'),
    Montserrat_light: require('../assets/fonts/Montserrat-Light.ttf'),
    Montserrat_italic: require('../assets/fonts/Montserrat-LightItalic.ttf'),
    Montserrat_bold: require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
    <Text style={[{fontSize: 25, paddingBottom: 10}, loaded && {fontFamily: 'AbrilFatfaceRegular'}]}>Et Voilà ! </Text>
    <Text style={[{fontSize: 20, paddingBottom: 0}, loaded && {fontFamily: 'Montserrat_light'}]}>Ta commande est envoyée </Text>
    <Text style={[{fontSize: 20, paddingBottom: 30}, loaded && {fontFamily: 'Montserrat_light'}]}>Tu devrais la recevoir sous peu </Text>
    <Image source={require('../assets/images/done.jpg')} style={{height: 250, width: 250, borderRadius: 20}} />
    </View>
  );

}
