import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';

export function CounterScreen() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  function subs() {
    setCount(count - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Contador: {count}</Text>

      {count >= 10 && (
        <Text style={{ color: 'red' }}>
          🔥 Llegaste a 10!
        </Text>
      )}

      <Pressable style={styles.buttonAdd} onPress={add}>
        <Text>
            Sumar
        </Text>
      </Pressable>
      <Pressable style={styles.buttonSubs} onPress={subs}>
        <Text>
            Restar
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAdd: {
    backgroundColor: '#aaf321',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonSubs: {
    backgroundColor: '#21f3a3',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
