// MultiMeasureCalculator.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { styles } from './styles';

const MultiMeasureCalculator = () => {
  const [measurements, setMeasurements] = useState([]);
  const [pricePerSquareMeter, setPricePerSquareMeter] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [observationVisible, setObservationVisible] = useState(true);
  const [resultVisible, setResultVisible] = useState(false);

  const handleAddMeasurement = () => {
    const newMeasurements = [...measurements, { length: '', width: '' }];
    setMeasurements(newMeasurements);
    setObservationVisible(true); // Garante que a observação esteja visível ao adicionar uma medida
  };

  const handleRemoveMeasurement = index => {
    const newMeasurements = [...measurements];
    newMeasurements.splice(index, 1);
    setMeasurements(newMeasurements);
    // Verifica se ainda há medidas após a remoção
    if (newMeasurements.length === 0) {
      // Se não houver, mantém a observação visível
      setObservationVisible(true);
    }
  };

  const calculateTotalPrice = () => {
    const totalArea = measurements.reduce((acc, measurement) => {
      const area = parseFloat(measurement.length) * parseFloat(measurement.width);
      return acc + area;
    }, 0);
    const total = totalArea * parseFloat(pricePerSquareMeter.replace(',', '.'));
    setTotalPrice(total.toFixed(2));
    setResultVisible(true); // Exibe o resultado com uma animação de surgimento
  };

  return (
    <View style={styles.box}>
      <Text style={styles.heading}>Calculadora para Várias Medidas</Text>
      {measurements.map((measurement, index) => (
        <Animatable.View key={index} animation="fadeInUpBig" style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Comprimento"
            value={measurement.length}
            onChangeText={text => {
              const newMeasurements = [...measurements];
              newMeasurements[index].length = text;
              setMeasurements(newMeasurements);
            }}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Largura"
            value={measurement.width}
            onChangeText={text => {
              const newMeasurements = [...measurements];
              newMeasurements[index].width = text;
              setMeasurements(newMeasurements);
            }}
            keyboardType="numeric"
          />
          <Button title="Remover" onPress={() => handleRemoveMeasurement(index)} />
        </Animatable.View>
      ))}
      <View style={{ marginBottom: 10 }}>
        <Button title="Adicionar Medida" onPress={handleAddMeasurement} style={styles.button} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Preço por metro quadrado"
        value={pricePerSquareMeter}
        onChangeText={text => setPricePerSquareMeter(text)}
        keyboardType="numeric"
      />
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
      {observationVisible && (
        <Text style={[styles.observation, { marginTop: 10 }]}>
          USE UM PONTO AO INVÉS DE VÍRGULA
        </Text>
      )}
    </View>
  );
};

export default MultiMeasureCalculator;
