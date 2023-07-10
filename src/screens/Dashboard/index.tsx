import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Dashboard: React.FC = () => {
  return (
    <View style={Styles.container}>
      <Text>username</Text>
      <Button title="Sign Out" onPress={() => {}} />
    </View>
  )
}

export default Dashboard