import React from 'react';
import { Header } from 'react-native-elements';

export default function AppHeader(props) {
  const { isHeaderHidden } = props;
  return isHeaderHidden === true ? null : (
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{
        text: "Don't Fret!",
        style: {
          color: '#ffffff',
          fontFamily: 'Lato-Bold',
          fontSize: 18,
          marginTop: 20
        }
      }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
  );
}
