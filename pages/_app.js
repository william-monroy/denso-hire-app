import Navbar from "../components/Navbar";
import { createTheme, NextUIProvider } from '@nextui-org/react';
import "../styles/globals.css";


const densoLightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      // brand colors
      primaryLight: '#DC0032',
      primary: '#DC0032',
      primaryDark: '#DC0032',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd'

      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={densoLightTheme}>
      <Navbar />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
