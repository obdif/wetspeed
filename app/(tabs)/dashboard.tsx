// app/(tabs)/dashboard.tsx (updated version)
import { useRouter } from 'expo-router';
import {
  Alert,
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useEffect, useState } from 'react';
import { COLORS } from '@/constants/colors';
import PageLoader from '../../components/PageLoader';
import { styles } from '../../assets/styles/home.styles';
import { Ionicons } from '@expo/vector-icons';
import { BalanceCard } from '../../components/BalanceCard';
import { TransactionItem } from '../../components/TransactionItem';
import NoTransactionsFound from '../../components/NoTransactionsFound';

// Mock data for demo purposes - updated with transaction types
const demoTransactions = [
  { 
    id: '1', 
    title: 'John Michael', 
    amount: -500.0, 
    date: '2025-08-24',
    type: 'transfer',
  },
  { 
    id: '2', 
    title: 'USD to NGN Swap', 
    amount: -1600.00, 
    date: '2025-08-24',
    type: 'swap',
  },
  { 
    id: '3', 
    title: 'Adekunle Blessing', 
    amount: 2000.0, 
    date: '2025-08-23',
    type: 'receive',
  },
  { 
    id: '4', 
    title: 'Sarah Wilson', 
    amount: 150.0, 
    date: '2025-08-18',
    type: 'receive',
  },
  { 
    id: '5', 
    title: 'USD to NGN Swap', 
    amount: -1500.99, 
    date: '2025-08-24',
    type: 'swap',
  },
];

const demoSummary = {
  income: 4000.0,
  expenses: 561.49,
  balance: 3949.5,
};

// Exchange rates for currency conversion
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

export default function Dashboard() {
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const [transactions, setTransactions] = useState(demoTransactions);
  const [summary, setSummary] = useState(demoSummary);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const convertCurrency = (amount) => {
    return amount * exchangeRates[selectedCurrency];
  };

  const getExchangeRate = () => {
    if (selectedCurrency === 'USD') return null;
    return exchangeRates[selectedCurrency];
  };

  const convertedTransactions = transactions.map((transaction) => ({
    ...transaction,
    amount: convertCurrency(transaction.amount),
  }));

  const loadData = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setTransactions(demoTransactions);
    setSummary(demoSummary);
    setIsLoading(false);
  };



  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  useEffect(() => {
    loadData();
  }, []);


  if (isLoading && !refreshing) return <PageLoader />;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.profile}>
              <Image
                source={require('../../assets/images/profile2.jpg')}
                style={styles.profileImage}
                resizeMode="contain"
              />
            </View>
          
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>
                Hello, <Text style={styles.usernameText}>Blessing!</Text>
              </Text>
              <TouchableOpacity>
                <Ionicons name="notifications" size={20} color={COLORS.text} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Pass the raw summary and handle currency conversion in BalanceCard */}
        <BalanceCard 
          summary={summary} 
          onCurrencyChange={handleCurrencyChange}
        />

        <View style={styles.transactionsHeaderContainer}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          {getExchangeRate() && (
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: COLORS.card,
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 12,
            }}>
              <Ionicons name="swap-horizontal-outline" size={12} color={COLORS.textLight} />
              <Text style={{
                fontSize: 10,
                color: COLORS.textLight,
                marginLeft: 4,
                fontWeight: '500'
              }}>
                1 USD = {getExchangeRate().toLocaleString()} {selectedCurrency}
              </Text>
            </View>
          )}
        </View>
      </View>

      <FlatList
        style={styles.transactionsList}
        contentContainerStyle={styles.transactionsListContent}
        data={convertedTransactions}
        renderItem={({ item }) => (
          <TransactionItem 
            item={item} 
            selectedCurrency={selectedCurrency}
            currencySymbol={currencySymbols[selectedCurrency]}
          />
        )}
        ListEmptyComponent={<NoTransactionsFound />}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
}