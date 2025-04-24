import React from "react";
import { View,Text,Image, StyleSheet,Pressable } from "react-native";
import Button from '../../component/Button'
import { colors } from "../../utils/colors";
import { Dimensions } from "react-native";

const {width,height} = Dimensions.get('window');
const Splash_Screen:React.FC =()=>{
    ////console.log("Splash Screen Rendered");
    return(
        <View style={styles.container}>
            <Image 
               resizeMode='stretch'
               source={require('../../accects/images/splash_screen.png')}
               style={styles.image}
            />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>You'll Find</Text>
            <Text style={[styles.title,styles.innerTitle]}>All you need</Text>
            <Text style={styles.title}>Here!</Text>
          </View>

            <Button title="Sign Up"/>

            <Pressable hitSlop={10}>
                <Text style={styles.footerText}>Sign In</Text>
            </Pressable>
        </View>
    )
}

export default Splash_Screen;


const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        padding: width * 0.05,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: width * 0.9,
        height: height * 0.25,
    },
    title: {
        fontSize: width * 0.1,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.black,
    },
    innerTitle: {
        color: colors.orange,
        textDecorationLine: 'underline',
    },
    footerText: {
        color: colors.dark_blue,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: width * 0.04,
        marginTop: height * 0.04
    },
    titleContainer: {
        marginVertical: height * 0.07,
    }
});