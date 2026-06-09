import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { DestinationCard } from "../components/DestinationCard";
import { FeatureStrip } from "../components/FeatureStrip";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { destinations } from "../data/destinations";
import { colors } from "../theme/colors";
import { Destination } from "../types/destination";
import { RootStackParamList } from "../types/navigation";
import { formatCurrency } from "../utils/format";

type DestinationsProps = NativeStackScreenProps<RootStackParamList, "Destinations">;

const regions = ["Todos", "Europa", "America do Norte", "America do Sul", "Asia", "Oceania"];

export function DestinationsScreen({ navigation }: DestinationsProps) {
  const [selectedRegion, setSelectedRegion] = React.useState("Todos");
  const [selectedDestination, setSelectedDestination] = React.useState<Destination | null>(null);
  const [tripCount, setTripCount] = React.useState(0);
  const { width } = useWindowDimensions();
  const columns = width >= 920 ? 3 : width >= 620 ? 2 : 1;

  const filteredDestinations =
    selectedRegion === "Todos" ? destinations : destinations.filter((item) => item.region === selectedRegion);

  function selectRegion(region: string) {
    setSelectedRegion(region);
    setSelectedDestination(null);
  }

  function selectDestination(destination: Destination) {
    setSelectedDestination(destination);
    setTripCount((current) => current + 1);
  }

  return (
    <View style={styles.screen}>
      <Header active="Destinations" navigation={navigation} />

      <FlatList
        key={columns}
        data={filteredDestinations}
        keyExtractor={(item) => item.id}
        numColumns={columns}
        columnWrapperStyle={columns > 1 ? styles.columnWrapper : undefined}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.content}>
            <Text style={styles.title}>Destinos</Text>
            <Text style={styles.subtitle}>Escolha o destino ideal para sua proxima viagem.</Text>

            <View style={styles.toolbar}>
              <View style={styles.filterBox}>
                <Text style={styles.filterTitle}>Filtrar por regiao</Text>
                <View style={styles.chipRow}>
                  {regions.map((region) => (
                    <Pressable
                      key={region}
                      onPress={() => selectRegion(region)}
                      style={[styles.chip, selectedRegion === region && styles.chipActive]}
                    >
                      <Text style={[styles.chipText, selectedRegion === region && styles.chipTextActive]}>{region}</Text>
                    </Pressable>
                  ))}
                </View>
              </View>

              <TouchableOpacity
                style={[styles.addButton, !selectedDestination && styles.addButtonMuted]}
                activeOpacity={0.8}
                disabled={!selectedDestination}
                onPress={() => selectedDestination && navigation.navigate("Payment", { destinationId: selectedDestination.id })}
              >
                <Text style={styles.addButtonText}>Pagar viagem</Text>
                <Text style={styles.addButtonCount}>{tripCount} no planejamento</Text>
              </TouchableOpacity>
            </View>

            {selectedDestination ? (
              <View style={styles.selectedPanel}>
                <Image source={{ uri: selectedDestination.image }} style={styles.selectedImage} />
                <View style={styles.selectedInfo}>
                  <Text style={styles.selectedLabel}>Destino selecionado</Text>
                  <Text style={styles.selectedTitle}>
                    {selectedDestination.name}, {selectedDestination.country}
                  </Text>
                  <Text style={styles.selectedMeta}>
                    {selectedDestination.nights} noites - {selectedDestination.tags.join(" - ")}
                  </Text>
                </View>
                <View style={styles.selectedPriceBox}>
                  <Text style={styles.selectedSmall}>Valor do pacote</Text>
                  <Text style={styles.selectedPrice}>{formatCurrency(selectedDestination.price)}</Text>
                  <View style={styles.selectedActions}>
                    <TouchableOpacity
                      style={styles.outlineButton}
                      activeOpacity={0.8}
                      onPress={() => navigation.navigate("DestinationDetails", { destinationId: selectedDestination.id })}
                    >
                      <Text style={styles.outlineButtonText}>Detalhes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.payButton}
                      activeOpacity={0.8}
                      onPress={() => navigation.navigate("Payment", { destinationId: selectedDestination.id })}
                    >
                      <Text style={styles.payButtonText}>Pagamento</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ) : (
              <View style={styles.emptySelectedPanel}>
                <Text style={styles.emptySelectedTitle}>Selecione um destino</Text>
                <Text style={styles.emptySelectedText}>Toque em um card para abrir aqui o resumo com valor e acesso ao pagamento ficticio.</Text>
              </View>
            )}
          </View>
        }
        renderItem={({ item }) => (
          <View style={[styles.cardSlot, selectedDestination?.id === item.id && styles.cardSlotSelected]}>
            <DestinationCard destination={item} actionLabel="Selecionar" onPress={() => selectDestination(item)} />
          </View>
        )}
        ListFooterComponent={
          <View style={styles.footerArea}>
            <FeatureStrip />
            <Footer />
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.soft,
    flex: 1
  },
  listContent: {
    alignSelf: "center",
    maxWidth: 1120,
    padding: 16,
    width: "100%"
  },
  content: {
    width: "100%"
  },
  title: {
    color: colors.ink,
    fontSize: 30,
    fontWeight: "900",
    marginTop: 6
  },
  subtitle: {
    color: colors.muted,
    fontSize: 14,
    marginTop: 4
  },
  toolbar: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginVertical: 18
  },
  filterBox: {
    backgroundColor: colors.paper,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    minWidth: 260,
    padding: 14
  },
  filterTitle: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: "900",
    marginBottom: 10
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8
  },
  chip: {
    borderColor: colors.line,
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  chipActive: {
    backgroundColor: colors.blue900,
    borderColor: colors.blue900
  },
  chipText: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "800"
  },
  chipTextActive: {
    color: colors.paper
  },
  addButton: {
    backgroundColor: colors.gold,
    borderRadius: 8,
    justifyContent: "center",
    minWidth: 210,
    paddingHorizontal: 18,
    paddingVertical: 14
  },
  addButtonMuted: {
    backgroundColor: "#d4dce8"
  },
  addButtonText: {
    color: colors.blue900,
    fontSize: 16,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  addButtonCount: {
    color: colors.blue900,
    fontSize: 12,
    fontWeight: "700",
    marginTop: 4
  },
  columnWrapper: {
    gap: 12
  },
  cardSlot: {
    flex: 1,
    marginBottom: 12
  },
  cardSlotSelected: {
    backgroundColor: colors.blue100,
    borderColor: colors.gold,
    borderRadius: 10,
    borderWidth: 2,
    padding: 3
  },
  selectedPanel: {
    alignItems: "center",
    backgroundColor: colors.paper,
    borderColor: colors.gold,
    borderRadius: 8,
    borderWidth: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,
    marginBottom: 18,
    padding: 12
  },
  selectedImage: {
    borderRadius: 6,
    height: 96,
    width: 138
  },
  selectedInfo: {
    flex: 1,
    minWidth: 220
  },
  selectedLabel: {
    color: colors.goldDark,
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  selectedTitle: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: "900",
    marginTop: 4
  },
  selectedMeta: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 20,
    marginTop: 6
  },
  selectedPriceBox: {
    minWidth: 230
  },
  selectedSmall: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "800"
  },
  selectedPrice: {
    color: colors.blue900,
    fontSize: 26,
    fontWeight: "900",
    marginTop: 2
  },
  selectedActions: {
    flexDirection: "row",
    gap: 8,
    marginTop: 10
  },
  outlineButton: {
    alignItems: "center",
    borderColor: colors.blue700,
    borderRadius: 6,
    borderWidth: 1,
    flex: 1,
    paddingVertical: 10
  },
  outlineButtonText: {
    color: colors.blue700,
    fontSize: 12,
    fontWeight: "900"
  },
  payButton: {
    alignItems: "center",
    backgroundColor: colors.gold,
    borderRadius: 6,
    flex: 1,
    paddingVertical: 10
  },
  payButtonText: {
    color: colors.blue900,
    fontSize: 12,
    fontWeight: "900"
  },
  emptySelectedPanel: {
    backgroundColor: colors.blue100,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 18,
    padding: 14
  },
  emptySelectedTitle: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: "900"
  },
  emptySelectedText: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 4
  },
  footerArea: {
    marginTop: 8
  }
});
