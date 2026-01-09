// app/(tabs)/transactions.tsx
import React, {useState} from 'react';
import { Text, View, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from '../../assets/styles/home.styles';
import { TransactionItem } from '../../components/TransactionItem';
import NoTransactionsFound from '../../components/NoTransactionsFound';
import SafeScreen from '@/components/SafeScreen';

const demoTransactions = [
  { 
    id: '1', 
    title: 'John Michael', 
    amount: -500.0, 
    date: '2025-08-24',
    type: 'transfer',
    status: 'successful'
  },
  { 
    id: '2', 
    title: 'USD to NGN Swap', 
    amount: -1600.00, 
    date: '2025-08-24',
    type: 'swap',
    status: 'successful'
  },
  { 
    id: '3', 
    title: 'Adekunle Blessing', 
    amount: 2000.0, 
    date: '2025-08-23',
    type: 'receive',
    status: 'successful'
  },
  { 
    id: '4', 
    title: 'Sarah Wilson', 
    amount: 150.0, 
    date: '2025-08-18',
    type: 'receive',
    status: 'pending'
  },
  { 
    id: '5', 
    title: 'Adekunle Blessing', 
    amount: 2000.0, 
    date: '2025-08-23',
    type: 'receive',
    status: 'successful'
  },
  { 
    id: '6', 
    title: 'Sarah Wilson', 
    amount: 150.0, 
    date: '2025-08-18',
    type: 'receive',
    status: 'pending'
  },
    { 
    id: '7', 
    title: 'USD to NGN Swap', 
    amount: -1500.99, 
    date: '2025-08-24',
    type: 'swap',
    status: 'failed'
  },
  { 
    id: '8', 
    title: 'Adekunle Blessing', 
    amount: 2000.0, 
    date: '2025-08-23',
    type: 'receive',
    status: 'successful'
  },
  { 
    id: '9', 
    title: 'Sarah Wilson', 
    amount: 150.0, 
    date: '2025-08-18',
    type: 'receive',
    status: 'pending'
  },
  { 
    id: '10', 
    title: 'USD to NGN Swap', 
    amount: -1500.99, 
    date: '2025-08-24',
    type: 'swap',
    status: 'failed'
  },
];

const transactionTypes = {
  allCategories: 'All Categories',
  transfer: 'Transfer',
  swap: 'Swap',
  deposit: 'Deposit',
  receive: 'Receive',
  fee: 'Network Fees',
};

const transactionStatus = {
  allStatus: 'All Status',
  pending: 'Pending',
  successful: 'Successful',
  failed: 'Failed',
  received: 'Received',
};

const filterOptions = {
  categories: Object.values(transactionTypes),
  status: Object.values(transactionStatus),
};

// Currency symbols mapping
const currencySymbols = {
  USD: '$',
  NGN: '₦',
  EUR: '€',
  GBP: '£',
};

export default function Transactions() {
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const [transactions, setTransactions] = useState(demoTransactions);
  const [selectedCurrency, setSelectedCurrency] = useState('USD'); // Default currency

  // Category dropdown state
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [categoryValue, setCategoryValue] = useState('All Categories');
  const [categoryItems, setCategoryItems] = useState(
    filterOptions.categories.map((category) => ({ label: category, value: category }))
  );

  // Status dropdown state
  const [statusOpen, setStatusOpen] = useState(false);
  const [statusValue, setStatusValue] = useState('All Status');
  const [statusItems, setStatusItems] = useState(
    filterOptions.status.map((status) => ({ label: status, value: status }))
  );

  // Filter transactions based on selected category and status
  const filteredTransactions = transactions.filter(transaction => {
    const matchesCategory = categoryValue === 'All Categories' || transaction.type === categoryValue.toLowerCase();
    const matchesStatus = statusValue === 'All Status' || transaction.status === statusValue.toLowerCase();
    return matchesCategory && matchesStatus;
  });

  // Refresh handler
  const onRefresh = () => {
    setRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <SafeScreen edges={['top', 'left', 'right']}>
    <View style={styles.transactionContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', }}>Transactions</Text>
        <TouchableOpacity onPress={() => console.log('Download pressed')} style={{ marginLeft: 'auto' }}>
          <Text style={{ color: COLORS.primary }}>Download</Text>
        </TouchableOpacity>
      </View>

      <View style={{ zIndex: 1000,  ...styles.categoriesStatusContainer }}>
        {/* Category Dropdown */}
        <View style={{  zIndex: categoryOpen ? 1000 : 1,...styles.categoriesStatus }}>
          <DropDownPicker
            open={categoryOpen}
            value={categoryValue}
            items={categoryItems}
            setOpen={setCategoryOpen}
            setValue={setCategoryValue}
            setItems={setCategoryItems}
            placeholder="All Categories"
            style={{
              backgroundColor: 'transparent',
              borderColor: COLORS.primary,
              borderRadius: 8,
              minHeight: 35,
              alignItems: "center",
              justifyContent: "center",
            }}
            dropDownContainerStyle={{
              backgroundColor: COLORS.card,
              borderColor: COLORS.border,
              borderRadius: 8,
              marginTop: 5,
              width: "100%"
            }}        
          />
        </View>

        {/* Status Dropdown */}
        <View style={{ zIndex: statusOpen ? 1000 : 1, ...styles.categoriesStatus }}>
          <DropDownPicker
            open={statusOpen}
            value={statusValue}
            items={statusItems}
            setOpen={setStatusOpen}
            setValue={setStatusValue}
            setItems={setStatusItems}
            placeholder="All Status"
            style={{
              backgroundColor: 'transparent',
              borderColor: COLORS.primary,
              borderRadius: 8,
              minHeight: 35,
              alignItems: "center",
              justifyContent: "center",
            }}
            dropDownContainerStyle={{
              backgroundColor: COLORS.card,
              borderColor: COLORS.border,
              borderRadius: 8,
              marginTop: 5,
              width: "100%"
            }}    
          />
        </View>
      </View>

      <FlatList
        style={{ flexGrow: 1 }}
        contentContainerStyle={styles.transactionsListContent}
        data={filteredTransactions}
        keyExtractor={(item) => item.id}
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
    </SafeScreen>
  );
}