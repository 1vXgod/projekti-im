import { Text, StyleSheet } from "react-native";

type PershendetjeProps = {
  emri: string;
};

export default function Pershendetje({ emri }: PershendetjeProps) {
  return <Text style={styles.teksti}>Përshëndetje, {emri}!</Text>;
}

const styles = StyleSheet.create({
  teksti: {
    fontSize: 24,
  },
});
