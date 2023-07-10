import React, { createContext, useContext, useEffect, useState } from "react";
import { useSnackBar } from "./snack";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../services/api";
import { SignIn } from "../services/auth";

interface User {
  name: string,
  email: string,
}

interface AuthContextData {
  signed: boolean
  user: User | null
  loading: boolean
  signIn(): Promise<void>
  signOut(): void
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = (props: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const {addAlert} = useSnackBar()

  useEffect(() => {
    async function loadStorageData() {
      const storedUser = await AsyncStorage.getItem('@RNAuth:user')
      const storedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storedUser && storedToken) {
        api.defaults.headers.Authorization = `Bearer ${storedToken}`;

        setUser(JSON.parse(storedUser));
      }
      addAlert('Eae');
      setLoading(false);
    }

    loadStorageData()
  }, [addAlert])

  async function signIn() {
    const response = await SignIn()

    setUser(response.user);

    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAuth:token', JSON.stringify(response.token));
    addAlert('Bem vindo');
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
    addAlert('Falou');
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, loading, user, signIn, signOut}}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}