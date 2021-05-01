import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                Register
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

export default RegisterScreen
