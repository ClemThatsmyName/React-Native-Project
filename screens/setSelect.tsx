import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { PieceContext } from '../App';

export default function set() {

  const valeurPiece = useContext(PieceContext);

  return ;
}

export const setSelectionfin = () => {
  var compteur = valeurPiece.compteur;
  var check_SM = valeurPiece.check.check_SM;
  var check_fin = valeurPiece.check.check_fin;
  var check_compteur = valeurPiece.check.check_compteur;

  var bool = valeurPiece.check.check_fin;
  bool = !bool;
  valeurPiece.setCheck({check_compteur: check_compteur, check_fin: bool, check_SM: check_SM});

  if (valeurPiece.check.check_fin === false) {
    valeurPiece.setCheck({check_compteur: check_compteur + 1, check_fin: bool, check_SM: check_SM})
  }else{
    valeurPiece.setCheck({check_compteur: check_compteur - 1, check_fin: bool, check_SM: check_SM})
  }
};


export const setSelectionMalte = () => {
  var bool = valeurPiece.check.check_SM;
  bool = !bool;
  valeurPiece.setCheck({check_compteur: check_compteur, check_fin: check_fin, check_SM: bool});

  if (valeurPiece.check.check_SM === false) {
    valeurPiece.setCheck({check_compteur: check_compteur + 1, check_fin: check_fin, check_SM: bool})
  }else{
    valeurPiece.setCheck({check_compteur: check_compteur - 1, check_fin: check_fin, check_SM: bool})
  }
};

export const setSelection = () => {

  var bool = valeurPiece.check.check_SM;
  bool = !bool;
  valeurPiece.setCheck({check_compteur: check_compteur, check_fin: check_fin, check_SM: bool});

  if (valeurPiece.check.check_SM === false) {
    valeurPiece.setCheck({check_compteur: check_compteur + 1, check_fin: check_fin, check_SM: bool})
  }else{
    valeurPiece.setCheck({check_compteur: check_compteur - 1, check_fin: check_fin, check_SM: bool})
  }
};


export const setSelectionSM = () => {
  var bool = valeurPiece.check.check_SM;
  bool = !bool;
  valeurPiece.setCheck({check_compteur: check_compteur, check_fin: check_fin, check_SM: bool});

  if (valeurPiece.check.check_SM === false) {
    valeurPiece.setCheck({check_compteur: check_compteur + 1, check_fin: check_fin, check_SM: bool})
  }else{
    valeurPiece.setCheck({check_compteur: check_compteur - 1, check_fin: check_fin, check_SM: bool})
  }
};
