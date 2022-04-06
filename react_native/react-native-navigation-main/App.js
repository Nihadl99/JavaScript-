/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import Contact from './components/contact';

const Stack = createNativeStackNavigator();

const App = () => {

    const scheme = useColorScheme();
    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack.Navigator>
                <Stack.Screen name="Home" 
                              component={HomeScreen}
                              options={{
                                title: 'home screen',
                                headerTitleAlign: 'center',
                           }}
                />
                <Stack.Screen name="Contact" component={Contact} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
