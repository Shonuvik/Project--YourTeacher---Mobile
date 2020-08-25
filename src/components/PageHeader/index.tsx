import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
 
import backIcon from '../../assets/images/icons/back.png';
import logoimg from '../../assets/images/logo.png';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title: string;
    headerRight?: ReactNode; //ReactNode = poder receber um componente
    //como propriedade
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    const navigation = useNavigation();
    
    function hendleGoBack() {
        navigation.navigate('Landing');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar} > 
                <BorderlessButton onPress={hendleGoBack} >
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>

                <Image source={logoimg} resizeMode="contain" />
            </View>

            <View style={styles.header}>
                <Text style={styles.title}>{props.title} </Text>
            {   props.headerRight}
            </View>

            {props.children}
        </View>
    );
}

export default PageHeader;