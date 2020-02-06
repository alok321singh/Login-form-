import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';


const { height, width } = Dimensions.get('window')
export default class App extends React.Component {



  render() {
      return (

        <View style={styles1.container1}>
          <View style={{ flexDirection: 'row', marginVertical: 40, paddingTop: 0 }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text style={styles.Textstyle, { color: 'rgb(79,171,186)', fontSize: 35, marginRight: 60 }}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text style={styles.Textstyle, { color: 'rgb(235,243,245)', fontSize: 35, marginLeft: 80 }}>Reg</Text>
            </TouchableOpacity >

          </View>


          <View style={styles1.SectionStyle}>

            <Image source={require('./Images/user.png')} style={styles1.ImageStyle} />
            
            <TextInput
              style={{ flex: 1 }}
              placeholder="Email Id"
              underlineColorAndroid="transparent"
              keyboardType="email-address"
            />

          </View>

          <View style={styles1.SectionStyle}>

            <Image source={require('./Images/pwd.png')} style={styles1.ImageStyle} />

            <TextInput
              style={{ flex: 1 }}
              placeholder="Password"
              underlineColorAndroid="transparent"
              secureTextEntry={true}
            />
            <Text style={{ color: 'rgb(139,198,207)', margin: 20 }}>Forget?</Text>

          </View>


          <TouchableOpacity style={styles1.button}>
            <Text style={styles1.buttonText}> Login </Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', margin: 20 }}>
            <Text > NewUser? </Text>

            <TouchableOpacity  onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={{ color: 'rgb(139,198,207)' }}> Register Now </Text>
            </TouchableOpacity>


          </View>

        </View>



      );
    } 
    }






const styles1 = StyleSheet.create({

  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },

  SectionStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: 'white',
    width: width - 30,
    height: 38,
    borderRadius: 25,
    margin: 10,

  },

  ImageStyle: {
    padding: 10,
    margin: 8,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center'
  },
  button: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,

    justifyContent: 'center',

    backgroundColor: 'rgb(198,110,159)',
    width: width - 20,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 8
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },

});

const styles = StyleSheet.create({
  Textstyle: {
    opacity: 0.1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,


  }

});