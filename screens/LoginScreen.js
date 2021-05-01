import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                Login
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#077F7B'
    }
})

export default LoginScreen
