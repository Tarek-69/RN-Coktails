import { View, Text, Image, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import CocktailList from "./CocktailList";

const Detail = () => {
  const route = useRoute();
  console.log("ici route : ");
  console.log(route);
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
      console.log(recipe);
      setCocktail(data.drinks[0]);
    };
    fetchCocktail().then().catch();
  }, [id]);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {cocktail && (
        <>
          <Image
            style={{ width: 200, height: 200 }}
            source={{ uri: `${cocktail.strDrinkThumb}` }}
          />

          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            {cocktail.strDrink}
          </Text>
          <Text>Instructions</Text>
          <Text>{cocktail.strInstructions}</Text>
          <Text>Recipe</Text>
          <Text>{cocktail.strInstructions}</Text>
          <FlatList
            data={recipe}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", marginRight: 5 }}>
                  {item.ingredient}
                </Text>
                <Text>{item.measure}</Text>
              </View>
            )}
          />
        </>
      )}
    </View>
  );
};
export default Detail;
