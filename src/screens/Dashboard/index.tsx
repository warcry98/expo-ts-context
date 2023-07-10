import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../contexts/auth";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Dashboard: React.FC = () => {
  const {user, signOut} = useAuth()

  function handleSignOut() {
    signOut()
  }
  return (
    <View style={Styles.container}>
      <Text>{user?.name}</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  )
}

export default Dashboard