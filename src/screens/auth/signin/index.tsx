import React from "react";
import { ScrollView,View,Text, StyleSheet } from "react-native";
import Button from "../../../component/Button";
import { colors } from "../../../utils/colors";
import { Dimensions } from "react-native";
import AuthHeader from "../../../component/authHeader";
import Input from "../../../component/input";
import Seperator from "../../../component/seperator";
import GoogleButton from "../../../component/googleButton";

const {width,height} = Dimensions.get('window');
const SignIn_Screen:React.FC =()=>{
    console.log("Splash Screen Rendered");
    const [checked,setChecked] = React.useState(false);

    const onSignUp =()=>{

    }
    return(
        <ScrollView style={styles.container}>
             <AuthHeader title='Sign In' style={{bottom:17}}  />
             <Input label="E-mail" placeholder="example@gmail.com"/>
             <Input isPassword label="Password" placeholder="Password"/>
             <Button
              style={styles.button}
              title="Sign In" onPress={()=>console.log("Sign Up Pressed")}/>
              <Seperator text='Or sign in with'/>
              <View style={styles.googleButton}>
              <GoogleButton/>
              </View>
              <Text onPress={onSignUp} style={styles.footerText}>
              Don’t have an account? 
              <Text style={styles.footerLink}> Sign Up</Text> 
              </Text>
        </ScrollView>
    )
}


export default SignIn_Screen;


const styles = StyleSheet.create({
    container: {
         padding: width * 0.10,
         marginTop:40,
    },
     agreeRow:{
        flexDirection:'row',
        alignItems:'center',
     },
     agreeText:{
        fontSize:14,
        color:colors.dark_blue,
        marginHorizontal:14
     },
     innerAgreeText:{

     },
     agreeTextBold:{
        fontWeight:'bold'
     },
     button:{
        marginVertical:35
     },
     googleButton:{
        //alignItems:'center'
        marginVertical:27,
     },
     footerLink:{
        fontWeight:'bold'
     },
     footerText:{
        color:colors.dark_blue,
        marginBottom:56,
        textAlign:'center',
        fontSize:14,
     }
});