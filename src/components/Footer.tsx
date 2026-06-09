import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";

export function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.logo}>ConectaDestinos</Text>
      <View style={styles.columns}>
        <View style={styles.column}>
          <Text style={styles.title}>Institucional</Text>
          <Text style={styles.link}>Sobre nos</Text>
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
          <Text style={styles.link}>Sao Paulo - SP</Text>
        </View>
      </View>
      <Text style={styles.copy}>© 2026 ConectaDestinos. Todos os direitos reservados.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: colors.blue900,
    paddingHorizontal: 18,
    paddingVertical: 22
  },
  logo: {
    color: colors.paper,
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 14
  },
  columns: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16
  },
  column: {
    minWidth: 140
  },
  title: {
    color: colors.paper,
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 8,
    textTransform: "uppercase"
  },
  link: {
    color: "#c7dcf4",
    fontSize: 12,
    lineHeight: 20
  },
  copy: {
    borderTopColor: "rgba(255,255,255,0.16)",
    borderTopWidth: 1,
    color: "#c7dcf4",
    fontSize: 11,
    marginTop: 18,
    paddingTop: 14,
    textAlign: "center"
  }
});
