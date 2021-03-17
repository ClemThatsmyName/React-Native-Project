import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export const PieceContext = React.createContext({
  total: '',
  setCompt: () => {},
  check: {},
  setCheck: () => {},
  countCheck: {},
  setCoutC: () => {}
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [compt, setCompt] = useState(0);
  const [check, setCheck] = useState({
    check_compteur: 0,
    check_fin: false,
    check_SM: false,
    check_Malte: false,
    check_Monaco: false,
    check_Vatican5: false,
    check_Vatican6: false
  });

  const [sommeCheck, setSommeC] = useState(0);

  const valeurPiece = {
    total: compt,
    setTotal: setCompt,
    check: check,
    setCheck: setCheck,
    countCheck: sommeCheck,
    setCoutC: setSommeC
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PieceContext.Provider value={valeurPiece}>
          <Navigation colorScheme={colorScheme} />
        </PieceContext.Provider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
