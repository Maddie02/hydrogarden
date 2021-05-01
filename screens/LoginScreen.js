import React from 'react';
import GuestLayout from '../components/GuestLayout';

import firebase from 'firebase';

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

export default LoginScreen;
