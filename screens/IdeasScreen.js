import { useFonts } from 'expo-font';
import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Loading from '../components/Loading';
import AppLayout from '../components/AppLayout';
import UserContext from '../context/UserContext';

const IdeasScreen = () => {

    const context = useContext(UserContext);
        
        return (
            <AppLayout style={styles.container} header="Идеи">
                {
                    context.user ? 
                        <Text>{context.user.email}</Text>
                        
                        

                    : <Loading />
                }
            </AppLayout>
        )


}

const styles = StyleSheet.create({

})

export default IdeasScreen;
