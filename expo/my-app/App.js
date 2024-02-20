// App.js
import React from 'react';
import { View } from 'react-native';
import { styles } from './components/styles';
import Calculator from './components/Calculator';
import MultiMeasureCalculator from './components/MultiMeasureCalculator';
import CalculadoraCubica from './components/CalculadoraCubica';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.calculatorsContainer}>
        <Calculator />
        <MultiMeasureCalculator />
        <CalculadoraCubica />
      </View>
    </View>
  );
};

export default App;
