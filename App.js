import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
  return (
      <AppContainer/>
   
  );
}
}
const TabNavigator = createBottomTabNavigator({
  Write:{screen:WriteStoryScreen},
  Read:{screen:ReadStoryScreen},
},
{
dafaultNavigationOptions:({navigation}) =>({
  tabBarIcon:() => {
    const routeName = navigation.state.routeName;
  console.log(routeName)
if(routeName ==="Write"){
 return (
   <Image
    source={require("./assets/write.png")}
    style={{width:40,height:40}}
   /> 
 )

}
else if(routeName==="Read"){
return(
  <Image
   source={require("./assets/read.png")}
   style={{width:40,height:40}}
   /> )
}
} 
})
}
);
const AppContainer = createAppContainer(TabNavigator)