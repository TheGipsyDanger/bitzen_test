import * as React from 'react';
import {useEffect, useCallback, useState} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/redux/store';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/routes/Routes';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded) return setAppIsReady(true);
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return <></>;

  return (
    <View style={{flex: 1}} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Provider store={store}>
          <Routes />
        </Provider>
      </NavigationContainer>
    </View>
  );
};

export default App;
