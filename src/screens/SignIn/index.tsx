import { useState } from "react";

import { Container, Title, Slogan } from "./styles";

import backgroundImg from "../../assets/background.png";

import { GoogleSignin } from "@react-native-google-signin/google-signin";

import { Button } from "../../components/Button";

import { WEB_CLIENT_ID } from "@env";
import { Alert } from "react-native";

GoogleSignin.configure({
  scopes: ["email", "profile"],
  webClientId: WEB_CLIENT_ID,
});

export const SignIn = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function handleGoogleSignIn() {
    try {
      setIsAuthenticating(true);

      const { idToken } = await GoogleSignin.signIn();

      if (idToken) {
      } else {
        Alert.alert(
          "Entrar",
          "Não foi possível conectar-se a sua conta google."
        );
        setIsAuthenticating(false);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Entrar", "Não foi possível conectar-se a sua conta google.");
      setIsAuthenticating(false);
    }
  }

  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>

      <Slogan>Gestão de uso de veículos</Slogan>

      <Button title="Entrar com Google" onPress={handleGoogleSignIn} />
    </Container>
  );
};
