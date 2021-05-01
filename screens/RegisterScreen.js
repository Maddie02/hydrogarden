import React from 'react';
import GuestLayout from '../components/GuestLayout';
import { KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import HydroButton from '../components/HydroButton';

import firebase from 'firebase';

const RegisterScreen = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    const handleRegistration = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    firebase.firestore().collection("users")
                            .doc(firebase.auth().currentUser.uid)
                            .set({
                                email,
                                name
                            })
                })
                .catch((error) => {
                    console.log(error);
                })
    }

    return (
        <GuestLayout title="Регистрация">
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <TextInput 
                    placeholder="Имейл адрес"
                    onChangeText={(email) => setEmail(email)}
                    style={styles.input}
                />
                <TextInput 
                    placeholder="Име"
                    onChangeText={(name) => setName(name)}
                    style={styles.input}
                />
                <TextInput 
                    placeholder="Парола"
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(password) => setPassword(password)}
                />
                <HydroButton title="Регистрирай се" onPress={handleRegistration}/>
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

export default RegisterScreen;
