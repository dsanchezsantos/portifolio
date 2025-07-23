import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';
import foto from './../../../assets/perfil.jpg'

interface CabecalhoPaginaProps {
    texto: string
}

export const CabecalhoPagina = ({texto}: CabecalhoPaginaProps) => {
  return (
    <>
        <View style={styles.imageBackground}>
            <Image
                style={styles.foto}
                source={foto}
            />
        </View>

        <View style={styles.nomeContainer}>
            <Text style={styles.nome}>
                {texto}
            </Text>
        </View>
    </>
  );
}