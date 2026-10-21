import { Link, Stack, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

import { artikujt } from "@/data/artikujt";

export default function ArtikullDetaje() {
  // Emri i skedarit [id] do të thotë që pjesa e adresës pas /artikull/ vjen këtu si "id".
  const { id } = useLocalSearchParams<{ id: string }>();
  const artikulli = artikujt.find((a) => a.id === id);

  // Roja: nëse id nuk ekziston (p.sh. /artikull/x99), nuk vazhdojmë më poshtë.
  if (!artikulli) {
    return (
      <View style={styles.qendra}>
        <Stack.Screen options={{ title: "Nuk u gjet" }} />
        <Text style={styles.titulli}>Artikulli nuk u gjet</Text>
        <Link href="/" dismissTo style={styles.linku}>
          Kthehu te lista
        </Link>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: artikulli.titull }} />
      <Text style={styles.titulli}>{artikulli.titull}</Text>
      <Text style={styles.pershkrimi}>{artikulli.pershkrim}</Text>
      <Text style={styles.fusha}>Çmimi: {artikulli.cmimi} €</Text>
      <Text style={styles.fusha}>Kohëzgjatja: {artikulli.kohezgjatja} minuta</Text>
      <Text style={styles.id}>ID: {artikulli.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  qendra: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  titulli: {
    fontSize: 24,
    fontWeight: "600",
  },
  pershkrimi: {
    fontSize: 16,
    lineHeight: 22,
  },
  fusha: {
    fontSize: 16,
  },
  id: {
    fontSize: 14,
    color: "#888",
  },
  linku: {
    fontSize: 16,
    color: "#208AEF",
  },
});
