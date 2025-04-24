import React from "react";
import { View,TextInput, StyleSheet,Text, Pressable,Image } from "react-native";
import { colors } from "../../utils/colors";


interface InputProps{
    label:string;
    placeholder:string;
    isPassword?:boolean;
}
const Input: React.FC<InputProps> = ({ label,placeholder,isPassword }) => {
    const [isPasswordVisible, setPasswordIsVisible] = React.useState(false);
    const onLockPress = () => {
        setPasswordIsVisible(!isPasswordVisible);
    };
    return(
        <View style={styles.container}>

            <Text style={styles.label}>{label}</Text>

            <View style={styles.inputContainer}>
             <TextInput 
             secureTextEntry={isPassword&&!isPasswordVisible}
             style={styles.input}
             placeholder={placeholder}
              />
              {isPassword ?(<Pressable onPress={onLockPress}>
                <Image
                     style={styles.lock}
                     source={isPasswordVisible?require('../../accects/images/ol.png'):require('../../accects/images/cl.png')}/>
              </Pressable>):null}
               
            </View>

        </View>
        
    )
}

export default Input;

const styles=StyleSheet.create({
    container:{
       marginBottom:20
    },
    inputContainer:{
      borderWidth:1,
      borderColor:colors.GREY,
      borderRadius:14,
      flexDirection:'row',
      alignItems:'center'
    },
    label:{
       marginBottom:8,
       color:colors.dark_blue,
       fontSize:14,
       fontWeight:'500'
       //borderWidth:1
    },
    input:{
      //borderWidth:1,
      //borderColor:colors.GREY,
      paddingHorizontal:16,
      paddingVertical:20,
      flex:1
    },
    lock:{
        width:24,
        height:24,
        marginHorizontal:16
    }
})