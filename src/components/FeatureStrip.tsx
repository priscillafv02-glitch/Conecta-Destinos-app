import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";

const features = [
  { title: "Melhores precos", text: "Compare pacotes com facilidade" },
  { title: "Pagamento seguro", text: "Compra protegida no app" },
  { title: "Atendimento 24/7", text: "Ajuda antes e durante a viagem" },
  { title: "Roteiros prontos", text: "Sugestoes para cada destino" }
];

export function FeatureStrip() {
  return (
    <View style={styles.strip}>
      {features.map((feature) => (
        <View key={feature.title} style={styles.item}>
          <View style={styles.iconDot} />
          <View style={styles.textBox}>
            <Text style={styles.title}>{feature.title}</Text>
            <Text style={styles.text}>{feature.text}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  strip: {
    backgroundColor: colors.paper,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginVertical: 18,
    padding: 14
  },
  item: {
    alignItems: "center",
    flexDirection: "row",
    flexGrow: 1,
    gap: 10,
    minWidth: 160
  },
  iconDot: {
    backgroundColor: colors.blue100,
    borderColor: colors.blue700,
    borderRadius: 18,
    borderWidth: 2,
    height: 36,
    width: 36
  },
  textBox: {
    flex: 1
  },
  title: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: "900"
  },
  text: {
    color: colors.muted,
    fontSize: 11,
    marginTop: 2
  }
});
