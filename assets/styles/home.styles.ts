import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 20,
    paddingBottom: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  headerLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  profile: {
    width: 35,
    height: 35,
    borderRadius: 52.5,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.border,
    marginRight: 7,
  },
  profileImage: {
    width: 35,
    height: 35,
  },
  welcomeContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  welcomeText: {
    fontSize: 14,
    color: COLORS.textLight,
    marginBottom: 1,
  },
  usernameText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
  },

  balanceGrid:{
    display: "flex",
    position: "relative",
    justifyContent: "space-between", 
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  currencyContainer: {
    position: "relative",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "transparent", 
  },

  currencyPicker: {
    color: COLORS.white,
    fontSize: 30,
  },

  balanceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.text,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addButtonText: {
    color: COLORS.white,
    fontWeight: "600",
    marginLeft: 4,
  },
  logoutButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: COLORS.card,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  balanceCard: {
    backgroundColor: COLORS.card,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  balanceTitle: {
    fontSize: 16,
    color: COLORS.textLight,
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 10,
  },
  balanceStats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  balanceStatItem: {
    flex: 1,
    alignItems: "center",
  },
  statDivider: {
    borderRightWidth: 1,
    borderColor: COLORS.border,
  },
  balanceStatLabel: {
    fontSize: 14,
    color: COLORS.textLight,
    marginBottom: 4,
  },
  balanceStatAmount: {
    fontSize: 18,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: COLORS.text,
    marginBottom: 1,
  },
  transactionCard: {
    backgroundColor: COLORS.card,
    borderRadius: 10,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  transactionContent: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  categoryIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  transactionLeft: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: COLORS.text,
    marginBottom: 2,
  },
  transactionCategory: {
    fontSize: 13,
    color: COLORS.textLight,
  },
  transactionRight: {
    alignItems: "flex-end",
  },
  transactionAmount: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 3,
  },
  transactionDate: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  deleteButton: {
    padding: 15,
    borderLeftWidth: 1,
    borderLeftColor: COLORS.border,
  },
  transactionsContainer: {
    marginBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  emptyState: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  emptyStateIcon: {
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 8,
  },
  emptyStateText: {
    color: COLORS.textLight,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 20,
  },
  emptyStateButton: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  emptyStateButtonText: {
    color: COLORS.white,
    fontWeight: "600",
    marginLeft: 6,
  },
  transactionsHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    paddingBottom: 2,
  },
  transactionsList: {
    flex: 1,
    marginHorizontal: 20,
  },
  transactionsListContent: {
    paddingBottom: 1,
  },







//  ========= TRANSACTIONS STYLES =========

  transactionContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: "center",
  },

categoriesStatusContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 10,
  paddingBottom: 5,
},

categoriesStatus: {
  width: "48%",
  height: 35,
},











});



