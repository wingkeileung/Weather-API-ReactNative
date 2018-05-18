import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import axios from 'axios';
import moment from 'moment';

const images ={
  clear: 'http://ayay.co.uk/mobiles/weather/strange/northern-lights.jpg',
  clouds: 'https://i.pinimg.com/736x/54/59/d7/5459d741279e8d72661990f52774473f--cell-phone-wallpapers-gif-photos.jpg'
}


export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      temp: '',
      windspeed: '',
      pressure: '',
      city: '',
      weather: '',
      country: '',
      minTemp: ''
    }
  }
  fetch = () => {
    this.fetchData(this.state.city)
  }

  fetchData = (city) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=7f5f28e714c792bf94b601027356e4b0&units=metric'
    axios.get(url)
    .then(response => {
      console.log(response.data)
      this.setState({
        temp: response.data.main.temp, 
        windSpeed: response.data.wind.speed, pressure: response.data.main.pressure, minTemp: response.data.main.temp_min,
        country: response.data.sys.country,
        weather: response.data.weather[0].main
      })
    })
  }

  render() {
    const { city, temp, windSpeed, pressure, minTemp, country, weather } = this.state
    return (
      <View style={styles.container}>
        <Image style={styles.bgImage} 
          source = {{uri: images[weather]}}
        />
        <View style={styles.header}>
          <Text>
            <TextInput style={styles.TextInput} 
            onEndEditing={e => this.fetch()}
            onChangeText={text => this.setState({city: text})}
            />
          </Text>
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.temperature}>
              {Math.round(temp)} C
            </Text>
          </View>  
          <View>
            <Text style={styles.city}>
              {city}
            </Text>
          </View>  
          <View>
            <Text style={styles.country}>
              {country}
            </Text>
          </View>  
        </View>
        <View style={styles.footer}>
          <View sytle={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text style={styles.date}>
            { moment().format('LLLL') }
            </Text>
          </View>
          <View style={styles.footerInfo}>
            <View style={{flex:1}}>
              <Text style={{backgroundColor: 'transparent'}}>
                Pressure
              </Text>
              <Text>
                {pressure} KPa
              </Text>
            </View>
            <View style={{flex:1}}>
              <Text style={{backgroundColor: 'transparent'}}>
                  Wind Speed
              </Text>
              <Text>
                {windSpeed} m/s
              </Text>            
            </View>
            <View style={{flex:1}}>
              <Text style={{backgroundColor: 'transparent'}}>
                Min. Temperature
              </Text>
              <Text>
                {minTemp} C
              </Text>            
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    paddingTop: 50,
    paddingLeft: 30,
    width: '100%',
  },
  content: {
    flex: 3,
    width: '100%',
  },
  footer: {
    flex: 1,
    width: '100%',
  },
  TextInput: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'lightgray',
  },
  temperature: {
    fontSize: 50,
    fontWeight: 'bold',
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
  },
  date: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: 'skyblue', 
    paddingBottom: 20,
    paddingLeft: 30,
  },
  footerInfo: {
    flexDirection: 'row', 
    paddingHorizontal: 20, 
  },
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  }
});
