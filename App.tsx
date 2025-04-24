 import React, { useEffect } from 'react';
 import {StyleSheet,SafeAreaView} from 'react-native';
 import SignUp_Screen from './src/screens/auth/signup';
 import SignIn_Screen from './src/screens/auth/signin';
 import { GoogleSignin } from '@react-native-google-signin/google-signin';
 
 
 const WEB_CLIENT_ID='160741174692-dl3aqj1n16p3vmjhcnrptfsuj2quhk3j.apps.googleusercontent.com';


function App(): React.JSX.Element {
   useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,  
    });
   }, []);

  return (
    <SafeAreaView>
      <SignIn_Screen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
