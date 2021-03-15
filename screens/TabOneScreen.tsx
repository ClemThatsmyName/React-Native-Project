import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Button, CheckBox, Switch, Platform, ScrollView , TouchableOpacity } from 'react-native';

import Basket from './Basket';
import FinlandaisScreen from 'docsscreens/FinlandaisScreen';
import MalteScreen from 'docsscreens/MalteScreen';
import MonacoScreen from 'docsscreens/MonacoScreen';
import SaintMartinScreen from 'docsscreens/SaintMartinScreen';
import Vatican2005Screen from 'docsscreens/Vatican2005Screen';
import Vatican2006Screen from 'docsscreens/Vatican2006Screen';

import { PieceContext } from '../App';
import { useFonts } from 'expo-font';

export default function TabOneScreen( {navigation} ) {

  const valeurPiece = useContext(PieceContext);

  const [loaded, error] = useFonts({
    AbrilFatfaceRegular: require('../assets/fonts/AbrilFatface-Regular.ttf'),
    Montserrat: require('../assets/fonts/Montserrat-Medium.ttf'),
    Montserrat_light: require('../assets/fonts/Montserrat-Light.ttf'),
    Montserrat_italic: require('../assets/fonts/Montserrat-LightItalic.ttf'),
    Montserrat_bold: require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  var compteur = valeurPiece.compteur;
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




  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={{paddingBottom: 380}}>
        <View style={styles.contmosaic}>

          <Text style={[styles.snd_title, loaded && {fontFamily: 'Montserrat_light'}]}>Pièces de 2 euros {valeurPiece.check.check_compteur}</Text>

          <Button title='+' onPress={() => {valeurPiece.setCompt(compteur + 1)}}/>

          <View style={styles.mosaic}>


            <View style={styles.el1_mosaic}>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.push("FinlandaisScreen")}>
              <View style={{height: '65%', width: '100%', overflow: 'hidden', justifyContent: 'center'}}>
                <Image source={require('../assets/images/finlandais.png')} style={{alignSelf: 'center', height: '90%', width: 150}} resizeMode="cover"/>
              </View>

              <Text style={[styles.el1_title, loaded && {fontFamily: 'Montserrat_bold'}]}>Finlandais</Text>
              <Text style={[styles.el1_topic, loaded && {fontFamily: 'Montserrat_light'}]}>Elargissement de l’Union européenne à...</Text>
              </TouchableOpacity>
              <View style={styles.buy}>

                <Text style={[styles.el1_buy, loaded && {fontFamily: 'Montserrat_bold'}]}>Acheter</Text>
                {Platform.OS === "ios" ? <Switch style={styles.switch} value={valeurPiece.check.check_fin} onValueChange={setSelection} />: <CheckBox style={styles.checkbox} value={valeurPiece.check.check_fin} onValueChange={setSelection} tintColors={{ true: '#E7E3D4'}}/>}
              </View>
            </View>



            <View style={styles.el2_mosaic}>
              <TouchableOpacity style={styles.touch} onPress={() => navigation.push("SaintMartinScreen")}>
                <View style={{height: '65%', width: '100%', overflow: 'hidden', justifyContent: 'center'}}>
                  <Image source={require('../assets/images/saintMartin.png')} style={{alignSelf: 'center', height: '90%', width: 150}} resizeMode="cover"/>
                </View>
                <Text style={[styles.el2_title, loaded && {fontFamily: 'Montserrat_bold'}]}>Saint Martin</Text>
                <Text style={[styles.el2_topic, loaded && {fontFamily: 'Montserrat_light'}]}>Bartolomeo Borghesi (historien et...</Text>
              </TouchableOpacity>
              <View style={styles.buy}>
                <Text style={[styles.el2_buy, loaded && {fontFamily: 'Montserrat_bold'}]}>Acheter</Text>
                {Platform.OS === "ios" ? <Switch style={styles.switch} onValueChange={setSelection}/>: <CheckBox style={styles.checkbox} tintColors={{ true: '#E7E3D4'}}/>}
              </View>
            </View>


            <View style={styles.el3_mosaic}>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.push("Vatican2005Screen")}>
              <View style={{height: '65%', width: '100%', overflow: 'hidden', justifyContent: 'center'}}>
                <Image source={require('../assets/images/vatican.png')} style={{alignSelf: 'center', height: '90%', width: 150}} resizeMode="cover"/>
              </View>
              <Text style={[styles.el3_title, loaded && {fontFamily: 'Montserrat_bold'}]}>Vatican 2005</Text>
              <Text style={[styles.el3_topic, loaded && {fontFamily: 'Montserrat_light'}]}>20e Journées mondiales de la jeunesse...</Text>
              </TouchableOpacity>
              <View style={styles.buy}>
                <Text style={[styles.el3_buy, loaded && {fontFamily: 'Montserrat_bold'}]}>Acheter</Text>
                {Platform.OS === "ios" ? <Switch style={styles.switch} onValueChange={setSelection}/>: <CheckBox style={styles.checkbox} tintColors={{ true: '#E7E3D4'}}/>}
              </View>
            </View>



            <View style={styles.el4_mosaic}>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.push("Vatican2006Screen")}>
              <View style={{height: '65%', width: '100%', overflow: 'hidden', justifyContent: 'center'}}>
                <Image source={require('../assets/images/garde-suisse.png')} style={{alignSelf: 'center', height: '90%', width: 150}} resizeMode="cover"/>
              </View>
              <Text style={[styles.el4_title, loaded && {fontFamily: 'Montserrat_bold'}]}>Vatican 2006</Text>
              <Text style={[styles.el4_topic, loaded && {fontFamily: 'Montserrat_light'}]}>5e centenaire de la Garde suisse...</Text>
              </TouchableOpacity>
              <View style={styles.buy}>
                <Text style={[styles.el4_buy, loaded && {fontFamily: 'Montserrat_bold'}]}>Acheter</Text>
                {Platform.OS === "ios" ? <Switch style={styles.switch} onValueChange={setSelection}/>: <CheckBox style={styles.checkbox} tintColors={{ true: '#E7E3D4'}}/>}
              </View>
            </View>

            <View style={styles.el5_mosaic}>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.push("MonacoScreen")}>
              <View style={{height: '65%', width: '100%', overflow: 'hidden', justifyContent: 'center'}}>
                <Image source={require('../assets/images/monaco.png')} style={{alignSelf: 'center', height: '90%', width: 150}} resizeMode="cover"/>
              </View>
              <Text style={[styles.el5_title, loaded && {fontFamily: 'Montserrat_bold'}]}>Monaco 2016</Text>
              <Text style={[styles.el5_topic, loaded && {fontFamily: 'Montserrat_light'}]}>150e anniversaire de la fondation de...</Text>
              </TouchableOpacity>
              <View style={styles.buy}>
                <Text style={[styles.el5_buy, loaded && {fontFamily: 'Montserrat_bold'}]}>Acheter</Text>
                {Platform.OS === "ios" ? <Switch style={styles.switch} onValueChange={setSelection}/>: <CheckBox style={styles.checkbox} tintColors={{ true: '#E7E3D4'}}/>}
              </View>
            </View>

            <View style={styles.el6_mosaic}>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.push("MalteScreen")}>
              <View style={{height: '65%', width: '100%', overflow: 'hidden', justifyContent: 'center'}}>
                <Image source={require('../assets/images/malta.png')} style={{alignSelf: 'center', height: '90%', width: 150}} resizeMode="cover"/>
              </View>
              <Text style={[styles.el6_title, loaded && {fontFamily: 'Montserrat_bold'}]}>Malte 2016</Text>
              <Text style={[styles.el6_topic, loaded && {fontFamily: 'Montserrat_light'}]}>Le rôle de la Malta Community...</Text>
              </TouchableOpacity>
              <View style={styles.buy}>
                <Text style={[styles.el6_buy, loaded && {fontFamily: 'Montserrat_bold'}]}>Acheter</Text>
                {Platform.OS === "ios" ? <Switch style={styles.switch} onValueChange={setSelection}/>: <CheckBox style={styles.checkbox} tintColors={{ true: '#E7E3D4'}}/>}
              </View>
            </View>

          </View>

        </View>
      </ScrollView>

    </View>


  );
}

