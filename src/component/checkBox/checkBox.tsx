import React from "react";
import { View,StyleSheet,TouchableOpacity ,Image} from "react-native";
import { colors } from "../../utils/colors";


interface ButtonProps {
    checked: boolean;
    onCheck: (checked: boolean) => void;
}

const CheckBox: React.FC<ButtonProps> = ({ checked,onCheck }) => {
    const handlePress=()=>{
        console.log("Button Pressed");
    }
    console.log('inside checkbox')
    return(
        <TouchableOpacity
         activeOpacity={0.6}
         onPress={()=>onCheck(!checked)} 
         style={styles.container}>
             {checked ?(
                <View style={styles.innerContainer}>
                <Image 
                 source={require('../../accects/images/tick.png')}
                 style={styles.checkIcon}
                 />
             </View>
            ):
            null
            }
        </TouchableOpacity> 
    )
}

export default React.memo(CheckBox);

const styles = StyleSheet.create({
     container:{
         borderColor:colors.GREY,
         borderWidth:1,
         borderRadius:4,
         width:22,
         height:22,
              },
     
     innerContainer:{
       backgroundColor:colors.GREY,
       width:'100%',
       height:'100%',
       justifyContent:'center',
       alignItems:'center'
     },
     checkIcon:{
        width:12,
        height:10,
        //backgroundColor:colors.GREY
     }
})