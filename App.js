import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import axios from "axios";

const App = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => {
        setCocktails(response.data.drinks);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Liste des cocktails:</Text>
      {cocktails.map((cocktail) => (
        <Text key={cocktail.idDrink}>{cocktail.strDrink}</Text>
      ))}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
