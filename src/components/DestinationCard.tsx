import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../theme/colors";
import { Destination } from "../types/destination";
import { formatCurrency, formatRating } from "../utils/format";

type DestinationCardProps = {
  destination: Destination;
  onPress: () => void;
  compact?: boolean;
  actionLabel?: string;
};

export function DestinationCard({ destination, onPress, compact = false, actionLabel = "Ver detalhes" }: DestinationCardProps) {
  return (
    <TouchableOpacity activeOpacity={0.82} onPress={onPress} style={[styles.card, compact && styles.compactCard]}>
      <Image source={{ uri: destination.image }} style={[styles.image, compact && styles.compactImage]} />
      <View style={styles.body}>
        <Text style={styles.name}>{destination.name}</Text>
        <Text style={styles.country}>{destination.country}</Text>
        <Text style={styles.rating}>
          {formatRating(destination.rating)} <Text style={styles.review}>({destination.reviews})</Text>
        </Text>
        <View style={styles.bottomRow}>
          <View>
            <Text style={styles.small}>A partir de</Text>
            <Text style={styles.price}>{formatCurrency(destination.price)}</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{actionLabel}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.paper,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.08,
    shadowRadius: 10
  },
  compactCard: {
    width: 210
  },
  image: {
    aspectRatio: 1.42,
    backgroundColor: colors.blue100,
    width: "100%"
  },
  compactImage: {
    aspectRatio: 1.7
  },
  body: {
    padding: 12
  },
  name: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: "800"
  },
  country: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "700",
    marginTop: 2
  },
  rating: {
    color: colors.gold,
    fontSize: 13,
    marginTop: 8
  },
  review: {
    color: colors.muted
  },
  bottomRow: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14
  },
  small: {
    color: colors.muted,
    fontSize: 11
  },
  price: {
    color: colors.blue900,
    fontSize: 18,
    fontWeight: "900"
  },
  button: {
    backgroundColor: colors.gold,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8
  },
  buttonText: {
    color: colors.blue900,
    fontSize: 11,
    fontWeight: "900",
    textTransform: "uppercase"
  }
});
