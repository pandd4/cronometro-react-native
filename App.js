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
    backgroundColor: '#000000', // fundo preto
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#FFFFFF', // texto branco
    marginBottom: 40,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});
