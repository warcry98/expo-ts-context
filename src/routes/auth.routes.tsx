import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SignInScreen from "../screens/SignIn";

const AuthStack = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
  </AuthStack.Navigator>
)

export default AuthRoutes