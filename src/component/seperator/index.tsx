import React from "react";
import { Text,StyleSheet,View} from "react-native";
import { colors } from "../../utils/colors";

interface seperatorProps {
    text: string;
    style?: any;
}

const Seperator: React.FC<seperatorProps> = ({ style,text }) => {

    return(
         <View style={styles.container}>
            <View style={styles.seperator}/>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.seperator}/>
         </View> 
    )
}

export default Seperator;

const styles = StyleSheet.create({
     container:{
          flexDirection:'row',
          alignItems:'center',
          marginVertical:10,
          //backgroundColor:'yellow'
     },
     text:{
         color:colors.dark_blue,
         fontWeight:'500',
            fontSize:14,
            marginHorizontal:10
     },
     seperator:{
      height:1,
      flex:1,
      backgroundColor:colors.GREY
     }
})