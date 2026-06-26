import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { colors } from "../theme/colors";
import { RootStackParamList } from "../types/navigation";

type ProfileProps = NativeStackScreenProps<RootStackParamList, "Profile">;

export function ProfileScreen({ navigation }: ProfileProps) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContent}>
      <Header active="Profile" navigation={navigation} />

      <View style={styles.content}>
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>MV</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Luísa Viajante</Text>
            <Text style={styles.email}>luisa.viajante@email.com</Text>
            <Text style={styles.member}>Cliente ficticia - plano Explorador</Text>
          </View>
        </View>

        <View style={styles.grid}>
          <View style={styles.panel}>
            <Text style={styles.panelTitle}>Resumo</Text>
            <View style={styles.metricRow}>
              <Text style={styles.metricNumber}>3</Text>
              <Text style={styles.metricLabel}>viagens salvas</Text>
            </View>
            <View style={styles.metricRow}>
              <Text style={styles.metricNumber}>1</Text>
              <Text style={styles.metricLabel}>pagamento demonstrativo</Text>
            </View>
            <View style={styles.metricRow}>
              <Text style={styles.metricNumber}>12</Text>
              <Text style={styles.metricLabel}>destinos visualizados</Text>
            </View>
          </View>

          <View style={styles.panel}>
            <Text style={styles.panelTitle}>Preferencias</Text>
            <Text style={styles.preference}>Praias e destinos culturais</Text>
            <Text style={styles.preference}>Viagens de 5 a 7 noites</Text>
            <Text style={styles.preference}>Hotel com cafe da manha</Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => navigation.navigate("Destinations")}>
              <Text style={styles.buttonText}>Ver destinos</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.historyPanel}>
          <Text style={styles.panelTitle}>Ultimas atividades</Text>
          <Text style={styles.historyItem}>Pagamento ficticio aprovado para uma viagem demonstrativa.</Text>
          <Text style={styles.historyItem}>Destino Paris adicionado aos favoritos.</Text>
          <Text style={styles.historyItem}>Filtro Europa usado na tela de destinos.</Text>
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
  profileCard: {
    alignItems: "center",
    backgroundColor: colors.paper,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    padding: 18
  },
  avatar: {
    alignItems: "center",
    backgroundColor: colors.gold,
    borderRadius: 36,
    height: 72,
    justifyContent: "center",
    width: 72
  },
  avatarText: {
    color: colors.blue900,
    fontSize: 22,
    fontWeight: "900"
  },
  profileInfo: {
    flex: 1,
    minWidth: 220
  },
  name: {
    color: colors.ink,
    fontSize: 26,
    fontWeight: "900"
  },
  email: {
    color: colors.blue700,
    fontSize: 14,
    fontWeight: "800",
    marginTop: 4
  },
  member: {
    color: colors.muted,
    fontSize: 13,
    marginTop: 6
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,
    marginTop: 14
  },
  panel: {
    backgroundColor: colors.paper,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    minWidth: 280,
    padding: 16
  },
  panelTitle: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 12
  },
  metricRow: {
    alignItems: "center",
    borderBottomColor: colors.line,
    borderBottomWidth: 1,
    flexDirection: "row",
    gap: 12,
    paddingVertical: 10
  },
  metricNumber: {
    color: colors.blue900,
    fontSize: 24,
    fontWeight: "900",
    width: 42
  },
  metricLabel: {
    color: colors.muted,
    flex: 1,
    fontSize: 14,
    fontWeight: "700"
  },
  preference: {
    backgroundColor: colors.blue100,
    borderRadius: 6,
    color: colors.ink,
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: colors.gold,
    borderRadius: 6,
    marginTop: 6,
    paddingVertical: 12
  },
  buttonText: {
    color: colors.blue900,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  historyPanel: {
    backgroundColor: colors.paper,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 18,
    marginTop: 14,
    padding: 16
  },
  historyItem: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 24
  }
});
