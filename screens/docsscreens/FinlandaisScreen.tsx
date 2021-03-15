import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Button, CheckBox, Switch, Platform, ScrollView  } from 'react-native';
import { useFonts } from 'expo-font';

import { PieceContext } from '../../App';

export default function Finlandais() {
  const [loaded, error] = useFonts({
    AbrilFatfaceRegular: require('../../assets/fonts/AbrilFatface-Regular.ttf'),
    Montserrat: require('../../assets/fonts/Montserrat-Medium.ttf'),
    Montserrat_light: require('../../assets/fonts/Montserrat-Light.ttf'),
    Montserrat_italic: require('../../assets/fonts/Montserrat-LightItalic.ttf'),
    Montserrat_bold: require('../../assets/fonts/Montserrat-Bold.ttf'),
  });

  const valeurPiece = useContext(PieceContext);

  var check_SM = valeurPiece.check.check_SM;
  var check_fin = valeurPiece.check.check_fin;
    var check_compteur = valeurPiece.check.check_compteur;

  const setSelection = () => {
    var bool = valeurPiece.check.check_fin;
    bool = !bool;
    valeurPiece.setCheck({check_compteur: check_compteur, check_fin: bool, check_SM: check_SM});

    if (valeurPiece.check.check_fin === false) {
      valeurPiece.setCheck({check_compteur: check_compteur + 1, check_fin: bool, check_SM: check_SM})
    }else{
      valeurPiece.setCheck({check_compteur: check_compteur - 1, check_fin: bool, check_SM: check_SM})
    }

  };

  return(
    <View style={styles.container}>
      <Text style={[styles.titre, loaded && {fontFamily: 'Montserrat_bold'}]}>2 euro - Finlande 2004 {valeurPiece.compteur}</Text>
      <Text style={[styles.subhead, loaded && {fontFamily: 'Montserrat'}]}>Monnaie commémorative</Text>
      <Text style={[styles.subheadbis, loaded && {fontFamily: 'Montserrat'}]}>Elargissement de l’Union européenne à dix nouveaux États membres</Text>
      <View style={{height: '27%', width: '100%', overflow: 'hidden', justifyContent: 'center', paddingTop:'5%'}}>
        <Image source={require('../../assets/images/finlandais.png')} style={{alignSelf: 'center', height: 150, width: 150}} resizeMode="cover"/>
      </View>
      <Text style={[styles.topic, loaded && {fontFamily: 'Montserrat_light'}]}>
        le dessin représente un pilier stylisé dont les pousses tendent vers le haut.
        Les pousses représentent l’élargissement de l’Union européenne.
        Le pilier représente le fondement de la croissance. Les lettres « UE » apparaissent près du pilier,
        tandis que « 2004 » est inscrit dans la partie supérieure de la pièce.
        Le dessin est entouré par les douze étoiles et par l’année.
     </Text>

     <View style={styles.buy}>
       <Text style={[styles.el1_buy, loaded && {fontFamily: 'Montserrat_bold'}]}>Ajouter au Panier</Text>
       {Platform.OS === "ios" ? <Switch style={styles.switch} value={valeurPiece.check.check_fin} onValueChange={setSelection} />: <CheckBox style={styles.checkbox} value={valeurPiece.check.check_fin} onValueChange={setSelection} tintColors={{ true: '#E7E3D4'}}/>}
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
