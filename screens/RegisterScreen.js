import React from 'react';
import GuestLayout from '../components/GuestLayout';
import { KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import HydroButton from '../components/HydroButton';

const RegisterScreen = () => {

    const [email, setEmail] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');


    const handleRegistration = () => {
        console.log('reg');
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
                    placeholder="Телефонен номер"
                    onChangeText={(number) => setPhoneNumber(number)}
                    style={styles.input}
                />
                <TextInput 
                    placeholder="Парола"
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(password) => setPhoneNumber(password)}
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
