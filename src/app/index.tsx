import { Stack } from "expo-router";
import { FlatList, StyleSheet } from "react-native";

import ArtikullRresht from "@/components/ArtikullRresht";
import Pershendetje from "@/components/Pershendetje";
import { artikujt } from "@/data/artikujt";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: "Servise klimash" }} />
      <FlatList
        data={artikujt}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ArtikullRresht artikull={item} />}
        ListHeaderComponent={<Pershendetje emri="Arlind" />}
        contentContainerStyle={styles.lista}
      />
    </>
  );
}

const styles = StyleSheet.create({
  lista: {
    padding: 16,
    gap: 12,
  },
});
