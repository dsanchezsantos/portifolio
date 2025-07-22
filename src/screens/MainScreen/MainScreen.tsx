import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import foto from './../../../assets/perfil.jpg'
import { BotaoMain } from '../../components/BotaoMain/BotaoMain';
import { BotaoNavegacao } from '../../components/BotaoNavegacao/BotaoNavegacao';

export function MainScreen() {
  return (
    <View style={styles.container}>
      {/* Foto */}
      <View style={styles.imageBackground}>
        <Image
          style={styles.foto}
          source={foto}
        />
      </View>

      {/* Nome */}
      <View style={styles.nomeContainer}>
        <Text style={styles.nome}>Diogo Sanchez</Text>
      </View>

      {/* Botões */}
      <View style={styles.botoesContainer}>
        <BotaoMain icon='linkedin' texto='Linkedin' backgroundColor='#0A66C2' color='#FFFFFF' />
        <BotaoMain icon='github' texto='Github' backgroundColor='#212830' color='#FFFFFF' />
        <BotaoMain icon='email' texto='E-mail' backgroundColor='#ffffff' color='#212830' />
      </View>

      <View style={styles.botaoNavegacaoContainer}>
        <BotaoNavegacao texto='Conhecer mais' icon='location-enter' />
      </View>

      <StatusBar style="light" />
    </View>
  );
}