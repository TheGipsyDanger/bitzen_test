import * as React from 'react';
import {useEffect, useCallback, useState} from 'react';
import {navigationRef} from '~/utils/navigator';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/routes/Routes';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

import {ThemeProvider} from '~/styles';

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
      <ThemeProvider>
        <NavigationContainer
          ref={navigationRef as React.Ref<NavigationContainerRef>}
        >
          <Provider store={store}>
            <Routes />
          </Provider>
        </NavigationContainer>
      </ThemeProvider>
    </View>
  );
};

export default App;
