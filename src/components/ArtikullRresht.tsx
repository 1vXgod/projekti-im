import { Link } from "expo-router";
import { Pressable, Text, StyleSheet } from "react-native";

import type { Artikull } from "@/data/artikujt";

type ArtikullRreshtProps = {
  artikull: Artikull;
};

// Një rresht i listës: i gjithë rreshti është link drejt ekranit të detajeve.
export default function ArtikullRresht({ artikull }: ArtikullRreshtProps) {
  return (
    <Link href={`/artikull/${artikull.id}`} asChild>
      <Pressable
        style={({ pressed }) => [styles.rreshti, pressed && styles.shtypur]}
      >
        <Text style={styles.titulli}>{artikull.titull}</Text>
        <Text style={styles.info}>
          {artikull.cmimi} € · {artikull.kohezgjatja} min
        </Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  rreshti: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#f2f4f7",
  },
  shtypur: {
    opacity: 0.6,
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
