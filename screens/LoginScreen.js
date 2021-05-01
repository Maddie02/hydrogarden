import React, { useState } from 'react';
import GuestLayout from '../components/GuestLayout';

import firebase from 'firebase';
import { KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native';
import HydroButton from '../components/HydroButton';

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(email, password);
    }

    return (
        <GuestLayout title="Вход">
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <TextInput 
                    placeholder="Имейл адрес"
                    onChangeText={(email) => setEmail(email)}
                    style={styles.input}
                />
                <TextInput 
                    placeholder="Парола"
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(password) => setPassword(password)}
                />
                <HydroButton title="Влез" onPress={handleLogin}/>
            </KeyboardAvoidingView>
        </GuestLayout>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#7C7C7C',
        marginBottom: 10,
    },
})

export default LoginScreen;
