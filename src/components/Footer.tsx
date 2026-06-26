import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";

export function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.logo}>Conecta Destinos</Text>

      <View style={styles.columns}>
        <View style={styles.column}>
          <Text style={styles.title}>Institucional</Text>
          <Text style={styles.link}>Sobre nós</Text>
          <Text style={styles.link}>Termos de uso</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.title}>Ajuda</Text>
          <Text style={styles.link}>Perguntas frequentes</Text>
          <Text style={styles.link}>Seguro viagem</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.title}>Contato</Text>
          <Text style={styles.link}>contato@conectadestinos.com.br</Text>
          <Text style={styles.link}>São Paulo - SP</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.title}>Redes Sociais</Text>
          <Text style={styles.link}>📷 Instagram</Text>
          <Text style={styles.link}>📘 Facebook</Text>
          <Text style={styles.link}>💬 WhatsApp</Text>
        </View>
      </View>

      <Text style={styles.copy}>
        © 2026 ConectaDestinos. Todos os direitos reservados.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: colors.blue900,
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: "center",
  },

  logo: {
    color: colors.paper,
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 16,
    textAlign: "center",
  },

  columns: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 24,
    width: "100%",
    marginBottom: 12,
  },

  column: {
    minWidth: 130,
    alignItems: "center",
  },

  title: {
    color: colors.paper,
    fontSize: 12,
    fontWeight: "800",
    marginBottom: 6,
    textTransform: "uppercase",
    textAlign: "center",
  },

  link: {
    color: "#c7dcf4",
    fontSize: 11,
    lineHeight: 18,
    textAlign: "center",
  },

  copy: {
    borderTopColor: "rgba(255,255,255,0.16)",
    borderTopWidth: 1,
    color: "#c7dcf4",
    fontSize: 10,
    marginTop: 12,
    paddingTop: 12,
    textAlign: "center",
    width: "100%",
  },
});