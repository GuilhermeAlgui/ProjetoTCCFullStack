import React, {Component} from 'react';
import {Routes, Route} from './routes';
import App from './pages/Main/App';
import {Provider} from 'react-redux';
import store from './store';
import AsyncStorage from '@react-native-community/async-storage';
import OneSignal from 'react-native-onesignal'; // Import package from node modules

import './config/StatusBarConfig';
import {
  createStackNavigator,
  NavigationStackOptions,
} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

//const screens = {
//App: {
// screen: App,
// navigationOptions: {
//   title: 'Aplicativo',
// headerStyle: {backgroundColor: '#EEAD2D '}
//  },
// },
//};

/** 
const app = () => (
  <Provider store = {store}>
    <Routes />
  </Provider>


);
*/

export default class app extends Component{


  constructor() {
    super();
   
    
    // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
    OneSignal.init("f5ba4d84-9f11-4faf-b97a-57f26da6eae2", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
    OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
    
    // The promptForPushNotifications function code will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step below)
  
     OneSignal.addEventListener('received', this.onReceived);
     OneSignal.addEventListener('opened', this.onOpened);
     OneSignal.addEventListener('ids', this.onIds);
  }
  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }
  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  state = {
    userChecked: false,
    userLogged: false,
  }
  async componentDidMount() {
    const aluno = await AsyncStorage.getItem('Aluno');

    this.setState({
      userChecked: true,
      userLogged: !!aluno, 
    })

  }


  render(){ 

    const {userChecked, userLogged} = this.state;

    if(!userChecked) return null;

    if(userLogged) return <Route/>
    

    return(
      <Routes/>
    );
  }
}


//const navi = createStackNavigator(screens, {
// defaultNavigationOptions: {
//  headerStyle: {backgroundColor: '#EEAD2D'},
// },
//});

//const app = createAppContainer(navi);
//export default app;

//export default App;
