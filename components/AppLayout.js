import { useFonts } from 'expo-font';
import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import UserContext from '../context/UserContext';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const TabsLayout = (props) => {
    const context = useContext(UserContext);
    const [loaded] = useFonts({
        MontserratMedium: require('../assets/fonts/Montserrat-Medium.ttf')
      });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{props.header}</Text>
                <TouchableOpacity style={styles.logout} onPress={() => {context.logout ? context.logout() : null}}>
                    <MaterialCommunityIcons name="logout" size={30} color="#035250" />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#077F7B',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#077F7B',
        paddingTop: '6%',
        paddingBottom: '2%',
        paddingHorizontal: '10%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    headerText: {
        color: '#FFF',
        fontSize: 25,
        width: '90%',
        fontFamily: 'MontserratMedium',
        justifyContent: 'flex-start',
    },
    logout: {
        width: '10%'
    },
    body: {
        flex: 7,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        width: '100%',
        backgroundColor: '#FFF',
        paddingVertical: 30,
        paddingHorizontal: 20,
    }
})

export default TabsLayout;
