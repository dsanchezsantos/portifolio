import { View } from 'react-native';
import { styles } from './styles'
import { BotaoMain } from '../../components/BotaoMain/BotaoMain';
import { BotaoNavegacao } from '../../components/BotaoNavegacao/BotaoNavegacao';
import { CabecalhoPagina } from '../../components/CabecalhoPagina/CabecalhoPagina';

export function MainScreen() {
  return (
    <View style={styles.container}>
      {/* Foto */}
      <CabecalhoPagina texto='Diogo Sanchez' />

      {/* Botões */}
      <View style={styles.botoesContainer}>
        <BotaoMain icon='linkedin' texto='Linkedin' url='https://www.linkedin.com/in/sanchez-diogo' backgroundColor='#0A66C2' color='#FFFFFF' />
        <BotaoMain icon='github' texto='Github' url='https://github.com/dsanchezsantos' backgroundColor='#212830' color='#FFFFFF' />
        <BotaoMain icon='email' texto='E-mail' url={`mailto:dsanchezsantos@gmail.com`} backgroundColor='#ffffff' color='#212830' />
      </View>

      <View style={styles.botaoNavegacaoContainer}>
        <BotaoNavegacao screenToNavigate='home' texto='Saiba mais sobre mim' icon='location-enter' />
      </View>

    </View>
  );
}