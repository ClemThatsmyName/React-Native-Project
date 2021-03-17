import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Button, CheckBox, Switch, Platform, ScrollView  } from 'react-native';
import { useFonts } from 'expo-font';

import { PieceContext } from '../../App';

export default function Vatican2006() {
  const [loaded, error] = useFonts({
    AbrilFatfaceRegular: require('../../assets/fonts/AbrilFatface-Regular.ttf'),
    Montserrat: require('../../assets/fonts/Montserrat-Medium.ttf'),
    Montserrat_light: require('../../assets/fonts/Montserrat-Light.ttf'),
    Montserrat_italic: require('../../assets/fonts/Montserrat-LightItalic.ttf'),
    Montserrat_bold: require('../../assets/fonts/Montserrat-Bold.ttf'),
  });

  const valeurPiece = useContext(PieceContext);

  const setSelectionVatican6 = () => {
    var bool = !(valeurPiece.check.check_Vatican6);
    valeurPiece.setCheck({...valeurPiece.check, check_Vatican6: bool});
    {valeurPiece.check.check_Vatican6 === false ?  valeurPiece.setTotal(valeurPiece.total + 200):valeurPiece.setTotal(valeurPiece.total - 200)}
    {valeurPiece.check.check_Vatican6 === false ?  valeurPiece.setCoutC(valeurPiece.countCheck + 1):valeurPiece.setCoutC(valeurPiece.countCheck - 1)}

  };


  return(
    <View style={styles.container}>
      <Text style={[styles.titre, loaded && {fontFamily: 'Montserrat_bold'}]}>2 euro - Vatican 2006</Text>
      <Text style={[styles.subhead, loaded && {fontFamily: 'Montserrat'}]}>Pièce commémorative</Text>
      <Text style={[styles.subheadbis, loaded && {fontFamily: 'Montserrat'}]}>5e centenaire de la Garde suisse pontificale</Text>
      <View style={{height: '27%', width: '100%', overflow: 'hidden', justifyContent: 'center', paddingTop:'5%'}}>
        <Image source={require('../../assets/images/garde-suisse.png')} style={{alignSelf: 'center', height: 150, width: 150}} resizeMode="cover"/>
      </View>
      <Text style={[styles.topic, loaded && {fontFamily: 'Montserrat_light'}]}>
        La pièce représente un garde suisse prêtant serment de loyauté au pape.
        L’inscription « GUARDIA SVIZZERA PONTIFICIA » forme un demi-cercle autour du garde.
        Dans la partie située sous le drapeau apparaît le nom de l'État émetteur « CITTÀ DEL VATICANO ».
        L'année 1506 apparaît à gauche, au-dessus de la signature du graveur « O. ROSSI », qui longe la hampe du drapeau.
        L'année 2006 est inscrite à droite, au-dessus de la marque d'atelier « R ».
        Les douze étoiles de l’Union européenne figurent sur le pourtour.
        Date d’émission : novembre 2006
     </Text>

     <View style={styles.buy}>
       <Text style={[{color: '#5D61A4', width: '25%', fontSize: 20}, loaded && {fontFamily: 'Montserrat_bold'}]}> 200€ </Text>
       <Text style={[styles.el1_buy, loaded && {fontFamily: 'Montserrat_bold'}]}>Ajouter au Panier</Text>
       {Platform.OS === "ios" ? <Switch style={styles.switch} value={valeurPiece.check.check_Vatican6} onValueChange={setSelectionVatican6} trackColor={{true: '#5D61A4'}}/>: <CheckBox style={styles.checkbox} value={valeurPiece.check.check_Vatican6} onValueChange={setSelectionVatican6} tintColors={{ true: '#E7E3D4'}}/>}
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
