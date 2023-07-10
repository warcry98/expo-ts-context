import React from "react";
import { Button, StyleSheet, View } from "react-native";

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})

const SignIn: React.FC = (): React.ReactElement => {

  return (
    <View style={Styles.container}>
      <Button title="Sign In" onPress={() => {}}/>
    </View>
  )
}

export default SignIn