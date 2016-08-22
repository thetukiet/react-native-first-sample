
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  LayoutAnimation,
  View
} from 'react-native';
 
var CustomLayoutSpring = { 
     duration: 500, 
     create: {        
         type: LayoutAnimation.Types.spring,        
         property: LayoutAnimation.Properties.scaleXY,        
         springDamping: 0.9,      }, 
     update: { 
        type: LayoutAnimation.Types.spring, 
        springDamping: 0.9, 
     }, 
}; 

var PersonItemView = React.createClass({
    getInitialState() {           
        return {
    	    id: this.props.id,
            picS:70
  	    };
	},

    componentDidMount(){
        LayoutAnimation.configureNext(CustomLayoutSpring);
    },

    render(){
        let extraStyle = i => {
    	    if((i % 2) == 0) {
      	        return styles.grayBackground
            }
        };

        return (
            <TouchableOpacity style={[styles.itemContainer, extraStyle(this.props.index)]} onPress={this.toggleCmds}>
                <Image source={{uri: this.props.avatar}}  style={[styles.avatarImage,{width: this.state.picS, height: this.state.picS}]}/>
                <Text style={[styles.itemText, styles.colName]}>
                    {this.props.fullName}
                </Text>
                <Text style={[styles.itemText, styles.colPhone]}>
                    {this.props.phoneNumber}
                </Text>
                <Text style={[styles.colCmd]}>
                    {this.props.id}
                </Text>
            </TouchableOpacity>
        );
    },

    toggleCmds(){
        //LayoutAnimation.spring();
        //LayoutAnimation.configureNext(CustomLayoutSpring);
        //this.setState({picS: 70});
    }
});

var styles = StyleSheet.create({
    itemText:{
        marginLeft:10,
        fontSize:15,
        color: 'black',
        textAlign: 'left'
    },
    colName:{
        width:130
    },
    colPhone:{
        width:100
    },
    colCmd:{
        width:40,
        fontSize:15,
        marginLeft:15,
        color: 'blue',
        textAlign: 'right'
    },
    grayBackground:{
        backgroundColor:'#e1e1e1'
    },
    itemContainer:{
        height:80,
        flexDirection:'row',
        alignSelf:'stretch',
        alignItems: 'center',
    },
    avatarImage:{
        marginLeft:10,
        //height:70,
        //width:70
    }
});

module.exports = PersonItemView;