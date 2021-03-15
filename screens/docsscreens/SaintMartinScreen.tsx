import * as React from 'react';
import { StyleSheet, Text, View, Image, Button, CheckBox, Switch, Platform, ScrollView  } from 'react-native';
import { useFonts } from 'expo-font';

export default function SaintMartin() {
  const [loaded, error] = useFonts({
    AbrilFatfaceRegular: require('../../assets/fonts/AbrilFatface-Regular.ttf'),
    Montserrat: require('../../assets/fonts/Montserrat-Medium.ttf'),
    Montserrat_light: require('../../assets/fonts/Montserrat-Light.ttf'),
    Montserrat_italic: require('../../assets/fonts/Montserrat-LightItalic.ttf'),
    Montserrat_bold: require('../../assets/fonts/Montserrat-Bold.ttf'),
  });
  return(
    <View style={styles.container}>
      <Text style={[styles.titre, loaded && {fontFamily: 'Montserrat_bold'}]}>2 euro - Saint Marin 2004</Text>
      <Text style={[styles.subhead, loaded && {fontFamily: 'Montserrat'}]}>Monnaie commémorative</Text>
      <Text style={[styles.subheadbis, loaded && {fontFamily: 'Montserrat'}]}>Bartolomeo Borghesi ( historien et numismate )</Text>
      <View style={{height: '27%', width: '100%', overflow: 'hidden', justifyContent: 'center', paddingTop:'5%'}}>
        <Image source={require('../../assets/images/saintMartin.png')} style={{alignSelf: 'center', height: 150, width: 150}} resizeMode="cover"/>
      </View>
      <Text style={[styles.topic, loaded && {fontFamily: 'Montserrat_light'}]}>
        les douze étoiles de l’Union européenne placées sur le pourtour de la pièce et l’année d’émission « 2004 »
        entourent le buste de Bartolomeo Borghesi. À la gauche du buste figure l’inscription « Bartolomeo Borghesi »,
        tandis que la lettre « R » et les initiales du graveur « E.L.F. » sont superposées.
        L’inscription « Saint-Marin » apparaît à la droite du buste.
     </Text>

     <View style={styles.buy}>
       <Text style={[styles.el1_buy, loaded && {fontFamily: 'Montserrat_bold'}]}>Ajouter au Panier</Text>
       {Platform.OS === "ios" ? <Switch style={styles.switch} />: <CheckBox style={styles.checkbox} tintColors={{ true: '#E7E3D4'}}/>}
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    height: '100%',
    backgroundColor: '#19181A'
  },

  titre: {
    height: '15%',
    paddingTop: '11%',
    textDecorationLine: 'underline',
    fontSize: 25,
    color: '#E7E3D4',
    textAlign: 'center'
  },

  topic:{
    paddingTop: '5%',
    paddingLeft: '3%',
    paddingRight: '3%',
    color: '#E7E3D4',
    textAlign: 'center',
    fontSize: 14
  },

  subhead: {
    height: '5%',

    fontSize: 18,
    color: '#E7E3D4',
    textAlign: 'center'
  },

  subheadbis: {
    height: 'auto',
    fontSize: 16,
    color: '#E7E3D4',
    textAlign: 'center'
  },

  el1_buy:{
    color: '#E7E3D4',
    fontSize: 15,
    paddingRight: 20
  },

  buy:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '5%',
    paddingRight: '10%'
  },
});
