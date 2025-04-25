import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(timerRef.current);
    setRunning(false);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setSeconds(0);
    setRunning(false);
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatTime(seconds)}</Text>
      <View style={styles.buttons}>
        <Button title="Iniciar" onPress={start} color="#4CAF50" />
        <Button title="Parar" onPress={stop} color="#F44336" />
        <Button title="Zerar" onPress={reset} color="#2196F3" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C34',  // Cor de fundo mais escura
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 80,  // Aumentando o tamanho da fonte
    fontWeight: 'bold',
    color: '#FFFFFF',  // Texto branco para contraste
    marginBottom: 40,
    textShadowColor: '#000',  // Sombra no texto para destacar
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 30,
  },
  button: {
    borderRadius: 10,  // Borda arredondada nos botões
    padding: 10,
    backgroundColor: '#2196F3',
    shadowColor: '#000',  // Sombra para o botão
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
                                                                                    
