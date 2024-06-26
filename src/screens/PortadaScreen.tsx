import React from 'react';
import { View, Text, StyleSheet, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';

function PortadaScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/toolbox.png')} style={styles.imageStyles} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Characters')}>
            <Text style={styles.buttonText}>Gender Predictor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Moments')}>
            <Text style={styles.buttonText}>Age Guesser</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
            <Text style={styles.buttonText}>College Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InMyLife')}>
            <Text style={styles.buttonText}>DR Weather</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InMyLife')}>
            <Text style={styles.buttonText}>WordPress Site</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AboutMe')}>
            <Text style={styles.buttonText}>About Me</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  image: {
    flex: 1
  },
  buttonContainer: {
    marginTop: 5
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    marginHorizontal: 'auto',
    marginVertical: 5,
    height: 80,
    width: 300,
    color: '#FFFFFF',
    borderRadius: 30
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: '900'
  },
  imageStyles: {
    marginHorizontal: 'auto',
    marginVertical: -15,
    maxHeight: 200,
    maxWidth: 300
  }
});

export default PortadaScreen;
