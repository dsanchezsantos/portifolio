import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { CabecalhoPagina } from '../../components/CabecalhoPagina/CabecalhoPagina';
import { Skill } from '../../components/Skill/Skill';
import { BotaoNavegacao } from '../../components/BotaoNavegacao/BotaoNavegacao';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <CabecalhoPagina texto='Minhas habilidades' />

      <View style={styles.skillsContainer}>
        <Skill nomeTecnologia='CSS' icone='language-css3' notaSkill={5} />
        <Skill nomeTecnologia='HTML' icone='language-html5' notaSkill={5} />
        <Skill nomeTecnologia='JavaScript' icone='language-javascript' notaSkill={5} />
        <Skill nomeTecnologia='Python' icone='language-python' notaSkill={4} />
      </View>

      <View style={styles.botaoNavegacaoContainer}>
        <BotaoNavegacao screenToNavigate='main' texto='Ver mídias sociais' icon='location-exit' />
      </View>
    </View>
  );
}