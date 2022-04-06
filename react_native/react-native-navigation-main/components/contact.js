import React from "react";
import {Text} from 'react-native';

const Contact = ({navigation, route}) => {
    
    return (
        <view style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>Je suis dans contact</Text>
            
        </view>
    );
};
export default Contact;