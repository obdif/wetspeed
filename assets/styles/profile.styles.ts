import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants/colors";

const { width } = Dimensions.get("window");
const AVATAR_SIZE = width * 0.25; // Avatar is 25% of screen width for responsiveness

export const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  wideContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    width: '100%',
    // boxShadow: `0 2px 4px ${COLORS.shadow}`,
  
  },


  profileCard: {
    marginHorizontal: 0,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical:5,
    // padding: 14,
    // shadowColor: COLORS.shadow,
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.1,
    // shadowRadius: 8,
    // elevation: 4,
  },
    editButton: {
    width: 40,
    height: 40,
    borderRadius: 22,
    backgroundColor: COLORS.card,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  profileHeader: {
    flexDirection: 'row',
    marginBottom: 14,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  verifiedBadge: {
    position: 'absolute',
    display: 'flex',
    zIndex: 9999,
    bottom: 2,
    left: 44,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#10b981',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.card,
    
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 2,
  },
  userEmail: {
    fontSize: 12,
    color: COLORS.text,
    marginBottom: 2,
  },


  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 10,
  },
  menuContainer: {
    backgroundColor: COLORS.card,
    borderRadius: 10,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: `${COLORS.primary}15`,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.text,
  },
  logoutButton: {
    backgroundColor: '#ef4444',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    shadowColor: '#ef4444',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  logoutButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  versionContainer: {
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: 20,
  },
  versionText: {
    fontSize: 14,
    color: COLORS.textLight,
    fontStyle: 'italic',
  },

    profile: {
    width: 65,
    height: 65,
    borderRadius: 52.5,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.border,
    marginRight: 7,
  },
  profileImage: {
    width: 65,
    height: 65,
  },

});