import React from 'react';
import { Text, TouchableOpacity, Linking, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';

type IconName = keyof typeof MaterialCommunityIcons.glyphMap;

interface BotaoMainProps {
  texto: string;
  icon: IconName;
  backgroundColor: string;
  color: string;
  url: string;
}

interface IconProps {
  name: IconName;
  color: string;
}

const Icon = ({ name, color }: IconProps) => {
  return <MaterialCommunityIcons name={name} size={24} color={color} style={{marginRight: 12}} />;
};

export function BotaoMain({ texto, icon, backgroundColor, color, url }: BotaoMainProps) {

  async function handleOpenLink(urlToOpen: string) {

    const canOpen = await Linking.canOpenURL(urlToOpen);

    if (canOpen) {
      await Linking.openURL(urlToOpen);
    } else {
      Alert.alert('Não consegui abrir')
    }

    Linking.openURL(urlToOpen).catch(() => Alert.alert('Não foi possível abrir o link desejado.'))
  }


  return (
    <TouchableOpacity onPress={() => handleOpenLink(url)} style={[styles.botao, {backgroundColor: `${backgroundColor}`}]}>
      <Icon name={icon} color={color} />
      <Text style={[styles.botaoTexto, {color: `${color}`}]}>{texto}</Text>
    </TouchableOpacity>
  );
}