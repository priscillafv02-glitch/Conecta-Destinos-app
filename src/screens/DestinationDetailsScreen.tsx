import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FeatureStrip } from "../components/FeatureStrip";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { destinations } from "../data/destinations";
import { colors } from "../theme/colors";
import { RootStackParamList } from "../types/navigation";
import { formatCurrency, formatRating } from "../utils/format";

type DetailsProps = NativeStackScreenProps<RootStackParamList, "DestinationDetails">;

export function DestinationDetailsScreen({ navigation, route }: DetailsProps) {
  const destination = destinations.find((item) => item.id === route.params.destinationId) ?? destinations[0];
  const [selectedImage, setSelectedImage] = React.useState(destination.gallery[0]);

  function addTrip() {
    navigation.navigate("Payment", { destinationId: destination.id });
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContent}>
      <Header active="Destinations" navigation={navigation} />

      <View style={styles.content}>
        <Text style={styles.breadcrumb}>Inicio &gt; Destinos &gt; {destination.name}</Text>
        <Text style={styles.title}>
          {destination.name}, {destination.country}
        </Text>
        <Text style={styles.rating}>
          {formatRating(destination.rating)} {destination.rating.toFixed(1)} ({destination.reviews} avaliacoes)
        </Text>

        <View style={styles.mainGrid}>
          <View style={styles.gallery}>
            <Image source={{ uri: selectedImage }} style={styles.mainImage} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.thumbRow}>
              {destination.gallery.map((image) => (
                <TouchableOpacity
                  key={image}
                  activeOpacity={0.8}
                  onPress={() => setSelectedImage(image)}
                  style={[styles.thumbButton, selectedImage === image && styles.thumbButtonActive]}
                >
                  <Image source={{ uri: image }} style={styles.thumbImage} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.pricePanel}>
            <Text style={styles.panelSmall}>A partir de</Text>
            <Text style={styles.price}>{formatCurrency(destination.price)}</Text>
            <Text style={styles.perPerson}>por pessoa</Text>
            <View style={styles.tagList}>
              {destination.tags.map((tag) => (
                <Text key={tag} style={styles.tag}>
                  {tag}
                </Text>
              ))}
            </View>
            <TouchableOpacity style={styles.reserveButton} activeOpacity={0.8} onPress={addTrip}>
              <Text style={styles.reserveButtonText}>Pagar agora</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.8} onPress={() => navigation.navigate("About")}>
              <Text style={styles.secondaryButtonText}>Falar com especialista</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.infoGrid}>
          <View style={styles.infoPanel}>
            <Text style={styles.sectionTitle}>Sobre o destino</Text>
            <Text style={styles.paragraph}>{destination.description}</Text>

            <Text style={styles.sectionTitle}>O que esta incluso</Text>
            {destination.includes.map((item) => (
              <Text key={item} style={styles.checkItem}>
                - {item}
              </Text>
            ))}
          </View>

          <View style={styles.infoPanel}>
            <Text style={styles.sectionTitle}>Roteiro sugerido</Text>
            {destination.itinerary.map((item, index) => (
              <View key={item} style={styles.dayRow}>
                <Text style={styles.dayBadge}>Dia {index + 1}</Text>
                <Text style={styles.dayText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <FeatureStrip />
      </View>

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.soft,
    flex: 1
  },
  scrollContent: {
    backgroundColor: colors.soft
  },
  content: {
    alignSelf: "center",
    maxWidth: 1120,
    padding: 16,
    width: "100%"
  },
  breadcrumb: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "700",
    marginTop: 4
  },
  title: {
    color: colors.ink,
    fontSize: 30,
    fontWeight: "900",
    marginTop: 8
  },
  rating: {
    color: colors.gold,
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 14,
    marginTop: 6
  },
  mainGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14
  },
  gallery: {
    flex: 2,
    minWidth: 300
  },
  mainImage: {
    aspectRatio: 1.55,
    backgroundColor: colors.blue100,
    borderRadius: 8,
    width: "100%"
  },
  thumbRow: {
    gap: 8,
    paddingTop: 10
  },
  thumbButton: {
    borderColor: colors.line,
    borderRadius: 6,
    borderWidth: 2,
    overflow: "hidden"
  },
  thumbButtonActive: {
    borderColor: colors.gold
  },
  thumbImage: {
    height: 68,
    width: 92
  },
  pricePanel: {
    backgroundColor: colors.paper,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    minWidth: 260,
    padding: 18
  },
  panelSmall: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "800",
    textTransform: "uppercase"
  },
  price: {
    color: colors.ink,
    fontSize: 32,
    fontWeight: "900",
    marginTop: 4
  },
  perPerson: {
    color: colors.muted,
    fontSize: 12
  },
  tagList: {
    gap: 8,
    marginVertical: 16
  },
  tag: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: "800"
  },
  reserveButton: {
    alignItems: "center",
    backgroundColor: colors.gold,
    borderRadius: 6,
    paddingVertical: 13
  },
  reserveButtonText: {
    color: colors.blue900,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  secondaryButton: {
    alignItems: "center",
    borderColor: colors.blue700,
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 10,
    paddingVertical: 12
  },
  secondaryButtonText: {
    color: colors.blue700,
    fontWeight: "900"
  },
  infoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,
    marginTop: 16
  },
  infoPanel: {
    backgroundColor: colors.paper,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    minWidth: 300,
    padding: 16
  },
  sectionTitle: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 10,
    marginTop: 4
  },
  paragraph: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 14
  },
  checkItem: {
    color: colors.green,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 24
  },
  dayRow: {
    alignItems: "center",
    borderBottomColor: colors.line,
    borderBottomWidth: 1,
    flexDirection: "row",
    gap: 12,
    paddingVertical: 10
  },
  dayBadge: {
    backgroundColor: colors.blue100,
    borderRadius: 5,
    color: colors.blue900,
    fontSize: 12,
    fontWeight: "900",
    paddingHorizontal: 8,
    paddingVertical: 6
  },
  dayText: {
    color: colors.ink,
    flex: 1,
    fontSize: 13,
    fontWeight: "700"
  }
});
