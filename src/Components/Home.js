import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';

  import axios from 'axios'

  import Searchinput from './Searchinput'

  class Home extends Component {
      constructor(props) {
          super(props);
          this.state = {
              cityName: '',
              citylist: {},
              cityupdated: false
            }
      }
      cityChange(){
        //   console.log(this.state.cityName)
        var  citystore = this.state.cityName
        console.log(citystore)
        var query = 'http://api.openweathermap.org/data/2.5/weather?q='+ citystore +'&APPID=a2eda3443101339b941386cf70f74eff'
        axios.get(query)
        .then((response) =>{
            var data = response.data
            console.log(data)
            if(data){
                this.setState({
                    citylist: data,
                    cityupdated: true
                })
            }
        }).catch((error) =>{
            console.log("invalid city")
        })
      }
      
      


      render() { 
        var cityHold = this.state.cityName
          return ( 
              <View>
              <View style = {{
                  justifyContent: 'center',
                  alignItems: 'center'
              }}>
                <Text>Please enter the city name</Text>
              </View>
              <Searchinput 
            //   value = {this.state.cityName}
            //   onchangeCity = {this.cityChange.bind(this)}
              onchangecity = {(cityName)=>this.setState({cityName})}
              city = {this.cityChange.bind(this)}
              />
              <Text>{this.state.citylist.name}</Text>
              <Text>{this.state.citylist.sys.country}</Text>
              <Text>{this.state.citylist.visibility}</Text>
              <Text>{this.state.citylist.weather[0].description}</Text>
              </View>
           )
      }
  }
   
  export default Home;