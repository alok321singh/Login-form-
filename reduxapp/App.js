import React from 'react';
import {Provider} from 'react-redux';
import Count from './Count';
import store from './Store'
class App extends React.Component{
  render(){
   return (
   <Provider store={store}>
     <Count/>
   </Provider>
   );     
  }  
}

export default App;