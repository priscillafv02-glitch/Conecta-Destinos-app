import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Alert, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { colors } from "../theme/colors";
import { RootStackParamList } from "../types/navigation";

type AboutProps = NativeStackScreenProps<RootStackParamList, "About">;

export function AboutScreen({ navigation }: AboutProps) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContent}>
      <Header active="About" navigation={navigation} />

      <ImageBackground
        source={{ uri: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80" }}
        style={styles.hero}
      >
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>Sobre a ConectaDestinos</Text>
          <Text style={styles.heroText}>
            Uma agencia digital criada para organizar viagens com clareza, seguranca e atendimento proximo.
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>15+</Text>
            <Text style={styles.statLabel}>Anos de experiencia</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>10.000+</Text>
            <Text style={styles.statLabel}>Clientes atendidos</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>24/7</Text>
            <Text style={styles.statLabel}>Suporte ao viajante</Text>
          </View>
        </View>

        <View style={styles.grid}>
          <View style={styles.panel}>
            <Text style={styles.sectionTitle}>Entre em contato</Text>
            <Text style={styles.contactLine}>(11) 4002-8922</Text>
            <Text style={styles.contactLine}>contato@conectadestinos.com.br</Text>
            <Text style={styles.contactLine}>Rua das Viagens, 123 - Sao Paulo - SP</Text>

            <View style={styles.mapFake}>
              <Text style={styles.mapPin}>ConectaDestinos</Text>
            </View>
          </View>

          <View style={styles.panel}>
            <Text style={styles.sectionTitle}>Envie sua mensagem</Text>
            <TextInput placeholder="Nome completo" style={styles.input} placeholderTextColor={colors.muted} />
            <TextInput placeholder="E-mail" style={styles.input} placeholderTextColor={colors.muted} />
            <TextInput placeholder="Telefone" style={styles.input} placeholderTextColor={colors.muted} />
            <TextInput
              placeholder="Mensagem"
              multiline
              numberOfLines={5}
              style={[styles.input, styles.textArea]}
              placeholderTextColor={colors.muted}
            />
            <TouchableOpacity
              style={styles.submitButton}
              activeOpacity={0.8}
              onPress={() => Alert.alert("Mensagem enviada", "Obrigado! Entraremos em contato em breve.")}
            >
              <Text style={styles.submitButtonText}>Enviar mensagem</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionTitle}>O que nossos clientes dizem</Text>
        <View style={styles.testimonialRow}>
          {["Juliana Souza", "Carlos Mendes", "Fernanda Lima"].map((name) => (
            <View key={name} style={styles.testimonial}>
              <Text style={styles.avatar}>{name.slice(0, 1)}</Text>
              <Text style={styles.clientName}>{name}</Text>
              <Text style={styles.clientText}>
                Atendimento excelente e viagem organizada do inicio ao fim. Recomendo para quem quer praticidade.
              </Text>
            </View>
          ))}
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
  hero: {
    minHeight: 230
  },
  heroOverlay: {
    backgroundColor: "rgba(5,47,95,0.58)",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 22,
    paddingVertical: 36
  },
  heroTitle: {
    color: colors.paper,
    fontSize: 30,
    fontWeight: "900"
  },
  heroText: {
    color: colors.paper,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 10,
    maxWidth: 540
  },
  content: {
    alignSelf: "center",
    maxWidth: 1120,
    padding: 16,
    width: "100%"
  },
  stats: {
    backgroundColor: colors.paper,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginTop: -34,
    padding: 14
  },
  statItem: {
    alignItems: "center",
    flex: 1,
    minWidth: 160
  },
  statNumber: {
    color: colors.blue900,
    fontSize: 24,
    fontWeight: "900"
  },
  statLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "700",
    marginTop: 2,
    textAlign: "center"
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,
    marginTop: 16
  },
  panel: {
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
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 12,
    marginTop: 8
  },
  contactLine: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 26
  },
  mapFake: {
    alignItems: "center",
    backgroundColor: colors.blue100,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    height: 160,
    justifyContent: "center",
    marginTop: 16
  },
  mapPin: {
    backgroundColor: colors.paper,
    borderRadius: 6,
    color: colors.blue900,
    fontWeight: "900",
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  input: {
    backgroundColor: colors.soft,
    borderColor: colors.line,
    borderRadius: 6,
    borderWidth: 1,
    color: colors.ink,
    marginBottom: 10,
    paddingHorizontal: 12,
    paddingVertical: 11
  },
  textArea: {
    minHeight: 110,
    textAlignVertical: "top"
  },
  submitButton: {
    alignItems: "center",
    backgroundColor: colors.green,
    borderRadius: 6,
    paddingVertical: 13
  },
  submitButtonText: {
    color: colors.paper,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  testimonialRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 18
  },
  testimonial: {
    backgroundColor: colors.paper,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    minWidth: 220,
    padding: 14
  },
  avatar: {
    backgroundColor: colors.blue100,
    borderRadius: 20,
    color: colors.blue900,
    fontSize: 18,
    fontWeight: "900",
    height: 40,
    lineHeight: 40,
    textAlign: "center",
    width: 40
  },
  clientName: {
    color: colors.ink,
    fontSize: 15,
    fontWeight: "900",
    marginTop: 10
  },
  clientText: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 6
  }
});
