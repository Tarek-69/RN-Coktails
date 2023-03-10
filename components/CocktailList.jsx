import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import axios from "axios";

function CocktailList({ navigation }) {
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktails = async () => {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    return response.data.drinks[0];
  };

  const fetchAllCocktails = async () => {
    const cocktailsData = [];
    for (let i = 0; i < 10; i++) {
      const cocktail = await fetchCocktails();
      cocktailsData.push(cocktail);
    }
    setCocktails(cocktailsData);
  };

  useEffect(() => {
    fetchAllCocktails();
  }, []);

  const renderCocktail = ({ item }) => {
    const { idDrink, strDrink, strDrinkThumb, strCategory } = item;

    const handlePress = () => {
      navigation.navigate("Detail", { id: idDrink });
    };

    return (
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.card}>
          <Image
            source={{ uri: strDrinkThumb }}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardDetails}>
            <Text style={styles.cardTitle}>{strDrink}</Text>
            <Text style={styles.cardCategory}>{strCategory}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cocktails}
        keyExtractor={(item) => item.idDrink}
        renderItem={renderCocktail}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    padding: 16,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 26,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 6,
  },
  cardImage: {
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").width * 0.4,
  },
  cardDetails: {
    padding: 16,
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#DE60CA",
    marginBottom: 8,
  },
  cardCategory: {
    fontSize: 16,
    color: "grey",
  },
});

export default CocktailList;
