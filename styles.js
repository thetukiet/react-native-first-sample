const React = require('react-native')
const {StyleSheet} = React


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  topPanel: {
    backgroundColor: '#393939',
    height: 50,
    alignSelf: 'stretch'
  },
  topButton: {
    flex: 1,
    height:50,
    alignSelf: 'stretch',
    backgroundColor: '#FF8000',
  },
  buttonText:{
    marginTop:9,
    marginLeft:10,
    alignSelf:'stretch',
    justifyContent:'center',
    fontSize:18,
    color:'white'
  },
    buttonTextColor:{
    marginTop:9,
    marginLeft:10,
    marginBottom:10,
    alignSelf:'stretch',
    justifyContent:'center',
    textAlign:'right',
    fontSize:18,
    color:'#2E64FE'
  },
  iconImage:{
    width: 40,
    height: 40,
  },
  buttonView:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignSelf:'stretch',
    alignItems: 'center',
  },
  personListView:{
    //marginTop:50,
    //height:
    alignSelf:'stretch',
    backgroundColor: 'white'
  }
});

module.exports = styles;