import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';

import GiveClassesimg from '../../assets/images/give-classes-background.png';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';


function GiveClasses () {

    const {goBack} = useNavigation();

    function handleNabigateBack() {
        goBack();
    }


    return (
    <View style={styles.container}>
        <ImageBackground 
        resizeMode="contain" 
        source={GiveClassesimg} 
        style={styles.content} >

            <Text style={styles.title}>
                Quer ser um instrutor?
            </Text>
            <Text style={styles.description} >Para começar, increva-se na nossa plataforma web</Text>
        </ImageBackground>

        <TouchableOpacity onPress={handleNabigateBack} style={styles.okButton} >
            <Text style={styles.okButtonText} >Ir para a Página Web</Text>
        </TouchableOpacity>
    </View>
        
        )

}

export default GiveClasses;