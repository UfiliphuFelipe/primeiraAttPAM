import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import * as obj_DDD from './services/ddd.js'
import CardCidade from './components/card_cidade.js';
import React, {useEffect, useState} from 'react'; 



export default function App() {
  const [ddd, setDDD] = useState('');
  const [uf, setUf] = useState('');
  const [cities, setCities] = useState([]);
  const [emFoco, setEmFoco] = useState(false);
  
  return ( 
    <View style={styles.container}>
      <TextInput
     style={[styles.input ,{ borderColor: emFoco ? '#05e7e7' : '#018080 ' }]}
     placeholder="Enter DDD"
     keyboardType="numeric"
     maxLength={2}
     value={ddd}
     onChangeText={text => setDDD(text.replace(/[^0-9]/g, '')) }
     onFocus={() => setEmFoco(true)}
      />
      <StatusBar style="auto" />
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
  input:{

  }
});
