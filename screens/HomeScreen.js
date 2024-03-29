import React from 'react';
import { StyleSheet, Image, View, Text, Button, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

const HomeScreen = ({ navigation }) => {
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
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.loginContainer} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.textLogin}>Вход</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.registerContainer} onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.appButtonTextRegister}>Регистрация</Text>
                    </TouchableOpacity>
                </View>

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
        flex: 3,
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
    },
    actions: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 50,
    },
    loginContainer: {
        elevation: 8,
        backgroundColor: "#077F7B",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: "15%",
    },
    registerContainer: {
        elevation: 8,
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: '5%',
    },
    textLogin: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    appButtonTextRegister: {
        fontSize: 20,
        color: "#035250",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})

export default HomeScreen;
