# react-native-first-sample

## Introduction

An example of managing list items with fake data. This example includes:
- Manage Views with <a href='https://facebook.github.io/react-native/docs/navigation.html'>Navigator</a>

- Using component <a href='https://facebook.github.io/react-native/docs/props.html'>props</a> and <a href='https://facebook.github.io/react-native/docs/state.html'>states</a>

- Local data with <a href='https://github.com/andpor/react-native-sqlite-storage'>SQLite</a>

- Simple <a href='https://facebook.github.io/react-native/docs/animations.html'>animation<a/> on component

- Using <a href='https://facebook.github.io/react-native/docs/refreshcontrol.html'><b>RefreshControl</b></a>'s effect in automatically loading more data when scrolling to the end of the list

- Separate style-object from component code and using multiple styles in component

<br/>
<br/>
## Screenshots
<p align="center">
  <img src="https://github.com/thetukiet/react-native-first-sample/blob/master/ScreenShots/s1.png" width="270" />
   
  <img src="https://github.com/thetukiet/react-native-first-sample/blob/master/ScreenShots/s2.png" width="270" margin-left="30px"/>  
  <img src="https://github.com/thetukiet/react-native-first-sample/blob/master/ScreenShots/s3.png" width="270" style="margin-left:30px;"/>  
</p>

<br/>
<br/>
## Project structure
```
SAMPLE
  |...
  |--index.android.js
  |--styles.js
  |--lib
      |--localdbHelper.js
      |--loginView.js
      |--mainView.js
      |--personItemView.js
      |--utility.js
  |--Assests
      |--Images
      	   |...
      
```
<br/>
<br/>

## Some sample code
<b>Navigator using</b>

```ruby
  render() {
    return (
      <Navigator
        initialRoute={{id:2 }}
        renderScene={this.renderScenes}
        configureScene={this.configureScenes} />
    );
  }
```

<br/>
<b>States and Props</b><br/>
Declaration
```ruby
  var PersonItemView = React.createClass({
    getInitialState() {           
      return {
  	    id: this.props.id,
        picS:70
	    };
  	},
  	render() {
      return (
        <TouchableOpacity>
            <Image source={{uri: this.props.avatar}}  style={{width: this.state.picS}}/>
        </TouchableOpacity>
      );
    }
  });
```
<br/>
And using
```ruby
  let personView = this.state.data.map(function(row, i){
  	return <PersonItemView avatar={row.Avatar} />
  });
```

<br/>
<br/>
<b>Using RefreshControl</b>
```ruby
var MainView = React.createClass({
   getInitialState() {
       return {
           isRefreshing:false
       };
   },
   
   render() {
      return (
        <View style={styles.container}>
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={this.state.isRefreshing}
                  colors={['#d3d3d3']}
                  progressBackgroundColor="#252525"
                />
              }
            >
            ...
            </ScrollView>
        </View>
     );
  }
```

<br/>
<br/>
<b>Using multiple style objrects</b>

```ruby
var styles = StyleSheet.create({
    avatarImage:{
        marginLeft:10
    }
});

... 

<Image source={{uri: this.props.avatar}}  style={[styles.avatarImage,{width: this.state.picS}]}/>
```

<br/>
<br/>

## References
- <a href='https://facebook.github.io/react-native/docs/getting-started.html'>Facebook React Native Document</a>
- <a href='https://rnplay.org/apps/PxQpag'>Navigator Sample </a>From Author <b>Johnny Snow</b>
- <a href='https://medium.com/@Jpoliachik/react-native-s-layoutanimation-is-awesome-4a4d317afd3e#.co2m4f7rk'>React Native’s LayoutAnimation Article </a>From Author <b>Justin Poliachik</b>

