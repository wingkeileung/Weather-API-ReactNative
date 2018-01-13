import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>
            <TextInput style={styles.TextInput} placeholder='Enter City' />
          </Text>
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.temperature}>
              12
            </Text>
          </View>  
          <View>
            <Text style={styles.city}>
              City Name
            </Text>
          </View>  
          <View>
            <Text style={styles.country}>
              Country Name
            </Text>
          </View>  
        </View>
        <View style={styles.footer}>
          <Text>
            footer
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: '100%',
  },
  content: {
    flex: 3,
    backgroundColor: 'green',
    width: '100%',
  },
  footer: {
    flex: 2,
    backgroundColor: 'blue',
    width: '100%',
  },
  TextInput: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'gray',
  },
  temperature: {
    fontSize: 50,
    color: 'black',
    paddingTop: 50,
    paddingLeft: 30,
  },
  city: {
    paddingTop: 30,
    paddingBottom: 50,
    color: 'black',
    fontSize: 25,
    paddingLeft: 30,
  },
  country: {
    paddingTop: 10,
    paddingLeft: 30,
    fontSize: 20,
  }
});
