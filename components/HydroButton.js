import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const HydroButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginBottom: 15,
        elevation: 8,
        backgroundColor: "#077F7B",
        borderRadius: 10,
        paddingVertical: 10,
    },
    text: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
})

export default HydroButton;
