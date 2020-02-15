/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

declare var global: {HermesInternal: null | {}};

const App = () => {
  const [text, setText] = useState('');
  const curNumber = useRef(getRandomNumber()).current;
  const count = useRef(0);

  function getRandomNumber() {
    return Math.round(Math.random() * 100);
  }

  function doGuess() {
    count.current++;
    const inputNumber = Number(text);

    if (inputNumber > curNumber) {
      Alert.alert('大了');
    } else if (inputNumber < curNumber) {
      Alert.alert('小了');
    } else {
      Alert.alert(`bingo! 你一共猜了${count.current}次`);
      count.current = 0;
    }
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>猜数字</Text>
        <TextInput
          style={styles.inputBorder}
          keyboardType={'numeric'}
          value={text}
          onChangeText={setText}
          onSubmitEditing={doGuess}></TextInput>
        <TouchableOpacity style={styles.button} onPress={doGuess}>
          <Text style={styles.buttonText}>猜</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff5a60',
  },
  title: {
    alignSelf: 'center',
    fontSize: 36,
    margin: 30,
  },
  inputBorder: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 6,
    height: 50,
    margin: 30,
    padding: 10,
    fontSize: 30,
  },
  button: {
    marginTop: 80,
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fff',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
  },
});

export default App;
