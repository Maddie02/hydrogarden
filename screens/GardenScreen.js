import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppLayout from '../components/AppLayout';
import {Picker} from '@react-native-picker/picker';
import HydroButton from '../components/HydroButton';


const GardenScreen = () => {

    const [selectedPlant, setSelectedPlant] = useState();
    const [image, setImage] = useState(1);

    const plants = ['Маруля', 'Спанак', 'Ягоди', 'Пипер', 'Картофи'];

    return (
        <AppLayout header="Градина">
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Какво ще засадиш днес?</Text>
                    <View style={styles.viewPicker}>
                        <Picker style={styles.picker}
                            selectedValue={selectedPlant}
                            mode='dialog'
                            onValueChange={(itemValue, itemIndex) => {
                                setSelectedPlant(itemValue)
                                setImage(itemIndex)
                            }
                        }>
                            {
                                plants.map(plant => {
                                    return <Picker.Item key={plant} label={plant} value={plant} />
                                })
                            }
                        </Picker>
                    </View>
                </View>
                <View style={styles.button}>  
                    <HydroButton title="Засади сега!" />
                </View>
            </View>
        </AppLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: '#035250',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    header: {
        paddingVertical: 20,
        flex: 4,
    },
    viewPicker: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 25,
        borderColor: 'rgba(0, 0, 0, 0.3)',
    },
    picker: {
        padding: 30,
    },
    button: {
        flex: 1,
    }
})

export default GardenScreen;
