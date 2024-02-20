// VolumeCalculator.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles';

const CalculadoraCubica = () => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [pricePerCubicMeter, setPricePerCubicMeter] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  const calculateTotalPrice = () => {
    const volume = parseFloat(length) * parseFloat(width) * parseFloat(height);
    const total = volume * parseFloat(pricePerCubicMeter.replace(',', '.'));
    setTotalPrice(total.toFixed(2));
  };

  return (
    <View style={styles.box}>
      <Text style={styles.heading}>Calculadora de Volume</Text>
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
          placeholder="Altura"
          value={height}
          onChangeText={text => setHeight(text)}
          keyboardType="numeric"
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Preço por metro cúbico"
        value={pricePerCubicMeter}
        onChangeText={text => setPricePerCubicMeter(text)}
        keyboardType="numeric"
      />
      <Button title="Calcular" onPress={calculateTotalPrice} style={styles.button} />
      {totalPrice !== '' && (
        <Text style={styles.result}>Total: R$ {totalPrice}</Text>
      )}
      <Text style={styles.observation}>USE UM PONTO AO INVÉS DE VÍRGULA</Text>
    </View>
  );
};

export default CalculadoraCubica;
