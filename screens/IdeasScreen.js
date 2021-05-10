import React, {useContext} from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import Loader from '../components/Loader';
import AppLayout from '../components/AppLayout';
import UserContext from '../context/UserContext';
import Course from '../components/Course';

const IdeasScreen = () => {

    const context = useContext(UserContext);
        
        return (
            <AppLayout style={styles.container} header="Идеи">
                {
                    context.user ? 

                        <>
                            
                            <SafeAreaView style={styles.container}>
                                <ScrollView style={styles.scrollView}>
                                    <Text style={styles.sectionHeader}>Първи стъпки</Text>

                                    <Course description="Запознай се с хидропониката" />
                                    <Course description="Инсталиране на системата" />

                                    <Text style={styles.sectionHeader}>Как да отгледам...</Text>

                                    <Course description="Маруля" />
                                    <Course description="Спанак" />
                                    <Course description="Ягоди" />
                                    <Course description="Пипер" />
                                    <Course description="Картофи" />

                                </ScrollView>
                            </SafeAreaView>

                        </>

                    : <Loader />
                }
            </AppLayout>
        )
}

const styles = StyleSheet.create({
    sectionHeader: {
        fontSize: 20,
        color: '#035250',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(3, 82, 80, 0.35)'
    }
})

export default IdeasScreen;
