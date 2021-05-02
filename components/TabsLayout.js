import { useFonts } from 'expo-font';
import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import UserContext from '../context/UserContext';

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
                <Button title="Log out" onPress={() => {context.logout ? context.logout() : null}} />
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
        alignItems: 'center'
    },
    header: {
        flex: 1,
        width: '100%',
        backgroundColor: '#077F7B',
        paddingTop: '10%',
        paddingHorizontal: '10%',
        justifyContent: 'center',
    },
    headerText: {
        color: '#FFF',
        fontSize: 25,
        fontFamily: 'MontserratMedium',
        justifyContent: 'flex-start',
    },
    body: {
        flex: 7,
        backgroundColor: "#FFF",
    }
})

export default TabsLayout;
