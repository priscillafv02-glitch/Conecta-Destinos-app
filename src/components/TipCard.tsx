import { StyleSheet, Text, View } from "react-native";
import { TravelTip } from "../data/travelTips";
import { colors } from "../theme/colors";

type TipCardProps = {
  tip: TravelTip;
};

export function TipCard({ tip }: TipCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{tip.title}</Text>
      <Text style={styles.description}>{tip.description}</Text>
      <View style={styles.list}>
        {tip.items.map((item) => (
          <Text key={item} style={styles.item}>
            - {item}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.paper,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    minWidth: 260,
    padding: 16
  },
  title: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: "900"
  },
  description: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 6
  },
  list: {
    gap: 6,
    marginTop: 12
  },
  item: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 21
  }
});
