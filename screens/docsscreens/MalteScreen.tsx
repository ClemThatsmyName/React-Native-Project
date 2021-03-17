import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Button, CheckBox, Switch, Platform, ScrollView  } from 'react-native';
import { useFonts } from 'expo-font';

import { PieceContext } from '../../App';

export default function Malte() {
  const [loaded, error] = useFonts({
    AbrilFatfaceRegular: require('../../assets/fonts/AbrilFatface-Regular.ttf'),
    Montserrat: require('../../assets/fonts/Montserrat-Medium.ttf'),
    Montserrat_light: require('../../assets/fonts/Montserrat-Light.ttf'),
    Montserrat_italic: require('../../assets/fonts/Montserrat-LightItalic.ttf'),
    Montserrat_bold: require('../../assets/fonts/Montserrat-Bold.ttf'),
  });

  const valeurPiece = useContext(PieceContext);

  const setSelectionMalte = () => {
    var bool = !(valeurPiece.check.check_Malte);
    valeurPiece.setCheck({...valeurPiece.check, check_Malte: bool});
    {valeurPiece.check.check_Malte === false ?  valeurPiece.setTotal(valeurPiece.total + 15):valeurPiece.setTotal(valeurPiece.total - 15)}
    {valeurPiece.check.check_Malte === false ?  valeurPiece.setCoutC(valeurPiece.countCheck + 1):valeurPiece.setCoutC(valeurPiece.countCheck - 1)}
  };

  return(
    <View style={styles.container}>
      <Text style={[styles.titre, loaded && {fontFamily: 'Montserrat_bold'}]}>2 euro - Malte 2016</Text>
      <Text style={[styles.subhead, loaded && {fontFamily: 'Montserrat'}]}>Pièce commémorative</Text>
      <Text style={[styles.subheadbis, loaded && {fontFamily: 'Montserrat'}]}>Le rôle de la Malta Community Chest Fund dans la société</Text>
      <View style={{height: '25%', width: '100%',  justifyContent: 'center', paddingTop:'5%'}}>
        <Image source={require('../../assets/images/malta.png')} style={{alignSelf: 'center', height: 150, width: 150}} resizeMode="cover"/>
      </View>
      <Text style={[styles.topic, loaded && {fontFamily: 'Montserrat_light'}]}>
        cette pièce commémore le rôle que joue la Malta Community Chest Fund
        dans la société à travers son programme à destination des élèves du secondaire,
        intitulé From Children in Solidarity. Ce programme identifie
        le rôle social joué par les jeunes dans cinq domaines différents.
        Le premier thème est « aimer pour être solidaire ».
        Le dessin, qui représente deux mains formant un cœur dans lequel figure le drapeau maltais,
        est l’œuvre de la lycéenne Sarah Cilia. L’inscription « MALTA 2016 » se trouve dans la partie inférieure du dessin.
        Deux silhouettes humaines stylisées figurent sur chacun des deux poignets.
        Les douze étoiles de l’Union européenne sont représentées dans l’anneau extérieur de la pièce.
     </Text>

     <View style={styles.buy}>
       <Text style={[{color: '#5D61A4', width: '25%', fontSize: 20}, loaded && {fontFamily: 'Montserrat_bold'}]}> 15€ </Text>
       <Text style={[styles.el1_buy, loaded && {fontFamily: 'Montserrat_bold'}]}>Ajouter au Panier</Text>
       {Platform.OS === "ios" ? <Switch style={styles.switch} value={valeurPiece.check.check_Malte} onValueChange={setSelectionMalte} trackColor={{true: '#5D61A4'}}/>: <CheckBox style={styles.checkbox} value={valeurPiece.check.check_Malte} onValueChange={setSelectionMalte} tintColors={{ true: '#E7E3D4'}}/>}
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
    fontSize: 12
  },

  subhead: {
    height: '5%',
    fontSize: 18,
    color: '#E7E3D4',
    textAlign: 'center'
  },

  subheadbis: {
    marginHorizontal: '10%',
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
    marginTop: '10%',
    paddingRight: '10%'
  },
});
