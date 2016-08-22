# react-native-first-sample

<h3><b>Introduction</b></h3>

An example of managing list items with fake data. This example includes:
- Manage Views with Navigator

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


- Using component <a href='https://facebook.github.io/react-native/docs/props.html'>props</a> and <a href='https://facebook.github.io/react-native/docs/state.html'>states</a>

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
```ruby
  let personView = this.state.data.map(function(row, i){
  	return <PersonItemView avatar={row.Avatar} />
  });
```


- Local data with SQLite
- Simple animation on component
- Using <a href='https://facebook.github.io/react-native/docs/refreshcontrol.html'><b>RefreshControl</b></a> effect in automatically loading more data when scrolling to the end of the list
- Separate style-object from component code and using multiple styles in component
