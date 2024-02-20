// Calculator.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { styles } from './styles';

const Calculator = () => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [pricePerSquareMeter, setPricePerSquareMeter] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [resultVisible, setResultVisible] = useState(false);

  const calculateTotalPrice = () => {
    const area = parseFloat(length) * parseFloat(width);
    const total = area * parseFloat(pricePerSquareMeter.replace(',', '.'));
    setTotalPrice(total.toFixed(2));
    setResultVisible(true); // Exibe o resultado com uma animação de surgimento
  };

  return (
    <View style={styles.box}>
      <Text style={styles.heading}>Calculadora</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Comprimento"
          value={length}
          onChangeText={text => setLength(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Largura"
          value={width}
          onChangeText={text => setWidth(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Preço por metro quadrado"
          value={pricePerSquareMeter}
          onChangeText={text => setPricePerSquareMeter(text)}
          keyboardType="numeric"
        />
      </View>
      <Button title="Calcular" onPress={calculateTotalPrice} style={styles.button} />
      {resultVisible && (
        <Animatable.Text
          animation="fadeIn"
          duration={500}
          style={styles.result}
        >
          Total: R$ {totalPrice}
        </Animatable.Text>
      )}
      <Text style={styles.observation}>USE UM PONTO AO INVÉS DE VÍRGULA</Text>
    </View>
  );
};

export default Calculator;