const styles = StyleSheet.create({
  //https://acbon.pagesperso-orange.fr/2-euro-commemorative-2006-vatican.html
  container: {
    flex: 1,
    backgroundColor: '#E7E3D4',
  },

  container_title_and: {
    backgroundColor: '#E7E3D4',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 80,
    width: '100%',
  },

  container_title_ios: {
    backgroundColor: '#E7E3D4',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 10,
    height: 100,
    width: '100%',
    flexDirection: 'row'
  },

  title: {
    color: '#19181A',
    fontSize: 40,
  },

  contmosaic: {
    height: 700
  },

  snd_title: {
    color: '#19181A',
    fontSize: 23,
    marginLeft: 15,
    textDecorationLine: 'underline',
    marginBottom: 10
  },

  mosaic: {
    height: '98%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'

  },

  //First Element of the mosaic
  el1_mosaic:{
    backgroundColor: '#19181A',
    height: '49%',
    width: '49%',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden'
  },

  touch:{
    height: '75%',
    alignItems: 'center'
  },

  el1_title:{
    color: 'white',
    marginTop: '2%',
    fontSize: 20,
    fontWeight: 'bold'
  },

  el1_topic:{
    color: 'white',
    marginTop: '10%',
    fontSize: 15,
    marginLeft: '3%'
  },

  el1_buy:{
    color: 'white',
    fontSize: 15
  },

  buy:{
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '5%',
  },

  switch:{

  },

  checkbox: {
    // height: 10,
    // width: 10

  },

  //2nd Element of the mosaic
  el2_mosaic:{
    backgroundColor: '#19181A',
    height: '49%',
    width: '49%',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: '1%'
  },

  el2_title:{
    color: 'white',
    marginTop: '2%',
    fontSize: 20,
    fontWeight: 'bold'
  },

  el2_topic:{
    color: 'white',
    marginTop: '10%',
    fontSize: 15,
    marginLeft: '3%'
  },

  el2_buy:{
    color: 'white',
    fontSize: 15
  },


  //3rd Element of the mosaic
  el3_mosaic : {
    backgroundColor: '#19181A',
    width: '49%',
    height: '49%',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: '1%'
  },

  el3_title:{
    color: 'white',
    marginTop: '2%',
    fontSize: 20,
    fontWeight: 'bold'
  },

  el3_topic:{
    color: 'white',
    marginTop: '10%',
    fontSize: 15,
    marginLeft: '3%'
  },

  el3_buy:{
    color: 'white',
    fontSize: 15
  },

  //4th Element of the mosaic
  el4_mosaic :{
    backgroundColor: '#19181A',
    width: '49%',
    height: '49%',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },

  el4_title:{
    color: 'white',
    marginTop: '2%',
    fontSize: 20,
    fontWeight: 'bold'
  },

  el4_topic:{
    color: 'white',
    marginTop: '10%',
    fontSize: 15,
    marginLeft: '3%'
  },

  el4_buy:{
    color: 'white',
    fontSize: 15
  },

  //5th Element of the mosaic
  el5_mosaic :{
    backgroundColor: '#19181A',
    width: '49%',
    height: '49%',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },

  el5_title:{
    color: 'white',
    marginTop: '2%',
    fontSize: 20,
    fontWeight: 'bold'
  },

  el5_topic:{
    color: 'white',
    marginTop: '10%',
    fontSize: 15,
    marginLeft: '3%'
  },

  el5_buy:{
    color: 'white',
    fontSize: 15
  },


  //The 6th element of the mosaic
  el6_mosaic :{
    backgroundColor: '#19181A',
    width: '49%',
    height: '49%',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },

  el6_title:{
    color: 'white',
    marginTop: '2%',
    fontSize: 20,
    fontWeight: 'bold'
  },

  el6_topic:{
    color: 'white',
    marginTop: '10%',
    fontSize: 15,
    marginLeft: '3%'
  },

  el6_buy:{
    color: 'white',
    fontSize: 15
  },
});
