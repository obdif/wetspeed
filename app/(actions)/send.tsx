import React, { useState } from 'react';
import SafeScreen from '@/components/SafeScreen';
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal,
  FlatList
} from 'react-native';
import { COLORS } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { styles } from '../../assets/styles/send.styles';

const BANKS = [
  { label: 'Access Bank', value: 'access_bank' },
  { label: 'GTBank', value: 'gtbank' },
  { label: 'First Bank', value: 'first_bank' },
  { label: 'Zenith Bank', value: 'zenith_bank' },
  { label: 'UBA', value: 'uba' },
  { label: 'Stanbic IBTC', value: 'stanbic_ibtc' },
  { label: 'Fidelity Bank', value: 'fidelity_bank' },
  { label: 'Union Bank', value: 'union_bank' },
  { label: 'Sterling Bank', value: 'sterling_bank' },
  { label: 'Wema Bank', value: 'wema_bank' },
  { label: 'Kuda Bank', value: 'kuda_bank' },
  { label: 'OPay', value: 'opay' },
  { label: 'PalmPay', value: 'palmpay' },
  { label: 'Moniepoint', value: 'moniepoint' },
];

export default function Send() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [showBankModal, setShowBankModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSend = () => {
    console.log('Sending:', { recipient, amount, note, bank: selectedBank });
    router.back();
  };

  const filteredBanks = BANKS.filter(bank =>
    bank.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedBankLabel = BANKS.find(b => b.value === selectedBank)?.label;

  return (
    <SafeScreen edges={['bottom', 'left', 'right']}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.form}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.pageTitle}>Send Money</Text>
              <Text style={styles.pageSubtitle}>Transfer funds instantly</Text>
            </View>

            {/* Recipient Account */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Recipient Account</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="person-outline" size={20} color={COLORS.textLight} />
                <TextInput
                  style={styles.input}
                  placeholder="Account number"
                  placeholderTextColor={COLORS.textLight}
                  value={recipient}
                  onChangeText={setRecipient}
                  keyboardType="number-pad"
                  maxLength={10}
                />
              </View>
            </View>

            {/* Bank Selector */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Recipient Bank</Text>
              <TouchableOpacity 
                style={styles.inputContainer}
                onPress={() => setShowBankModal(true)}
              >
                <Ionicons name="business-outline" size={20} color={COLORS.textLight} />
                <Text style={[
                  styles.input, 
                  { paddingVertical: 0 },
                  !selectedBank && { color: COLORS.textLight }
                ]}>
                  {selectedBankLabel || 'Select bank'}
                </Text>
                <Ionicons name="chevron-down" size={20} color={COLORS.textLight} />
              </TouchableOpacity>
            </View>

            {/* Amount */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Amount</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.currencySymbol}>$</Text>
                <TextInput
                  style={styles.input}
                  placeholder="0.00"
                  placeholderTextColor={COLORS.textLight}
                  value={amount}
                  onChangeText={setAmount}
                  keyboardType="decimal-pad"
                />
              </View>
              <View style={{ marginTop: 4 }}>
                <Text style={{ color: COLORS.textLight, fontSize: 12 }}>
                  Min: $5.00 - Max: $1,000.00
                </Text>
              </View>
            </View>

            {/* Quick Amounts */}
            <View style={styles.quickAmounts}>
              {['10', '50', '100', '500'].map((quickAmount) => (
                <TouchableOpacity
                  key={quickAmount}
                  style={styles.quickAmountBtn}
                  onPress={() => setAmount(quickAmount)}
                >
                  <Text style={styles.quickAmountText}>${quickAmount}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Note */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Note (Optional)</Text>
              <View style={[styles.inputContainer, { height: 80, alignItems: 'flex-start' }]}>
                <TextInput
                  style={[styles.input, { height: 60, textAlignVertical: 'top' }]}
                  placeholder="What's this for?"
                  placeholderTextColor={COLORS.textLight}
                  value={note}
                  onChangeText={setNote}
                  multiline
                />
              </View>
            </View>

            {/* Send Button */}
            <TouchableOpacity 
              style={[
                styles.sendButton, 
                (!recipient || !amount || !selectedBank) ? styles.sendButtonDisabled : null
              ]}
              onPress={handleSend}
              disabled={!recipient || !amount || !selectedBank}
            >
              <Text style={styles.sendButtonText}>Send ${amount || '0.00'}</Text>
              <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
            </TouchableOpacity>

            {/* Cancel Button */}
            <TouchableOpacity 
              style={styles.cancelButton}
              onPress={() => router.back()}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Bank Selection Modal */}
      <Modal
        visible={showBankModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowBankModal(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Bank</Text>
              <TouchableOpacity onPress={() => setShowBankModal(false)}>
                <Ionicons name="close" size={28} color={COLORS.text} />
              </TouchableOpacity>
            </View>

            {/* Search */}
            <View style={styles.searchContainer}>
              <Ionicons name="search" size={20} color={COLORS.textLight} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search banks..."
                placeholderTextColor={COLORS.textLight}
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>

            {/* Bank List */}
            <FlatList
              data={filteredBanks}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.bankItem,
                    selectedBank === item.value && styles.bankItemSelected
                  ]}
                  onPress={() => {
                    setSelectedBank(item.value);
                    setShowBankModal(false);
                    setSearchQuery('');
                  }}
                >
                  <View style={styles.bankIcon}>
                    <Ionicons name="business" size={24} color={COLORS.primary} />
                  </View>
                  <Text style={styles.bankLabel}>{item.label}</Text>
                  {selectedBank === item.value && (
                    <Ionicons name="checkmark-circle" size={24} color={COLORS.primary} />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeScreen>
  );
}

