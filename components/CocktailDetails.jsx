import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

const Detail = () => {
  const route = useRoute();
  const id = route.params.id;
  const [cocktail, setCocktail] = useState(null);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchCocktail = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      console.log(data);

      const ingredients = Object.keys(data.drinks[0])
        .filter((key) => key.includes("strIngredient"))
        .map((key) => data.drinks[0][key]);
      const measures = Object.keys(data.drinks[0])
        .filter((key) => key.includes("strMeasure"))
        .map((key) => data.drinks[0][key]);
      const newIngredients = ingredients
        .map((ingredient, index) => ({
          ingredient,
          measure: measures[index],
        }))
        .filter(({ ingredient, measure }) => ingredient && measure);
      setRecipe(newIngredients);

      setCocktail(data.drinks[0]);
    };
    fetchCocktail().then().catch();
  }, [id]);
  return (
    <View style={styles.container}>
      {cocktail && (
        <>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: `${cocktail.strDrinkThumb}` }}
            />
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{cocktail.strDrink}</Text>
            <Text style={styles.subtitle}>Instructions</Text>
            <Text style={styles.instructions}>{cocktail.strInstructions}</Text>
            <Text style={styles.subtitle}>Recette</Text>
            <FlatList
              data={recipe}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.recipeItem}>
                  <Text style={styles.measure}>{item.strCategory}</Text>
                  <Text style={styles.ingredient}>{item.ingredient}</Text>
                  <Text style={styles.measure}>{item.measure}</Text>
                  <Text style={styles.measure}>{item.strAlcoholic}</Text>
                  <Text style={styles.measure}>{item.strDrinkThumb}</Text>
                </View>
              )}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 2,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "grey",
    marginTop: 10,
    marginBottom: 5,
  },
  instructions: {
    fontSize: 16,
    color: "#DE60CA",
    fontWeight: "bold",
  },
});

export default Detail;
