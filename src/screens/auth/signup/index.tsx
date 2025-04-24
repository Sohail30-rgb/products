import React from "react";
import { ScrollView,View,Text, StyleSheet } from "react-native";
import Button from "../../../component/Button";
import { colors } from "../../../utils/colors";
import { Dimensions } from "react-native";
import AuthHeader from "../../../component/authHeader";
import Input from "../../../component/input";
import CheckBox from "../../../component/checkBox/checkBox";
import Seperator from "../../../component/seperator";
import googleButton from "../../../component/googleButton";
import GoogleButton from "../../../component/googleButton";


const {width,height} = Dimensions.get('window');
const SignUp_Screen:React.FC =()=>{
    console.log("Splash Screen Rendered");
    const [checked,setChecked] = React.useState(false);

    const onSignIn =()=>{

    }
    return(
        <ScrollView style={styles.container}>
             <AuthHeader title='Sign Up' />
             <Input label="Name" placeholder="Name"/>
             <Input label="E-mail" placeholder="example@gmail.com"/>
             <Input isPassword label="Password" placeholder="Password"/>

             <View style={styles.agreeRow}>
               <CheckBox checked={checked} onCheck={setChecked}/>
               <Text style={styles.agreeText}>I agree with 
                <Text style={styles.agreeTextBold}> Terms & </Text>
               <Text style={styles.agreeTextBold}>Privacy</Text>
               </Text>
             </View>
             <Button
              style={styles.button}
              title="Sign Up" onPress={()=>console.log("Sign Up Pressed")}/>

              <Seperator text='Or sign up with'/>
              <View style={styles.googleButton}>
              <GoogleButton/>
              </View>
              <Text onPress={onSignIn} style={styles.footerText}>
              Already have an account? 
              <Text style={styles.footerLink}> Sign In</Text> 
              </Text>
        </ScrollView>
    )
}


export default SignUp_Screen;


const styles = StyleSheet.create({
    container: {
         padding: width * 0.10,
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
        width:'100%',
        flex:1
     }
});