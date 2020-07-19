import React from 'react';
import {View, StatusBar} from 'react-native';

import Constants from 'expo-constants';
import {Colors} from './Utils/colors';
import {NotificationHelper} from './Utils/helper';
import StackNav from './components/stacks';
import Loading from './components/loading';
import StoreContextProvider from './reducers/store-context';

const App = () => {
  console.log('[App]: init');

  NotificationHelper.setLocalNotification();

  return (
    <StoreContextProvider>
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: Colors.thirdColor,
            height: Constants.statusBarHeight,
          }}>
          <StatusBar translucent backgroundColor={Colors.thirdColor} barStyle="light-content" />
        </View>
        <Loading>
          <StackNav />
        </Loading>
      </View>
    </StoreContextProvider>
  );
};

export default App;
