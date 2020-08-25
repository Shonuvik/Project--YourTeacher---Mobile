import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationHelpersContext } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles';

import landing from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import api from '../../services/api';

function Landing() {
const navigation = useNavigation();

    const [ totalConnectionsMobile, setTotalConnectionsMobile ] = useState(0);

    useEffect(() => {
        api.get('/connections').then(response => {
            const { total } = response.data;

            setTotalConnectionsMobile(total);
        })
    }, [])

    function handleNavigationToGiveClassesPage() {
        navigation.navigate('GiveClasses');
    }

    function handleNavigateToStudyPages() {
        navigation.navigate('Study');
    }

    return (
        <View style={styles.container} > 
            <Image source={landing} style={styles.banner} />

        <Text style={styles.title} >
            Seja Bem-Vindo, {'\n'}
            <Text style={styles.titleBold} >O que deseja fazer ?</Text>
        </Text>


        <View style={styles.buttonsContainer}>
            <TouchableOpacity 
            onPress={handleNavigateToStudyPages}
            style={[styles.button, styles.buttonPrimary]} >
                <Image source={studyIcon} />

                <Text style={styles.buttonText} >Estudar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleNavigationToGiveClassesPage} style={[styles.button, styles.buttonSecondary]} >
                <Image source={giveClasses} />

                <Text style={styles.buttonText} >Dar Aulas</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.totalConnections} >
            Total de {totalConnectionsMobile} conexões já realizadas {''}
            <Image source={heartIcon} />
        </Text>
        </View>
    );
    
}


export default Landing;