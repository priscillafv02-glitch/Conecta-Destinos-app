import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Alert, FlatList, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { DestinationCard } from "../components/DestinationCard";
import { FeatureStrip } from "../components/FeatureStrip";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { destinations, featuredDestinations, offerDestinations } from "../data/destinations";
import { colors } from "../theme/colors";
import { RootStackParamList } from "../types/navigation";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export function HomeScreen({ navigation }: HomeProps) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContent}>
      <Header active="Home" navigation={navigation} />

      <ImageBackground
        source={{ uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80" }}
        style={styles.hero}
        imageStyle={styles.heroImage}
      >
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>O mundo espera por você!</Text>
          <Text style={styles.heroText}>Destinos organizados, pacotes claros e viagens mais fáceis de planejar.</Text>
          <TouchableOpacity style={styles.heroButton} activeOpacity={0.8} onPress={() => navigation.navigate("Destinations")}>
            <Text style={styles.heroButtonText}>Conferir destinos</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.searchBox}>
          <Text style={styles.searchTitle}>Planeje sua próxima viagem</Text>
          <View style={styles.formRow}>
            <TextInput placeholder="Origem" style={styles.input} placeholderTextColor={colors.muted} />
            <TextInput placeholder="Para onde você vai?" style={styles.input} placeholderTextColor={colors.muted} />
            <TextInput placeholder="Data de ida" style={styles.input} placeholderTextColor={colors.muted} />
            <TouchableOpacity
              style={styles.searchButton}
              activeOpacity={0.8}
              onPress={() => Alert.alert("Busca iniciada", "Veja os destinos disponiveis na proxima tela.")}
            >
              <Text style={styles.searchButtonText}>Buscar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Destinos em destaque</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Destinations")}>
            <Text style={styles.sectionLink}>Ver todos</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          data={featuredDestinations}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
          renderItem={({ item }) => (
            <DestinationCard
              compact
              destination={item}
              onPress={() => navigation.navigate("DestinationDetails", { destinationId: item.id })}
            />
          )}
        />

        <Text style={styles.sectionTitle}>Ofertas especiais</Text>
        <View style={styles.offerGrid}>
          {offerDestinations.map((item) => (
            <View key={item.id} style={styles.offerCard}>
              <Text style={styles.discount}>-{item.oldPrice ? Math.round((1 - item.price / item.oldPrice) * 100) : 10}%</Text>
              <DestinationCard destination={item} onPress={() => navigation.navigate("DestinationDetails", { destinationId: item.id })} />
            </View>
          ))}
        </View>

        <FeatureStrip />
        <Text style={styles.helperText}>
          O app usa navegacao entre telas, cards reutilizaveis, lista com FlatList, formulario simples e layout adaptavel.
        </Text>
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
  hero: {
    minHeight: 300
  },
  heroImage: {
    opacity: 0.92
  },
  heroOverlay: {
    backgroundColor: "rgba(5,47,95,0.46)",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 22,
    paddingVertical: 44
  },
  heroTitle: {
    color: colors.paper,
    fontSize: 34,
    fontWeight: "900",
    maxWidth: 540,
    textTransform: "uppercase"
  },
  heroText: {
    color: colors.paper,
    fontSize: 16,
    lineHeight: 23,
    marginTop: 12,
    maxWidth: 520
  },
  heroButton: {
    alignSelf: "flex-start",
    backgroundColor: colors.gold,
    borderRadius: 6,
    marginTop: 20,
    paddingHorizontal: 18,
    paddingVertical: 12
  },
  heroButtonText: {
    color: colors.blue900,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  content: {
    alignSelf: "center",
    maxWidth: 1100,
    padding: 16,
    width: "100%"
  },
  searchBox: {
    backgroundColor: colors.paper,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: -34,
    padding: 14
  },
  searchTitle: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 12
  },
  formRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  input: {
    backgroundColor: colors.soft,
    borderColor: colors.line,
    borderRadius: 6,
    borderWidth: 1,
    color: colors.ink,
    flexGrow: 1,
    minWidth: 160,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  searchButton: {
    alignItems: "center",
    backgroundColor: colors.gold,
    borderRadius: 6,
    justifyContent: "center",
    minWidth: 130,
    paddingHorizontal: 16
  },
  searchButtonText: {
    color: colors.blue900,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  sectionHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22
  },
  sectionTitle: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: "900",
    marginVertical: 14
  },
  sectionLink: {
    color: colors.blue700,
    fontWeight: "900"
  },
  horizontalList: {
    gap: 12,
    paddingBottom: 4
  },
  offerGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12
  },
  offerCard: {
    flexBasis: 250,
    flexGrow: 1
  },
  discount: {
    alignSelf: "flex-start",
    backgroundColor: colors.red,
    borderRadius: 4,
    color: colors.paper,
    fontSize: 12,
    fontWeight: "900",
    marginBottom: -28,
    marginLeft: 10,
    paddingHorizontal: 8,
    paddingVertical: 5,
    zIndex: 2
  },
  helperText: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 18
  }
});
