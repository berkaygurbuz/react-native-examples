import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './screens/myTabs.js';


export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
