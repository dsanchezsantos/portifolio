import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'

type IconName = keyof typeof MaterialCommunityIcons.glyphMap;

interface SkillProps {
    nomeTecnologia: string;
    icone: IconName;
    notaSkill: number;
}

export function Skill({ nomeTecnologia, icone, notaSkill }: SkillProps) {
    return (
        <View style={styles.container}>
            <View style={styles.category}>
                <MaterialCommunityIcons style={styles.icon} name={icone} size={24} color='#FFFFFF' />
                <Text style={styles.nome}>{nomeTecnologia}</Text>
            </View>
            <View style={styles.category}>
                {Array.from({ length: notaSkill }).map((_, index) => (
                    <MaterialCommunityIcons key={index} style={styles.icon} name='star-circle' size={24} color='#FFFFFF' />
                ))}
            </View>
        </View>
    );
}