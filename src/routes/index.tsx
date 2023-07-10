import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useAuth } from "../contexts/auth";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Routes: React.FC = () => {
  const {signed, loading} = useAuth()

  if (loading) {
    return (
      <View style={Styles.container}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    )
  }
  return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes