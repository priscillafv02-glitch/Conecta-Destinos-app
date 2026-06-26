import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Alert, Image, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { destinations } from "../data/destinations";
import { colors } from "../theme/colors";
import { RootStackParamList } from "../types/navigation";
import { formatCurrency } from "../utils/format";

type ShareTripProps = NativeStackScreenProps<RootStackParamList, "ShareTrip">;

export function ShareTripScreen({ navigation, route }: ShareTripProps) {
  const destination = destinations.find((item) => item.id === route.params.destinationId) ?? destinations[0];
  const shareUrl = `https://conectadestinos.app/viagem/${destination.id}`;
  const shareMessage = `Veja essa viagem para ${destination.name}, ${destination.country}: ${formatCurrency(
    destination.price
  )} por pessoa. ${shareUrl}`;

  async function shareTrip() {
    try {
      await Share.share({
        title: `Viagem para ${destination.name}`,
        message: shareMessage,
        url: shareUrl
      });
    } catch {
      Alert.alert("Nao foi possivel compartilhar", "Tente novamente em alguns instantes.");
    }
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContent}>
      <Header active="Destinations" navigation={navigation} />

      <View style={styles.content}>
        <Text style={styles.breadcrumb}>Inicio &gt; Destinos &gt; Compartilhar</Text>
        <View style={styles.panel}>
          <View style={styles.tripSummary}>
            <Image source={{ uri: destination.image }} style={styles.image} />
            <View style={styles.tripInfo}>
              <Text style={styles.kicker}>Compartilhar viagem</Text>
              <Text style={styles.title}>
                {destination.name}, {destination.country}
              </Text>
              <Text style={styles.meta}>
                {destination.nights} noites - {destination.tags.join(" - ")}
              </Text>
              <Text style={styles.price}>{formatCurrency(destination.price)}</Text>
            </View>
          </View>

          <View style={styles.shareGrid}>
            <View style={styles.qrBox}>
              <QRCode value={shareUrl} size={190} color={colors.blue900} backgroundColor={colors.paper} />
              <Text style={styles.qrText}>Escaneie para abrir a viagem</Text>
            </View>

            <View style={styles.copyBox}>
              <Text style={styles.sectionTitle}>Mensagem pronta</Text>
              <Text style={styles.message}>{shareMessage}</Text>
              <TouchableOpacity style={styles.shareButton} activeOpacity={0.85} onPress={shareTrip}>
                <Text style={styles.shareButtonText}>Compartilhar viagem</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.outlineButton}
                activeOpacity={0.85}
                onPress={() => navigation.navigate("DestinationDetails", { destinationId: destination.id })}
              >
                <Text style={styles.outlineButtonText}>Voltar aos detalhes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
    maxWidth: 980,
    padding: 16,
    width: "100%"
  },
  breadcrumb: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 10
  },
  panel: {
    backgroundColor: colors.paper,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    padding: 16
  },
  tripSummary: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14
  },
  image: {
    borderRadius: 8,
    height: 160,
    width: 240
  },
  tripInfo: {
    flex: 1,
    justifyContent: "center",
    minWidth: 240
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
  meta: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 22,
    marginTop: 8
  },
  price: {
    color: colors.blue900,
    fontSize: 26,
    fontWeight: "900",
    marginTop: 10
  },
  shareGrid: {
    borderTopColor: colors.line,
    borderTopWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    marginTop: 16,
    paddingTop: 16
  },
  qrBox: {
    alignItems: "center",
    backgroundColor: colors.soft,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    minWidth: 240,
    padding: 18
  },
  qrText: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "800",
    marginTop: 12,
    textAlign: "center"
  },
  copyBox: {
    flex: 1,
    minWidth: 260
  },
  sectionTitle: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 8
  },
  message: {
    backgroundColor: colors.blue100,
    borderRadius: 6,
    color: colors.ink,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 22,
    padding: 12
  },
  shareButton: {
    alignItems: "center",
    backgroundColor: colors.gold,
    borderRadius: 6,
    marginTop: 12,
    paddingVertical: 13
  },
  shareButtonText: {
    color: colors.blue900,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  outlineButton: {
    alignItems: "center",
    borderColor: colors.blue700,
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 10,
    paddingVertical: 12
  },
  outlineButtonText: {
    color: colors.blue700,
    fontWeight: "900"
  }
});
