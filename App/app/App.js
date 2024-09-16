import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ComplaintScreen from './screens/ComplaintScreen';
import NoticesScreen from './screens/NoticesScreen';
import ReservationScreen from './screens/ReservationScreen';
import VisitorControlScreen from './screens/VisitorControlScreen';
import VisitorAddScreen from './screens/VisitorAddScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import { ThemeProvider } from './screens/ThemeContext';
import SomeComponent from './screens/SomeComponent'; 
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import PaymentsScreen from './screens/PaymentsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Complaint" component={ComplaintScreen} />
          <Stack.Screen name="Notices" component={NoticesScreen} />
          <Stack.Screen name="Reservation" component={ReservationScreen} />
          <Stack.Screen name="VisitorControl" component={VisitorControlScreen} />
          <Stack.Screen name="VisitorAdd" component={VisitorAddScreen} />
          <Stack.Screen name="UserProfile" component={UserProfileScreen} />
          <Stack.Screen name="SomeComponent" component={SomeComponent} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
               <Stack.Screen name="Pagamentos" component={PaymentsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
