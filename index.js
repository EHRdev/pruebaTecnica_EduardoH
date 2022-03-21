/**
 * @format
 */
 import 'react-native-gesture-handler'; // Navigation
 import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/navigation/App';
import {name as appName} from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import themeDark from './src/components/theme';

// Wrapper
export default function King() {
    return (
      <NavigationContainer>
        <PaperProvider theme={themeDark}>
          <App />
        </PaperProvider>
      </NavigationContainer>
    );
  }

AppRegistry.registerComponent(appName, () => King);
