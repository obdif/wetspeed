// Profile.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Switch,
  Alert,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/colors';
import { styles } from '../../assets/styles/profile.styles';

interface ProfileProps {
  user?: {
    name: string;
    email: string;
    phone: string;
    avatar?: string;
    joinDate: string;
    isVerified: boolean;
  };
  onLogout?: () => void;
  onEditProfile?: () => void;
}

const Profile: React.FC<ProfileProps> = ({
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    joinDate: '2023-01-15',
    isVerified: true,
  },
  onLogout = () => console.log('Logout pressed'),
  onEditProfile = () => console.log('Edit profile pressed'),
}) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [biometricEnabled, setBiometricEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', style: 'destructive', onPress: onLogout },
      ]
    );
  };

  const profileMenuItems = [
    {
      id: 'personal',
      title: 'Personal Information',
      icon: 'person-outline',
      onPress: onEditProfile,
      showArrow: true,
    },
    {
      id: 'security',
      title: 'Security & Privacy',
      icon: 'shield-checkmark-outline',
      onPress: () => console.log('Security pressed'),
      showArrow: true,
    },
    {
      id: 'payment',
      title: 'Payment Methods',
      icon: 'card-outline',
      onPress: () => console.log('Payment methods pressed'),
      showArrow: true,
    },
    {
      id: 'transactions',
      title: 'Transaction History',
      icon: 'receipt-outline',
      onPress: () => console.log('Transaction history pressed'),
      showArrow: true,
    },
  ];

  const settingsMenuItems = [
    {
      id: 'notifications',
      title: 'Push Notifications',
      icon: 'notifications-outline',
      type: 'switch',
      value: notificationsEnabled,
      onToggle: setNotificationsEnabled,
    },
    {
      id: 'biometric',
      title: 'Biometric Login',
      icon: 'finger-print-outline',
      type: 'switch',
      value: biometricEnabled,
      onToggle: setBiometricEnabled,
    },
    {
      id: 'darkmode',
      title: 'Dark Mode',
      icon: 'moon-outline',
      type: 'switch',
      value: darkModeEnabled,
      onToggle: setDarkModeEnabled,
    },
  ];

  const supportMenuItems = [
    {
      id: 'help',
      title: 'Help Center',
      icon: 'help-circle-outline',
      onPress: () => console.log('Help center pressed'),
      showArrow: true,
    },
    {
      id: 'contact',
      title: 'Contact Support',
      icon: 'headset-outline',
      onPress: () => console.log('Contact support pressed'),
      showArrow: true,
    },
    {
      id: 'feedback',
      title: 'Send Feedback',
      icon: 'chatbubble-outline',
      onPress: () => console.log('Send feedback pressed'),
      showArrow: true,
    },
    {
      id: 'about',
      title: 'About App',
      icon: 'information-circle-outline',
      onPress: () => console.log('About app pressed'),
      showArrow: true,
    },
  ];

  const renderMenuItem = (item: any) => (
    <TouchableOpacity
      key={item.id}
      style={styles.menuItem}
      onPress={item.onPress}
      activeOpacity={0.7}
    >
      <View style={styles.menuItemLeft}>
        <View style={styles.menuIconContainer}>
          <Ionicons name={item.icon} size={22} color={COLORS.primary} />
        </View>
        <Text style={styles.menuItemText}>{item.title}</Text>
      </View>
      {item.type === 'switch' ? (
        <Switch
          value={item.value}
          onValueChange={item.onToggle}
          trackColor={{ false: COLORS.border, true: COLORS.primary }}
          thumbColor={item.value ? COLORS.white : COLORS.textLight}
        />
      ) : item.showArrow ? (
        <Ionicons name="chevron-forward" size={20} color={COLORS.textLight} />
      ) : null}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.editButton} onPress={onEditProfile}>
          <Ionicons name="create-outline" size={20} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            {user.avatar ? (
              <Image source={{ uri: user.avatar }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Ionicons name="person" size={40} color={COLORS.textLight} />
              </View>
            )}
            {user.isVerified && (
              <View style={styles.verifiedBadge}>
                <Ionicons name="checkmark" size={14} color={COLORS.white} />
              </View>
            )}
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
            <Text style={styles.userPhone}>{user.phone}</Text>
            <Text style={styles.joinDate}>
              Member since {new Date(user.joinDate).toLocaleDateString()}
            </Text>
          </View>
        </View>

        {/* Profile Stats */}
        <View style={styles.profileStats}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>24</Text>
            <Text style={styles.statLabel}>Transactions</Text>
          </View>
          <View style={[styles.statItem, styles.statDivider]}>
            <Text style={styles.statValue}>$2,450</Text>
            <Text style={styles.statLabel}>Total Spent</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>Cards</Text>
          </View>
        </View>
      </View>

      {/* Profile Menu Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.menuContainer}>
          {profileMenuItems.map(renderMenuItem)}
        </View>
      </View>

      {/* Settings Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.menuContainer}>
          {settingsMenuItems.map(renderMenuItem)}
        </View>
      </View>

      {/* Support Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <View style={styles.menuContainer}>
          {supportMenuItems.map(renderMenuItem)}
        </View>
      </View>

      {/* Logout Button */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={22} color={COLORS.white} />
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* App Version */}
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
};



export default Profile;