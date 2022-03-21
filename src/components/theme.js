import { configureFonts, DarkTheme } from 'react-native-paper';
import { appDark, appYellow } from './colors';

const fontConfig = {
    ios: {
      regular: {
        fontFamily: 'menlo',
        fontWeight: 'normal',
      },
    },
    android: {
      regular: {
        fontFamily: 'monospace',
        fontWeight: 'normal',
      },
    },
  };

// Colors Themes
const themeDark = {
    ...DarkTheme,
    fonts: configureFonts(fontConfig),
    colors: {
      ...DarkTheme.colors,
      primary: appYellow, // Buttons & Details
      background: appDark, // Background
      surface: appDark, // Surfaces
      onSurface: appDark, // SnackBar
    },
};


export default themeDark;