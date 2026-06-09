import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { destinations } from "../data/destinations";
import { colors } from "../theme/colors";
import { RootStackParamList } from "../types/navigation";
import { formatCurrency } from "../utils/format";

type PaymentProps = NativeStackScreenProps<RootStackParamList, "Payment">;

export function PaymentScreen({ navigation, route }: PaymentProps) {
  const destination = destinations.find((item) => item.id === route.params.destinationId) ?? destinations[0];
  const serviceFee = 89;
  const total = destination.price + serviceFee;

  function finishPayment() {
    Alert.alert("Pagamento ficticio aprovado", `Reserva para ${destination.name} confirmada no modo demonstracao.`);
    navigation.navigate("Profile");
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.kicker}>Pagamento ficticio</Text>
            <Text style={styles.title}>Finalizar reserva</Text>
          </View>
          <TouchableOpacity style={styles.closeButton} activeOpacity={0.8} onPress={() => navigation.goBack()}>
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tripBox}>
          <Image source={{ uri: destination.image }} style={styles.tripImage} />
          <View style={styles.tripInfo}>
            <Text style={styles.tripName}>{destination.name}</Text>
            <Text style={styles.tripMeta}>
              {destination.country} - {destination.nights} noites
            </Text>
            <Text style={styles.tripTags}>{destination.tags.join(" - ")}</Text>
          </View>
        </View>

        <View style={styles.summaryBox}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Pacote por pessoa</Text>
            <Text style={styles.summaryValue}>{formatCurrency(destination.price)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Taxa de servico</Text>
            <Text style={styles.summaryValue}>{formatCurrency(serviceFee)}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>{formatCurrency(total)}</Text>
          </View>
        </View>

        <View style={styles.form}>
          <Text style={styles.formTitle}>Dados do pagamento</Text>
          <TextInput style={styles.input} placeholder="Nome no cartao" placeholderTextColor={colors.muted} defaultValue="Marina Viajante" />
          <TextInput style={styles.input} placeholder="Numero do cartao" placeholderTextColor={colors.muted} defaultValue="**** **** **** 2026" />
          <View style={styles.inputRow}>
            <TextInput style={[styles.input, styles.inputHalf]} placeholder="Validade" placeholderTextColor={colors.muted} defaultValue="12/30" />
            <TextInput style={[styles.input, styles.inputHalf]} placeholder="CVV" placeholderTextColor={colors.muted} defaultValue="123" />
          </View>
        </View>

        <TouchableOpacity style={styles.payButton} activeOpacity={0.85} onPress={finishPayment}>
          <Text style={styles.payButtonText}>Confirmar pagamento</Text>
        </TouchableOpacity>
        <Text style={styles.note}>Tela apenas demonstrativa, sem cobranca real.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    alignItems: "center",
    backgroundColor: "rgba(5, 20, 40, 0.64)",
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  modal: {
    backgroundColor: colors.paper,
    borderRadius: 8,
    maxWidth: 560,
    padding: 18,
    width: "100%"
  },
  headerRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14
  },
  kicker: {
    color: colors.goldDark,
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  title: {
    color: colors.ink,
    fontSize: 24,
    fontWeight: "900",
    marginTop: 3
  },
  closeButton: {
    alignItems: "center",
    backgroundColor: colors.soft,
    borderColor: colors.line,
    borderRadius: 6,
    borderWidth: 1,
    height: 38,
    justifyContent: "center",
    width: 38
  },
  closeText: {
    color: colors.ink,
    fontWeight: "900"
  },
  tripBox: {
    backgroundColor: colors.soft,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 12,
    padding: 10
  },
  tripImage: {
    borderRadius: 6,
    height: 92,
    width: 118
  },
  tripInfo: {
    flex: 1,
    justifyContent: "center"
  },
  tripName: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: "900"
  },
  tripMeta: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "800",
    marginTop: 4
  },
  tripTags: {
    color: colors.blue700,
    fontSize: 12,
    fontWeight: "800",
    marginTop: 6
  },
  summaryBox: {
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 12,
    padding: 12
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6
  },
  summaryLabel: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "700"
  },
  summaryValue: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: "900"
  },
  totalRow: {
    borderTopColor: colors.line,
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
    paddingTop: 12
  },
  totalLabel: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: "900"
  },
  totalValue: {
    color: colors.blue900,
    fontSize: 22,
    fontWeight: "900"
  },
  form: {
    marginTop: 12
  },
  formTitle: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: "900",
    marginBottom: 8
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
  inputRow: {
    flexDirection: "row",
    gap: 10
  },
  inputHalf: {
    flex: 1
  },
  payButton: {
    alignItems: "center",
    backgroundColor: colors.gold,
    borderRadius: 6,
    marginTop: 4,
    paddingVertical: 14
  },
  payButtonText: {
    color: colors.blue900,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  note: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 10,
    textAlign: "center"
  }
});
