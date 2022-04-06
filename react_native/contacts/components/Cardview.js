import React, { useReducer } from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const CardView = () => {

    return (
        <View style={styles.card}>
            <Text style={{fontSize: 25, textDecorationLine: 'underline', marginBottom: 10}} >{useReducer.name}</Text>
            <View style={styles.contenu}>
                <Image source={{
                    uri: 'https://randomuser.me/api/portraits/women/57.jpg',
                }} style={{width: 100, height: 100, borderRadius: 10}}/>

                <View>
                    <View style={styles.infos}>
                        <Image source={require('../assets/outline_alternate_email_white_24dp.png')} />
                        <Text style={styles.text}>
                            {useReducer.email}
                        </Text>
                    </View>
                    <View style={styles.infos}>
                        <Image source={require('../assets/outline_phone_iphone_white_24dp.png')} />
                        <Text style={styles.text}>
                            {useReducer.phone}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "rgba(255,255,255, 0.4)",
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255, 0.4)',
        // elevation: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    contenu: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infos: {
        flexDirection: 'row',
        margin: 5,
        padding: 5,
        alignItems: 'center',
    },
    text: {
        padding: 4,
        marginLeft: 3,
        fontSize: 17,
        color: 'white',
    },
});

export default CardView;