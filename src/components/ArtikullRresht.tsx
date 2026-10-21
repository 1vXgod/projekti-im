import { View, Text, StyleSheet } from "react-native";

import type { Artikull } from "@/data/artikujt";

type ArtikullRreshtProps = {
  artikull: Artikull;
};

// Një rresht i listës me titullin, çmimin dhe kohëzgjatjen e servisit.
export default function ArtikullRresht({ artikull }: ArtikullRreshtProps) {
  return (
    <View style={styles.rreshti}>
      <Text style={styles.titulli}>{artikull.titull}</Text>
      <Text style={styles.info}>
        {artikull.cmimi} € · {artikull.kohezgjatja} min
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rreshti: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#f2f4f7",
  },
  titulli: {
    fontSize: 18,
    fontWeight: "600",
  },
  info: {
    marginTop: 4,
    fontSize: 14,
    color: "#555",
  },
});
