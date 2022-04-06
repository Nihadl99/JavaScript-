import React from 'react';
import {Button, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={
            {
                flex: 1, 
                justifyContent:'center',
                alignItems:'center',
            }
        }>

            <Button 
               title="Aller vers Contacts"
               onPress={ () => {
                   navigation.navigate('Contact', {user:"nihad"})
                   }}/>
        </View>
    );
};

export default HomeScreen;
