/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {Text,View, StyleSheet, TextInput} from 'react-native';
import React from 'react';
const App = () => {
  return (
    <View style={styles.flex}>
      <TextInput 
           style={{backgroundColor: 'yellow', width: '90%'}}
           onChangeText = { e => {
             setName(e);
           }}
           keyboardType={"numeric"}
           value= {name}
      />

      <Text style={style.text50}>Hello World</Text>
      <Text style={styles.text50}>Bonjour</Text>
      <View style = {{
        //flex:1,
        width: '100',
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems: "center",
        backgroundColor:'red',
      }}> 
          <View style={styles.carre}/>
          <View style={styles.carre} />
          <View style={styles.carre}/>
        
        <image 
             source = {require('./assets/outline_favorite_black_24dp.png'
             style)}

 </View>

}
const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text50:{
    fontSize: 50,
  },
  carre:{
    width:50,
    height:50,
    margin:10,
    backgroundColor:'blue',
  }

})
export default App;

