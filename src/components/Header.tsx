import { NavigationProp } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../theme/colors";
import { RootStackParamList } from "../types/navigation";

type ScreenName = keyof Pick<RootStackParamList, "Home" | "Destinations" | "About" | "Profile">;

type HeaderProps = {
  active: ScreenName;
  navigation: NavigationProp<RootStackParamList>;
};

const items: { label: string; screen: ScreenName }[] = [
  { label: "Inicio", screen: "Home" },
  { label: "Destinos", screen: "Destinations" },
  { label: "Sobre", screen: "About" },
  { label: "Perfil", screen: "Profile" }
];

export function Header({ active, navigation }: HeaderProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.topLine}>
        <Text style={styles.topText}>Sua proxima viagem comeca aqui</Text>
        <Text style={styles.topText}>(11) 4002-8922</Text>
      </View>

      <View style={styles.brandRow}>
        <View>
          <Text style={styles.logo}>ConectaDestinos</Text>
          <Text style={styles.subtitle}>Roteiros pensados para voce</Text>
        </View>
        <View style={styles.profileBadge}>
          <Text style={styles.profileInitials}>MV</Text>
          <View>
            <Text style={styles.profileName}>Marina Viajante</Text>
            <Text style={styles.profileStatus}>Perfil ficticio</Text>
          </View>
        </View>
      </View>

      <View style={styles.navbar}>
        {items.map((item) => (
          <TouchableOpacity
            key={item.screen}
            activeOpacity={0.75}
            style={[styles.navButton, active === item.screen && styles.navButtonActive]}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Text style={[styles.navText, active === item.screen && styles.navTextActive]}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.blue900
  },
  topLine: {
    alignItems: "center",
    borderBottomColor: "rgba(255,255,255,0.18)",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 8
  },
  topText: {
    color: "#d8eaff",
    fontSize: 12,
    fontWeight: "600"
  },
  brandRow: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 16
  },
  logo: {
    color: colors.paper,
    fontSize: 24,
    fontWeight: "800"
  },
  subtitle: {
    color: "#bcd9f8",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 2,
    textTransform: "uppercase"
  },
  profileBadge: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderColor: "rgba(255,255,255,0.18)",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  profileInitials: {
    backgroundColor: colors.gold,
    borderRadius: 18,
    color: colors.blue900,
    fontSize: 12,
    fontWeight: "900",
    height: 36,
    lineHeight: 36,
    textAlign: "center",
    width: 36
  },
  profileName: {
    color: colors.paper,
    fontSize: 12,
    fontWeight: "900"
  },
  profileStatus: {
    color: "#bcd9f8",
    fontSize: 11,
    fontWeight: "700"
  },
  navbar: {
    backgroundColor: "#04284f",
    flexDirection: "row",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  navButton: {
    borderRadius: 6,
    flex: 1,
    paddingVertical: 10
  },
  navButtonActive: {
    backgroundColor: colors.gold
  },
  navText: {
    color: colors.paper,
    fontSize: 12,
    fontWeight: "800",
    textAlign: "center",
    textTransform: "uppercase"
  },
  navTextActive: {
    color: colors.blue900
  }
});
