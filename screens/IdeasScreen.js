import React, {useContext} from 'react'
import { StyleSheet, Text } from 'react-native';
import Loader from '../components/Loader';
import AppLayout from '../components/AppLayout';
import UserContext from '../context/UserContext';

const IdeasScreen = () => {

    const context = useContext(UserContext);
        
        return (
            <AppLayout style={styles.container} header="Идеи">
                {
                    context.user ? 
                        <Text>{context.user.email}</Text>
                        
                        

                    : <Loader />
                }
            </AppLayout>
        )


}

const styles = StyleSheet.create({

})

export default IdeasScreen;
