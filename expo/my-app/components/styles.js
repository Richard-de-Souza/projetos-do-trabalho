// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calculatorsContainer: {
    flexDirection: 'row', // Alterado para flex direção row
    justifyContent: 'space-between', // Adicionado para espaçamento entre os componentes
    width: '90%',
    maxWidth: 1200, // Ajuste conforme necessário
  },
  box: {
    flex: 1, // Adicionado para ocupar espaço igualmente
    margin: 10, // Adicionado para espaçamento entre as calculadoras
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 255, 0.3)',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 100 },
    shadowOpacity: 0.1,
    shadowRadius: 100,
    overflow: 'hidden',
  },
  heading: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  result: {
    fontSize: 20,
    textAlign: 'center',
  },
  observation: {
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 10,
  },
});
