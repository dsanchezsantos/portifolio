import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imageBackground: {
        width: 200,
        height: 200,
        backgroundColor: 'transparent',
        borderWidth: 3,
        borderColor: '#582040',
        borderRadius: '50%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        marginBottom: 18
    },
    foto: {
        width: '100%',
        height: '100%',
        borderRadius: 100
    },
    nomeContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nome: {
        fontSize: 32,
        color: 'white',
        marginBottom: 48
    }
});