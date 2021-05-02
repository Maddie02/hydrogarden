import { useFonts } from 'expo-font';
import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Loading from '../components/Loading';
import TabsLayout from '../components/TabsLayout';
import UserContext from '../context/UserContext';

const IdeasScreen = () => {

    const context = useContext(UserContext);
        
        return (
            <TabsLayout style={styles.container} header="Идеи">
                {
                    context.user ? 
                        <Text>{context.user.email}</Text>
                        
                        

                    : <Loading />
                }
            </TabsLayout>
        )


}

const styles = StyleSheet.create({

})

export default IdeasScreen;
