import React from 'react';
import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PortadaScreen from './screens/PortadaScreen';
import AboutMe from './screens/AboutMeScreen';
// import MomentosScreen from './screens/MomentosScreen';
// import AcercaDeScreen from './screens/AcercaDeScreen';
// import EnMiVidaScreen from './screens/EnMiVidaScreen';
// import MomentDetailScreen from './screens/MomentosDetailScreen'
// import ContratameScreen from './screens/ContratameScreen';

export type RootStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={PortadaScreen} options={{headerShown: false}}/>
        <Stack.Screen name="AboutMe" component={AboutMe} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({});

export default App;