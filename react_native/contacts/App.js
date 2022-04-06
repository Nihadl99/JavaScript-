/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {SafeAreaView, Text, StyleSheet, Platform, ScrollView, FlatList} from 'react-native';
 import CardView from './components/CardView';
 
 const users = [
     {id: 0, img: 'https://randomuser.me/api/portraits/women/31.jpg', name: 'Fatma EKICI', email: 'fatma.ekici@example.com', phone: '06.26.91.65.49'},
     {id: 1, img: 'https://randomuser.me/api/portraits/women/76.jpg', name: 'Daniel MACKAY', email: 'daniel.mackay@example.com', phone: '07.51.09.34.12'},
     {id: 2, img: 'https://randomuser.me/api/portraits/women/22.jpg', name: 'Geertruida WACHTMEESTER', email: 'geertruida.wachtmeester@example.com', phone: '06.26.91.65.49'},
     {id: 3, img: 'https://randomuser.me/api/portraits/men/78.jpg', name: 'Oscar WILLIAMS', email: 'oscar.williams@example.com', phone: '07.51.09.34.12'},
     {id: 4, img: 'https://randomuser.me/api/portraits/women/35.jpg', name: 'Lori NGUYEN', email: 'lori.nguyen@example.com', phone: '06.26.91.65.49'},
     {id: 5, img: 'https://randomuser.me/api/portraits/women/31.jpg', name: 'Fatma EKICI', email: 'fatma.ekici@example.com', phone: '06.26.91.65.49'},
     {id: 6, img: 'https://randomuser.me/api/portraits/women/76.jpg', name: 'Daniel MACKAY', email: 'daniel.mackay@example.com', phone: '07.51.09.34.12'},
     {id: 7, img: 'https://randomuser.me/api/portraits/women/22.jpg', name: 'Geertruida WACHTMEESTER', email: 'geertruida.wachtmeester@example.com', phone: '06.26.91.65.49'},
     {id: 8, img: 'https://randomuser.me/api/portraits/men/78.jpg', name: 'Oscar WILLIAMS', email: 'oscar.williams@example.com', phone: '07.51.09.34.12'},
     {id: 9, img: 'https://randomuser.me/api/portraits/women/35.jpg', name: 'Lori NGUYEN', email: 'lori.nguyen@example.com', phone: '06.26.91.65.49'},
 ];
 
 const renderItem = ({item}) =>{
     return <CardView user={item} />
 }
 const App = () => {
     return (
         <SafeAreaView style={styles.safeArea}>
             <FlatList data={users} renderItem={renderItem}/>

         </SafeAreaView>
     );
 };
 
 const styles = StyleSheet.create({
     safeArea: {
         flex: 1,
         ...Platform.select({
             ios: {
                 backgroundColor: '#46494C',
             },
             android: {
                 backgroundColor: 0x4C5C68ff,
             },
             default: {
                 backgroundColor: 'rgb(255,255,255)',
             },
         }),
     },
 });
 
 export default App;