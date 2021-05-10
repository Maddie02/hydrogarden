import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Course = (props) => {
    return (
        <TouchableOpacity>
            <View  style={styles.container}>
                <Text style={styles.description}>{props.description}</Text>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 25,
        elevation: 8,
        backgroundColor: '#077F7B',
        marginVertical: 10,
    },
    description: {
        color: '#FFF',
        fontWeight: 'bold',
        letterSpacing: 1.5,
        textAlign: 'center',
    },

})

export default Course;
