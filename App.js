import React from 'react';
import { Text } from 'react-native';
import { chunk } from 'lodash';

const App = () => {
  const result = chunk(['a', 'b', 'c', 'd'], 2);
  return <Text>Hello World from Feature 123456 {result}</Text>;
};

export default App;
