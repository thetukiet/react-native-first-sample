

import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  TextInput,
  Platform,
  UIManager,
  Text,
  Image,  
  RefreshControl,  
  ScrollView,
  TouchableHighlight,
  View
} from 'react-native';

import LocalDbHelper from './localdbHelper';
const dataHelper = LocalDbHelper.getInstance();

var RCTUIManager = require('NativeModules').UIManager;
var PersonItemView = require('./personItemView');
const styles = require('../styles.js')


var scrollView;

var MainView = React.createClass({
    getInitialState() {    
        if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true)
        }

        return {
            data:[],
            instancyData:{},
            isRefreshing:false,
            scrollToNewRecord:false,
            loadMorable:true
        };
	},

    componentWillMount(){
        this.initData();
    },

    logout(){
        Alert.alert( 
            'Logout Confirmation', 
            'You really want to logout?', 
            [ 
                {text: 'Yes', onPress: () => this.props.navigator.push({id: 1,})}, 
                {text: 'No', onPress: () => {}}                 
            ]
        );
    },

  render() {
    let personView = this.state.data.map(function(row, i){
    	return <PersonItemView 
                key={i}
                index={i}
                id={row.ID}
                fullName={row.FullName} 
                phoneNumber={row.PhoneNumber} 
                avatar={row.Avatar} />
    });
// Create, Build, Debug And Deploy A React Native Project

    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={this.logout}>                                            
                <Text style={styles.buttonTextColor}>Logout</Text>
            </TouchableHighlight>
            <View style={styles.topPanel}>                
                <TouchableHighlight style={styles.topButton} onPress={this.addNewRecord}>
                    <View style={styles.buttonView}>
                        <Image source={require('../Assests/Images/add-group.png')} style={styles.iconImage}/>
                        <Text style={styles.buttonText}>Add New Person</Text>
                    </View>
                </TouchableHighlight>
            </View>

            <ScrollView id='person-list' style={styles.personListView} 
            ref={(obj) => { scrollView = obj; }}
            onContentSizeChange={(x,y)=>{
                if(this.state.scrollToNewRecord){
                setTimeout(()=>scrollView.scrollTo({x:0, y:y}),50);
                this.setState({scrollToNewRecord:false});
                }
            }}
            onScroll={this.onScroll}
            contentOffset={{x: 0, y: 80}}
            contentInset={{top: 70, bottom: 80}}
            refreshControl={
                <RefreshControl
                refreshing={this.state.isRefreshing}
                colors={['#d3d3d3']} //#2E64FE #F6CEF5
                progressBackgroundColor="#252525"
                />
            }
            >
            {personView}
            </ScrollView>  
        </View>
    );
  },


  onScroll(event){
    var currentY = event.nativeEvent.contentOffset.y;
    var offsetHeight = event.nativeEvent.layoutMeasurement.height;
    var scrollHeight = event.nativeEvent.contentSize.height;    
    if((currentY + offsetHeight) >= scrollHeight){
      this.setState({isRefreshing: true});
      setTimeout(() => {
        var nextId = this.state.data.length;
        var moreData = dataHelper.getTestPersons(10, nextId);
        for (let i = 0; i < moreData.length; i++) {
            this.state.data.push(moreData[i]);
        }
        this.setState({data: this.state.data, isRefreshing: false});
      },1);
    }
  },

  addNewRecord(){
    this.setState({scrollToNewRecord:true});
    var nextId = this.state.data.length;
    var moreData = dataHelper.getTestPersons(1, nextId);
    for (let i = 0; i < moreData.length; i++) {
        this.state.data.push(moreData[i]);
    }
    this.setState({
      data: this.state.data,
      isRefreshing:false
    });
  },
  
  insertSuccessfull(result){
    if(result.insertId > 0){
      var insertedRow = {
        ID:result.insertId,
        FullName:this.state.instancyData.FullName,
        Avatar:this.state.instancyData.Avatar,
        PhoneNumber: this.state.instancyData.PhoneNumber
      };

      this.state.data.push(insertedRow);
      this.setState({data: this.state.data});
    }
  },

  initData(){
    var testData = dataHelper.getTestPersons(1,0);
    for (let i = 0; i < testData.length; i++) {
        this.state.data.push(testData[i]);
    }
    this.setState({data: this.state.data});
  },

  personRetrieveCallBack(results){
    var len = results.rows.length;
    for (let i = 0; i < len; i++) {
        let row = results.rows.item(i);
        this.state.data.push(row);
    }
    this.setState({data: this.state.data});
  },

  callAlert(message){
    Alert.alert( 
      'React Native Example', 
      message
    );
  }
});

module.exports = MainView;
