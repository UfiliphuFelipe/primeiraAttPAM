import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as obj_DDD from './services/ddd.js';
import CardCidade from './components/Card_cidade.js';
import { FlashList } from "@shopify/flash-list";
import React, { useEffect, useState } from 'react';


export default function App() {
  const [ddd, setDDD] = useState('');
  const [uf, setUf] = useState('');
  const [cities, setCities] = useState([]);
  
  const [emfoco, setemfoco] = useState(false);

  useEffect(() => {
    if (ddd.length === 2) {
      obj_DDD.buscarDDDCallBack(ddd, dados =>{
        console.log(dados);
        setUf(dados.state);
        setCities(dados.cities);
      });
    }
  }, [ddd]);

  return (
    <View style={styles.container}>
      <TextInput
      style={[styles.Input,{borderColor: emfoco ? '#05e7e7':'#018080'}]}
      placeholder='Enter DDD'
      keyboardType='numeric'
      maxLength={2}
      value={ddd}
      onChangeText={text => setDDD(text.replace(/[^0-9]/g, ''))}
      onFocus={() => setemfoco(true)}
      onBlur={() => setemfoco(false)}
      />

        <View style={styles.view_list}>
          <FlashList
            data={cities}
            renderItem={({ item, index }) =>
            <CardCidade
              nome={item}
              uf={uf}
              key={index}
            />
          }
          estimatedItemSize={200}
        />
        </View>
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
    paddingTop:20
  },
  Input:{
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 20,
    fontSize: 16
  },
  view_list: {
    flex: 1,
    width: '100%'
  }
});
