import React from "react";
import { StyleSheet,TouchableOpacity,Image, View } from "react-native";
import { colors } from "../../utils/colors";
import { GoogleSignin,statusCodes } from "@react-native-google-signin/google-signin";

interface ButtonProps {
    //title: string;
    onPress?: () => void;
    style?: any;
}

const GoogleButton: React.FC<ButtonProps> = ({ onPress,style }) => {
    const handleGoogleLogin= async()=>{
         
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('userInfo :>> ', userInfo);
        } catch (error) {
            if ((error as any).code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if ((error as any).code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if ((error as any).code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }}
    
    console.log('inside button')
    return(
        <TouchableOpacity onPress={handleGoogleLogin} style={styles.container}>
            <View style={styles.button}>
                <Image
                 style={styles.google}
                 source={require('../../accects/images/google_button.png')}/>
            </View>
        </TouchableOpacity>  
    )
}

export default React.memo(GoogleButton);

const styles = StyleSheet.create({
    container:{
        width:'45%',
        backgroundColor:colors.dark_grey,
        borderRadius:14,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        marginBottom:50
    },
      button:{
        //justifyContent:'center',
        //alignItems:'center',
        //backgroundColor:colors.dark_grey,
        //height:'100%',
        //width:'100%',
        //borderRadius:14,
        
      },
      google:{
        width:28,
        height:28
      }
})