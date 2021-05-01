import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { FontAwesome5, Feather } from "@expo/vector-icons";

const AddPostButton = () => {
    return (
        <View style={{ position: 'absolute', alignItems: 'center' }}>
            <View style={styles.button}>
                <TouchableHighlight underlayColor="#077F7B">
                    <View>
                        <FontAwesome5 name="plus" size={24} color="#FFF" />
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#077F7B",
        alignItems: 'center',
        justifyContent: 'center',
        width: 65, 
        height: 65,
        borderRadius: 40,
        position: "absolute",
        top: -50,
        shadowColor: '#077F7B',
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
    }
})

export default AddPostButton;
