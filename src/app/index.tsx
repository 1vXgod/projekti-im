import { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

import Pershendetje from "@/components/Pershendetje";

export default function Index() {
  // React Compiler është aktiv në app.json; e çaktivizojmë për këtë ekran
  // që shembulli me "let" të sillet ashtu siç e shpjegojmë.
  "use no memo";

  // Variabël e zakonshme: krijohet nga e para (me 0) në çdo rivizatim.
  let numriLet = 0;

  // Gjendje: React e mban vlerën mes rivizatimeve.
  const [numri, setNumri] = useState(0);

  function rritLet() {
    numriLet = numriLet + 1;
    console.log("numriLet =", numriLet);
  }

  function rritState() {
    setNumri((n) => n + 1);
  }

  return (
    <View style={styles.container}>
      <Pershendetje emri="Arlind" />

      <Text style={styles.teksti}>numriLet: {numriLet}</Text>
      <Button title="Rrit let" onPress={rritLet} />

      <Text style={styles.teksti}>numri (useState): {numri}</Text>
      <Button title="Rrit useState" onPress={rritState} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  teksti: {
    fontSize: 18,
  },
});
