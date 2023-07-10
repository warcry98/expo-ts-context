import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { useAuth } from "../../contexts/auth";

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})

const SignInScreen: React.FC = (): React.ReactElement => {
  const {signIn} = useAuth()

  function handleSignIn() {
    signIn()
  }

  return (
    <View style={Styles.container}>
      <Button title="Sign In" onPress={handleSignIn}/>
    </View>
  )
}

export default SignInScreen