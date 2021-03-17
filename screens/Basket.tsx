import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Button, CheckBox, Switch, Platform, ScrollView, TextInput  } from 'react-native';
import { useFonts } from 'expo-font';

import CommandeScreen from "./CommandeScreen";

import { PieceContext } from '../App';

export default function Basket( {navigation} ) {
  const [loaded, error] = useFonts({
    AbrilFatfaceRegular: require('../assets/fonts/AbrilFatface-Regular.ttf'),
    Montserrat: require('../assets/fonts/Montserrat-Medium.ttf'),
    Montserrat_light: require('../assets/fonts/Montserrat-Light.ttf'),
    Montserrat_italic: require('../assets/fonts/Montserrat-LightItalic.ttf'),
    Montserrat_bold: require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  const valeurPiece = useContext(PieceContext);

  const AffichageDiv = () => {

    var panier = [];
    var i = 0;

    if (valeurPiece.check.check_fin === true) {
      i = i + 1;
      panier.push(
        <View key = {i}>
          <View style={{backgroundColor: '#19181A', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 15, marginBottom: 5}}>
            <Text style={[{color: '#E7E3D4', fontSize: 16}, , loaded && {fontFamily: 'Montserrat'}]}>"2€ Finlandais" </Text>
            <Text style={[{color: '#E7E3D4', fontSize: 14}, , loaded && {fontFamily: 'Montserrat_light'}]}>40€</Text>
          </View>
        </View>
      )
    }

    if (valeurPiece.check.check_SM === true) {
      i = i + 1;
      panier.push(
        <View key = {i}>
          <View style={{backgroundColor: '#19181A', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 15, marginBottom: 5}}>
            <Text style={[{color: '#E7E3D4', fontSize: 16}, , loaded && {fontFamily: 'Montserrat'}]}>"2€ Saint-Martin 2004" </Text>
            <Text style={[{color: '#E7E3D4', fontSize: 14}, , loaded && {fontFamily: 'Montserrat_light'}]}>200€</Text>
          </View>
        </View>
      )
    }

    if (valeurPiece.check.check_Malte === true) {
      i = i + 1;
      panier.push(
        <View key = {i}>
          <View style={{backgroundColor: '#19181A', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 15, marginBottom: 5}}>
            <Text style={[{color: '#E7E3D4', fontSize: 16}, , loaded && {fontFamily: 'Montserrat'}]}>"2€ Malte 2016" </Text>
            <Text style={[{color: '#E7E3D4', fontSize: 14}, , loaded && {fontFamily: 'Montserrat_light'}]}>15€</Text>
          </View>
        </View>
      )
    }

    if (valeurPiece.check.check_Monaco === true) {
      i = i + 1;
      panier.push(
        <View key = {i}>
          <View style={{backgroundColor: '#19181A', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 15, marginBottom: 5}}>
            <Text style={[{color: '#E7E3D4', fontSize: 16}, , loaded && {fontFamily: 'Montserrat'}]}>"2€ Monaco 2016" </Text>
            <Text style={[{color: '#E7E3D4', fontSize: 14}, , loaded && {fontFamily: 'Montserrat_light'}]}>340€</Text>
          </View>
        </View>
      )
    }
    if (valeurPiece.check.check_Vatican5 === true) {
      i = i + 1;
      panier.push(
        <View key = {i}>
          <View style={{backgroundColor: '#19181A', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 15, marginBottom: 5}}>
            <Text style={[{color: '#E7E3D4', fontSize: 16}, , loaded && {fontFamily: 'Montserrat'}]}>"2€ Vatican 2005" </Text>
            <Text style={[{color: '#E7E3D4', fontSize: 14}, , loaded && {fontFamily: 'Montserrat_light'}]}>220€</Text>
          </View>
        </View>
      )
    }
    if (valeurPiece.check.check_Vatican6 === true) {
      i = i + 1;
      panier.push(
        <View key = {i}>
          <View style={{backgroundColor: '#19181A', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 15, marginBottom: 5}}>
            <Text style={[{color: '#E7E3D4', fontSize: 16}, , loaded && {fontFamily: 'Montserrat'}]}>"2€ Vatican 2006" </Text>
            <Text style={[{color: '#E7E3D4', fontSize: 14}, , loaded && {fontFamily: 'Montserrat_light'}]}>200€</Text>
          </View>
        </View>
      )
    }



  	return (
  		<View style={{width: '100%', paddingBottom: 20}}>
  			{ panier }
  		</View>
  	)
  };

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={[styles.container, loaded && {fontFamily: 'Montserrat'}]}>
        {valeurPiece.countCheck != 0 ?
          <View style={{alignSelf: 'flex-start', paddingBottom: 20}}>
            <Text style={[{fontSize: 25}, loaded && {fontFamily: 'Montserrat_bold'}]}>Votre Panier : </Text>
            <Text style={[{fontSize: 20}, loaded && {fontFamily: 'Montserrat_italic'}]}>{valeurPiece.countCheck} article(s)</Text>
          </View>
        :
          <Text style={[{fontSize: 25},loaded && {fontFamily: 'Montserrat_bold'}]}>Votre Panier est vide</Text>
        }

        <AffichageDiv />


        {valeurPiece.total>0 ?
        <View>
          <Text style={[{fontSize: 15, marginBottom: 10},loaded && {fontFamily: 'Montserrat_bold'}]} >Total du panier : {valeurPiece.total}€</Text>
          <Button title='Commander' onPress={() => navigation.push('CommandeScreen')}/>
        </View>
        :
        <View style={{alignItems: 'center'}}>
          <Text style={[{fontSize: 18, paddingHorizontal: 5, marginTop: 10, marginBottom: 50}, loaded && {fontFamily: 'Montserrat'}]}>
            La collections de pièces de monnaie

            chez DeliSous est stratosphérique 🌒
          </Text>
          <Text style={[{fontSize: 15, paddingHorizontal: 5, width: '90%', marginBottom: 50}, loaded && {fontFamily: 'Montserrat_bold'}]}>
            trouvez la votre et ajoutez là à votre panier 🤙
          </Text>
          <Image source={require('../assets/images/grownmoney.jpg')} style={{height: 300 }}/>
        </View>
       }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '90%',
    width: '90%',
    alignItems: 'center'
  },
});
