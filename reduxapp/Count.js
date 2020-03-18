import React from 'react';
import {Button,View,Text,SafeAreaView} from 'react-native';
import { connect } from 'react-redux';
class Count extends React.Component{
  render(){
   return (
   <SafeAreaView>
   <Button onPress={()=>this.props.increment()} title="Increment">Increment</Button>
   <Button onPress={()=>this.props.decrement()} title="Decrement">Decrement</Button>
    <Text >{this.props.count}</Text>
   </SafeAreaView> 
   );     
  }  
}


function mapStateToProps(state) {
    return {
      count:state 
    }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Count)