import React, { useState } from 'react';
import SafeScreen from '@/components/SafeScreen';
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
  ScrollView 
} from 'react-native';
import { COLORS } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function AddMoney() {
  const [amount, setAmount] = useState('');

  const paymentMethods = [
    { id: 'bank', icon: 'business', label: 'Bank Transfer', subtitle: 'Free • 1-2 days' },
    { id: 'card', icon: 'card', label: 'Debit Card', subtitle: '1.5% fee • Instant' },
    { id: 'crypto', icon: 'logo-bitcoin', label: 'Cryptocurrency', subtitle: 'Network fees apply' },
  ];

  return (
    <SafeScreen edges={['bottom', 'left', 'right']}>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.iconHeader}>
            <View style={[styles.iconCircle, { backgroundColor: 'rgba(34, 197, 94, 0.15)' }]}>
              <Ionicons name="add-circle" size={40} color={COLORS.income || '#22C55E'} />
            </View>
            <Text style={styles.pageTitle}>Add Money</Text>
            <Text style={styles.pageSubtitle}>Choose how to fund your account</Text>
          </View>

          {/* Amount Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Amount</Text>
            <View style={styles.amountInputContainer}>
              <Text style={styles.currencySymbolLarge}>$</Text>
              <TextInput
                style={styles.amountInput}
                placeholder="0.00"
                placeholderTextColor={COLORS.textLight}
                value={amount}
                onChangeText={setAmount}
                keyboardType="decimal-pad"
              />
            </View>
          </View>

          {/* Quick Amounts */}
          <View style={styles.quickAmounts}>
            {['50', '100', '500', '1000'].map((quickAmount) => (
              <TouchableOpacity
                key={quickAmount}
                style={styles.quickAmountBtn}
                onPress={() => setAmount(quickAmount)}
              >
                <Text style={styles.quickAmountText}>${quickAmount}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Payment Methods */}
          <Text style={styles.sectionTitle}>Select Payment Method</Text>
          {paymentMethods.map((method) => (
            <TouchableOpacity key={method.id} style={styles.paymentMethod}>
              <View style={styles.paymentMethodIcon}>
                <Ionicons name={method.icon as any} size={24} color={COLORS.primary} />
              </View>
              <View style={styles.paymentMethodInfo}>
                <Text style={styles.paymentMethodLabel}>{method.label}</Text>
                <Text style={styles.paymentMethodSubtitle}>{method.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={COLORS.textLight} />
            </TouchableOpacity>
          ))}

          {/* Continue Button */}
          <TouchableOpacity 
            style={[styles.continueButton, !amount ? styles.continueButtonDisabled : null]}
            disabled={!amount}
            onPress={() => router.back()}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 20,
  },
  iconHeader: {
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 20,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 8,
  },
  pageSubtitle: {
    fontSize: 14,
    color: COLORS.textLight,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 12,
  },
  amountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  currencySymbolLarge: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.text,
    marginRight: 8,
  },
  amountInput: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.text,
    minWidth: 100,
  },
  quickAmounts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    gap: 8,
  },
  quickAmountBtn: {
    flex: 1,
    backgroundColor: COLORS.card,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  quickAmountText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.income,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 16,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  paymentMethodIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(74, 144, 226, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  paymentMethodInfo: {
    flex: 1,
  },
  paymentMethodLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 4,
  },
  paymentMethodSubtitle: {
    fontSize: 13,
    color: COLORS.textLight,
  },
  continueButton: {
    backgroundColor: COLORS.income,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  continueButtonDisabled: {
    opacity: 0.5,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});