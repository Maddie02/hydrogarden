import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';

const Auth = ({ title }) => {
    const [loaded] = useFonts({
        MontserratMedium: require('../assets/fonts/Montserrat-Medium.ttf')
      });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.welcome}>{title}</Text>
            </View>
            <View style={styles.form}>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#077F7B',
    },
    header: {
        flex: 1,
        paddingTop: '20%',
        paddingHorizontal: '10%',
    },
    welcome: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'MontserratMedium',
        justifyContent: 'flex-start',
        
    },
    form: {
        flex: 3,
        width: '100%',
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        backgroundColor: '#FFF',
    }
})

export default Auth;
