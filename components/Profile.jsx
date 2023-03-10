import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";

function Profile() {
  const [favoris, setFavoris] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Profile</Text>
        <Text style={styles.p}>
          Merci d'appuyer sur le bouton pour vous logger !
        </Text>
      </View>

      <View style={styles.main}>
        <TouchableWithoutFeedback
          onPress={() =>
            alert(
              "C'est une fausse page... Mais elle me sert à faire une blague mais surtout à remercier mes collègues Alain & Alex pour le développement de cette application"
            )
          }
        >
          <Image
            source={{
              uri: "https://img.freepik.com/vecteurs-libre/conception-modele-page-connexion-au-site-web_1017-30785.jpg",
            }}
            style={{
              height: Dimensions.get("window").height * 0.4,
              width: Dimensions.get("window").width * 0.85,
              borderRadius: 10,
            }}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  h1: {
    fontSize: 32,
    marginBottom: 16,
  },
  p: {
    paddingHorizontal: 24,
  },
  main: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    padding: 32,
    flex: 0.3,
  },
});
