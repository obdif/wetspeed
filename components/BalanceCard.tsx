import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../assets/styles/home.styles';
import { COLORS } from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

const exchangeRates = {
  USD: 1.0,
  EUR: 0.85,
  GBP: 0.73,
  NGN: 1500.0, 
};

const currencySymbols = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  NGN: '₦',
};

const currencyFlags = {
  USD: '🇺🇸',
  EUR: '🇪🇺',
  GBP: '🇬🇧',
  NGN: '🇳🇬',
};

export const BalanceCard = ({ summary, onCurrencyChange }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('USD');
  const [items, setItems] = useState([
    {
      label: 'USD ($)',
      value: 'USD',
      icon: () => <Text style={{ fontSize: 16 }}>🇺🇸</Text>
    },
    {
      label: 'EUR (€)',
      value: 'EUR',
      icon: () => <Text style={{ fontSize: 16 }}>🇪🇺</Text>
    },
    {
      label: 'GBP (£)',
      value: 'GBP',
      icon: () => <Text style={{ fontSize: 16 }}>🇬🇧</Text>
    },
    {
      label: 'NGN (₦)',
      value: 'NGN',
      icon: () => <Text style={{ fontSize: 16 }}>🇳🇬</Text>
    },
  ]);

  // Update selectedCurrency when dropdown value changes
  useEffect(() => {
    if (value) {
      setSelectedCurrency(value);
      // Notify parent component about currency change
      if (onCurrencyChange) {
        onCurrencyChange(value);
      }
    }
  }, [value, onCurrencyChange]);

  const convertCurrency = (amount) => {
    return amount * exchangeRates[selectedCurrency];
  };

  const convertedSummary = {
    income: convertCurrency(summary.income),
    expenses: convertCurrency(summary.expenses),
    balance: convertCurrency(summary.balance),
  };

  const getCurrentCurrencySymbol = () => {
    return currencySymbols[selectedCurrency] || '$';
  };

  const getCurrentFlag = () => {
    return currencyFlags[selectedCurrency] || '🇺🇸';
  };

  // Action handlers
  const handleSend = () => {
    console.log('Send money pressed');
    // Add your send money logic here
  };

  const handleAddMoney = () => {
    console.log('Add money pressed');
    // Add your add money logic here
  };

  const handleConvert = () => {
    console.log('Convert currency pressed');
    // Add your convert currency logic here
  };

  const handleWithdraw = () => {
    console.log('Withdraw pressed');
    // Add your withdraw logic here
  };

  return (
    <View style={styles.balanceCard}>

      <View style={styles.balanceGrid}>
      {/* Balance Header */}
      <View style={styles.balanceHeader}>
        <Text style={styles.balanceTitle}>Total Balance</Text>
      </View>


      {/* Currency Selector */}
      <View style={{ marginBottom: 1, ...styles.currencyContainer}}>
        <View>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            theme="DARK"
            multiple={false}
            placeholder=""
            showArrowIcon={true}
            showTickIcon={true}
            dropDownContainerStyle={{
              backgroundColor: COLORS.card,
              borderColor: COLORS.border,
              borderRadius: 8,
              marginTop: 5,
              width: "100%"
            }}
            style={{
              backgroundColor: 'transparent',
              borderColor: COLORS.border,
              borderRadius: 8,
              minHeight: 30,
              width: "90%",
              alignItems: "center",
              justifyContent: "center",
            }}
            textStyle={{
              color: COLORS.text,
              fontSize: 14,
              fontWeight: '500',
            }}
            arrowIconStyle={{
              width: 15,
              height: 15,
            }}
            tickIconStyle={{
              width: 15,
              height: 15,
            }}
            labelStyle={{
              fontWeight: '500',
            }}
            listItemLabelStyle={{
              color: COLORS.text,
            }}
            selectedItemLabelStyle={{
              fontWeight: 'bold',
            }}
          />
        </View>
      </View>

      </View>

      {/* Balance Amount and Eye Icon */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 0 }}>
        <Text style={styles.balanceAmount}>
          {getCurrentCurrencySymbol()}{convertedSummary.balance.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}
        </Text>

        <TouchableOpacity>
          <Ionicons name="eye" size={20} color={COLORS.text} />
        </TouchableOpacity>
      </View>

      {/* Action Buttons */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: -10,
        // borderTopWidth: 1,
        // borderTopColor: COLORS.border,
      }}>
        {/* Send Button */}
        <TouchableOpacity 
          style={{
            alignItems: 'center',
            flex: 1,
            paddingVertical: 4,
          }}
          onPress={handleSend}
        >
          <View style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: 'rgba(74, 144, 226, 0.15)',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 2,
          }}>
            <Ionicons name="paper-plane-outline" size={30} color={COLORS.primary || '#4A90E2'} />
          </View>
          <Text style={{
            fontSize: 12,
            color: COLORS.textLight,
            fontWeight: '500',
            textAlign: 'center',
          }}>Send</Text>
        </TouchableOpacity>

        {/* Add Money Button */}
        <TouchableOpacity 
          style={{
            alignItems: 'center',
            flex: 1,
            paddingVertical: 4,
          }}
          onPress={handleAddMoney}
        >
          <View style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: 'rgba(34, 197, 94, 0.15)',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 2,
          }}>
            <Ionicons name="add-circle-outline" size={30} color={COLORS.income || '#22C55E'} />
          </View>
          <Text style={{
            fontSize: 12,
            color: COLORS.textLight,
            fontWeight: '500',
            textAlign: 'center',
          }}>Add Money</Text>
        </TouchableOpacity>

        {/* Convert Button */}
        <TouchableOpacity 
          style={{
            alignItems: 'center',
            flex: 1,
            paddingVertical: 4,
          }}
          onPress={handleConvert}
        >
          <View style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: 'rgba(245, 158, 11, 0.15)',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 2,
          }}>
            <Ionicons name="swap-horizontal-outline" size={30} color="#F59E0B" />
          </View>
          <Text style={{
            fontSize: 12,
            color: COLORS.textLight,
            fontWeight: '500',
            textAlign: 'center',
          }}>Convert</Text>
        </TouchableOpacity>

        {/* Withdraw Button */}
        <TouchableOpacity 
          style={{
            alignItems: 'center',
            flex: 1,
            paddingVertical: 4,
          }}
          onPress={handleWithdraw}
        >
          <View style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: 'rgba(239, 68, 68, 0.15)',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 2,
          }}>
            <Ionicons name="card-outline" size={30} color={COLORS.expense || '#EF4444'} />
          </View>
          <Text style={{
            fontSize: 12,
            color: COLORS.textLight,
            fontWeight: '500',
            textAlign: 'center',
          }}>Withdraw</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};