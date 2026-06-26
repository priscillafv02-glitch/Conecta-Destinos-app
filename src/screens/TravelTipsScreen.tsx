import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { FeatureStrip } from "../components/FeatureStrip";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TipCard } from "../components/TipCard";
import { travelTips } from "../data/travelTips";
import { colors } from "../theme/colors";
import { RootStackParamList } from "../types/navigation";

type TravelTipsProps = NativeStackScreenProps<RootStackParamList, "TravelTips">;

export function TravelTipsScreen({ navigation }: TravelTipsProps) {
  const { width } = useWindowDimensions();
  const columns = width >= 920 ? 3 : width >= 620 ? 2 : 1;

  return (
    <View style={styles.screen}>
      <Header active="TravelTips" navigation={navigation} />

      <FlatList
        key={columns}
        data={travelTips}
        keyExtractor={(item) => item.id}
        numColumns={columns}
        columnWrapperStyle={columns > 1 ? styles.columnWrapper : undefined}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.hero}>
            <Text style={styles.kicker}>Guia rapido</Text>
            <Text style={styles.title}>Dicas para sua viagem</Text>
            <Text style={styles.subtitle}>
              Uma lista simples para conferir documentos, mala, tecnologia e cuidados basicos antes de viajar.
            </Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={() => navigation.navigate("Destinations")}>
              <Text style={styles.buttonText}>Escolher destino</Text>
            </TouchableOpacity>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.cardSlot}>
            <TipCard tip={item} />
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
  hero: {
    backgroundColor: colors.paper,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 14,
    padding: 18
  },
  kicker: {
    color: colors.goldDark,
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  title: {
    color: colors.ink,
    fontSize: 30,
    fontWeight: "900",
    marginTop: 4
  },
  subtitle: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
    maxWidth: 720
  },
  button: {
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: colors.gold,
    borderRadius: 6,
    marginTop: 16,
    paddingHorizontal: 18,
    paddingVertical: 12
  },
  buttonText: {
    color: colors.blue900,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  columnWrapper: {
    gap: 12
  },
  cardSlot: {
    flex: 1,
    marginBottom: 12
  },
  footerArea: {
    marginTop: 4
  }
});
