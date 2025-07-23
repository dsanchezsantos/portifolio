import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff40',
    paddingBottom: 16,
    marginBottom: 12
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 12
  },
  nome: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 600
  }
});