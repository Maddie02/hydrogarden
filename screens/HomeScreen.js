import React from 'react';
import { StyleSheet, Image, View, Text, Button } from 'react-native';
import { useFonts } from 'expo-font';

const HomeScreen = () => {
    const [loaded] = useFonts({
        Montserrat: require('../assets/fonts/Montserrat-Light.ttf'),
        MontserratMedium: require('../assets/fonts/Montserrat-Medium.ttf')
      });

    if (!loaded) {
    return null;
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                
            </View>
            <View style={styles.home}>
                <Image 
                    source={require("../assets/hydrogarden-logo.png")}
                    style={styles.logo}
                    resizeMode='contain'
                />
                <Text style={styles.homeText}>Достъпен начин за отглеждане на пресни зеленчуци и плодове в градска среда.</Text>
            
            </View>
            <View style={styles.footer}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        backgroundColor: '#077F7B',
    },
    home: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    logo: {
        flex: 2
    },
    footer: {
        flex: 1,
        backgroundColor: '#077F7B',
    },
    homeText: {
        flex: 1,
        color: '#077F7B',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'MontserratMedium',
    }
})

export default HomeScreen;
