// components/TransactionItem.tsx
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../assets/styles/home.styles';
import { COLORS } from '../constants/colors';

export const TransactionItem = ({ item, onDelete, selectedCurrency, currencySymbol }) => {
  const isPositive = item.amount > 0;
  
  // Get transaction icon based on type
  const getTransactionIcon = () => {
    switch (item.type) {
      case 'transfer':
        return 'paper-plane-outline';
      case 'receive':
        return 'download-outline';
      case 'income':
        return 'briefcase-outline';
      case 'expense':
        return 'card-outline';
      case 'swap':
        return 'repeat-outline';
      default:
        return isPositive ? 'add-circle-outline' : 'remove-circle-outline';
    }
  };

  // Get transaction category display
  const getTransactionCategory = () => {
    switch (item.type) {
      case 'transfer':
        return 'Money Sent';
      case 'receive':
        return 'Money Received';
      case 'income':
        return 'Income';
      case 'expense':
        return 'Expense';
      case 'swap':
        return 'Swap';
      default:
        return isPositive ? 'Credit' : 'Debit';
    }
  };

  // Get arrow direction based on transaction type
  const getArrowIcon = () => {
    if (isPositive) {
      // Positive transaction - arrow pointing down-left (incoming)
      return 'arrow-down-outline';
    } else {
      // Negative transaction - arrow pointing up-right (outgoing)
      return 'arrow-up-outline';
    }
  };

  // Get arrow color and rotation
  const getArrowStyle = () => {
    if (isPositive) {
      return {
        color: COLORS.income || '#22C55E',
        transform: [{ rotate: '-45deg' }], // Down-left direction
      };
    } else {
      return {
        color: COLORS.expense || '#EF4444',
        transform: [{ rotate: '45deg' }], // Up-right direction
      };
    }
  };

  return (
    <View style={styles.transactionCard} key={item.id}>
      <TouchableOpacity style={styles.transactionContent}>
        {/* Transaction Icon */}
        <View style={[
          styles.categoryIconContainer,
          { 
            backgroundColor: isPositive 
              ? 'rgba(34, 197, 94, 0.1)' 
              : 'rgba(239, 68, 68, 0.1)' 
          }
        ]}>
          <Ionicons 
            name={getTransactionIcon()} 
            size={20} 
            color={isPositive ? COLORS.income || '#22C55E' : COLORS.expense || '#EF4444'} 
          />
        </View>

        {/* Transaction Details */}
        <View style={styles.transactionLeft}>
          <Text style={styles.transactionTitle}>{item.title}</Text>
          <Text style={styles.transactionCategory}>
            {getTransactionCategory()}
          </Text>
          {item.description && (
            <Text style={[
              styles.transactionCategory, 
              { fontSize: 11, opacity: 0.7, marginTop: 2 }
            ]}>
              {item.description}
            </Text>
          )}
        </View>

        {/* Amount and Arrow */}
        <View style={styles.transactionRight}>
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            marginBottom: 4 
          }}>
            {/* Directional Arrow */}
            <View style={{
              width: 16,
              height: 16,
              borderRadius: 8,
              backgroundColor: isPositive 
                ? 'rgba(34, 197, 94, 0.15)' 
                : 'rgba(239, 68, 68, 0.15)',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 6,
            }}>
              <Ionicons 
                name={getArrowIcon()} 
                size={10} 
                style={getArrowStyle()}
              />
            </View>
            
            {/* Amount */}
            <Text style={[
              styles.transactionAmount, 
              { 
                color: isPositive 
                  ? COLORS.income || '#22C55E' 
                  : COLORS.expense || '#EF4444',
                fontWeight: '600'
              }
            ]}>
              {isPositive ? '+' : ''}{currencySymbol || '$'}{Math.abs(item.amount).toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </Text>
          </View>
          
          {/* Date */}
          <Text style={styles.transactionDate}>
            {new Date(item.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </Text>
        </View>
      </TouchableOpacity>


    </View>
  );
};