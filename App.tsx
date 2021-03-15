import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export const PieceContext = React.createContext({
  compteur: '',
  setCompt: () => {},
  check: {},
  setCheck: () => {}
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [compt, setCompt] = useState(0);
  const [check, setCheck] = useState({
    check_compteur: 0,
    check_fin: false,
    check_SM: false,
  });


  const valeurPiece = {
    compteur: compt,
    setCompt: setCompt,
    check: check,
    setCheck: setCheck
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
