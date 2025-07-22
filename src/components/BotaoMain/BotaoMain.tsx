import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';

type IconName = keyof typeof MaterialCommunityIcons.glyphMap;

interface BotaoMainProps {
  texto: string;
  icon: IconName;
  backgroundColor: string;
  color: string
}

interface IconProps {
  name: IconName;
  color: string;
}

const Icon = ({ name, color }: IconProps) => {
  return <MaterialCommunityIcons name={name} size={24} color={color} style={{marginRight: 12}} />;
};

export function BotaoMain({ texto, icon, backgroundColor, color }: BotaoMainProps) {
  return (
    <TouchableOpacity style={[styles.botao, {backgroundColor: `${backgroundColor}`}]}>
      <Icon name={icon} color={color} />
      <Text style={[styles.botaoTexto, {color: `${color}`}]}>{texto}</Text>
    </TouchableOpacity>
  );
}

<button>
  <img></img>
  <span>texto</span>
</button>