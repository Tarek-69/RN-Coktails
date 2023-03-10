// import { Image, StyleSheet, Text, View, Dimensions, FlatList, TouchableWithoutFeedback } from "react-native";
// import { useState } from "react";

// function Profile() {


//   const [favoris, setFavoris] = useState([])


//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.h1}>Alain GUILLON</Text>
//         <Text style={styles.p}>
//           Il faut persévérer pour arriver au bout de ses rêves.
//         </Text>
//       </View>

//       <View style={styles.main}>
//         <TouchableWithoutFeedback
//           onPress={ () => alert("Bouhhhhhhhhhh, tu veux devenir mon copain ?") }
//         >
//         <Image
//           source={{
//             uri: "https://images.assetsdelivery.com/compings_v2/drawkman/drawkman2007/drawkman200700312.jpg",
//           }}
//           style={{
//             height: Dimensions.get("window").height * 0.3,
//             width: Dimensions.get("window").width * 0.75,
//           }}
//         />
//         </TouchableWithoutFeedback>
//       </View>

//       <View style={styles.footer}>
//         <Text style={{ fontSize: 24 }}>Liste des favoris</Text>
//         <View style={{ alignItems: "center", justifyContent:"center" }}>
//           { favoris.length > 0 ? (
//               <FlatList data={ favoris } renderItem={ (currentFavoris) => <Text>{ currentFavoris }</Text> } />
//           ) : (
//               <Text style={{ marginVertical: 16, fontSize: 16, color: "white", fontWeight: "bold", backgroundColor: "brown", opacity: 0.6, paddingHorizontal: 16, paddingVertical: 16}}>Désolé aucun favoris pour le moment</Text>
//           )}
//         </View>
//       </View>
//     </View>
//   );
// }

// export default Profile;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     flex: 0.3,
//     alignItems: "center",
//     justifyContent: "center",
//     fontWeight: "bold",
//   },
//   h1: {
//     fontSize: 32,
//     marginBottom: 16
//   },
//   p: {
//     letterSpacing: 2,
//     fontStyle: "italic",
//     paddingHorizontal: 24
//   },
//   main: {
//     flex: 0.4,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   footer: {
//     padding: 32,
//     flex: 0.3,
//   },
// });
