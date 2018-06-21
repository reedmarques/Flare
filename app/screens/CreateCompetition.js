import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import CreateCompetitionForm from '../components/CreateCompetitionForm';
import * as firebase from 'firebase';
import 'firebase/firestore';
import FBSDK, {LoginManager, AccessToken} from 'react-native-fbsdk';

export default class CreateCompetition extends Component {

  state={
    loading:false,
  }

  fbAuth = async () => {

  }

  componentWillMount(){
    
  }

  switchNavigators(){
    this.props.navigation.navigate("SignedIn")
  }

  render() {
    const {type} = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        {/* <StatusBar barStyle="light-content"
        /> */}
        <View style={styles.logoContainer}>
          <Text style={styles.title}>
            Create Competition
          </Text>
        </View>
        {this.state.loading && <ActivityIndicator
          size='large' color='#f92222'/>}
        <View style={styles.formContainer}>
          <CreateCompetitionForm
            navigation={this.props.navigation}
            type={type}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#2c3e50',
    justifyContent:'center'
    // padding:20
  },
  formContainer:{
    // paddingVertical:200,
    alignItems:'center'
  },
  logoContainer:{
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center',
    paddingVertical:20,
  },
  logo:{
    width:140,
    height:140,
  },
  title: {
    // flex:1,
    color:'white',
    marginTop:10,
    justifyContent:'center',
    opacity:1
  },
  fbContainer:{
    // backgroundColor:'#2980b9',
    // marginBottom:10,
    // borderRadius:20,
    // width:200,
    marginBottom:10,
    // alignItems:'center',
    // height:200
  },
  title:{
    fontSize:30,
    color:'#ef4836',
  }

});