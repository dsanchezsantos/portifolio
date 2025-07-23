import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
    useNavigation,
} from '@react-navigation/native';

import { styles } from './styles';

type IconName = keyof typeof MaterialCommunityIcons.glyphMap;

interface BotaoNavegacaoProps {
    texto: string;
    icon: IconName;
    screenToNavigate: string;
}

interface IconProps {
    iconName: IconName
}

const Icon = ({ iconName }: IconProps) => {
    return (
        <MaterialCommunityIcons name={iconName} size={24} color='#FFFFFF' style={{ marginRight: 12 }} />
    )
}

export const BotaoNavegacao = ({ texto, icon, screenToNavigate }: BotaoNavegacaoProps) => {

    const navigation = useNavigation<any>();

    return (
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate(screenToNavigate)}>
            <Icon iconName={icon} />
            <Text style={styles.texto}>
                {texto}
            </Text>
        </TouchableOpacity>
    );
}