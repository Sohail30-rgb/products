import React from "react";
import { View,Text,Pressable,StyleSheet,Image } from "react-native";
import { colors } from "../../utils/colors";
import { Dimensions } from "react-native";
const {width,height} = Dimensions.get('window');


interface ButtonProps {
    title: string;
    onBackPress?: () => void;
    style?: any;
}

const AuthHeader: React.FC<ButtonProps> = ({ title,onBackPress,style }) => {
    const handlePress=()=>{
        console.log("Button Pressed");
    }
    return(
         <View style={[styles.container,style]}>
            <Pressable 
            hitSlop={10}
            onPress={onBackPress}>
                <Image
                 source={require('../../accects/images/arrow.png')}
                 style={styles.image}
                 />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
         </View>
    )
}

export default AuthHeader;

const styles = StyleSheet.create({
     container:{
        flexDirection:'row'  ,
        alignItems:'center',
        marginBottom:54
     },
     title:{
         color:colors.dark_blue,
         fontSize:26,
         fontWeight:'500',
         paddingHorizontal:16
     },
     image:{
      width:19,
      height:19,
     }
})