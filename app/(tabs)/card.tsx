import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/colors';
import { styles } from '../../assets/styles/card.styles';
import SafeScreen from '@/components/SafeScreen';

interface CardProps {
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  cvv?: string;
  bankName?: string;
  cardType?: string;
  balance?: string;
  currency?: string;
}

const Card: React.FC<CardProps> = ({
  cardNumber = '4532 1234 5678 9012',
  cardHolder = 'Adekunle Blessing',
  expiryDate = '12/28',
  cvv = '123',
  bankName = 'WetSpeed',
  cardType = 'VISA',
  balance = '5,000.00',
  currency = 'USD',
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;

  const flipCard = () => {
    const toValue = isFlipped ? 0 : 1;

    Animated.timing(flipAnimation, {
      toValue,
      duration: 600,
      useNativeDriver: true,
    }).start();

    setIsFlipped(!isFlipped);
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });

  const formatCardNumber = (number: string) => {
    return number.replace(/(.{4})/g, '$1 ').trim();
  };

  const getCurrencySymbol = (curr: string) => {
    const symbols: { [key: string]: string } = {
      USD: '$',
      NGN: '₦',
      EUR: '€',
      GBP: '£',
    };
    return symbols[curr] || '$';
  };

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
    backfaceVisibility: 'hidden' as 'hidden',
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
    backfaceVisibility: 'hidden' as 'hidden',
  };

  return (
    <SafeScreen edges={['top', 'left', 'right']}>
      <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      {/* Card Container */}
      <View style={styles.cardContainer}>
        <TouchableOpacity activeOpacity={0.8} onPress={flipCard}>
          {/* Front Side */}
          <Animated.View style={[styles.cardFace, frontAnimatedStyle]}>
            {/* Gradient Background */}
            <View style={styles.gradientBackground}>
              {/* Top Section */}
              <View style={styles.cardTop}>
                <View style={styles.topLeft}>
                  <Ionicons name="wifi" size={24} color={COLORS.white} style={styles.wifiIcon} />
                  <View style={styles.chipContainer}>
                    <View style={styles.chip} />
                  </View>
                </View>
                <View style={styles.topRight}>
                  <Text style={styles.bankName}>{bankName}</Text>
                  <Text style={styles.cardType}>{cardType}</Text>
                </View>
              </View>

              {/* Card Number */}
              <View style={styles.cardNumberContainer}>
                <Text style={styles.cardNumber}>
                  {formatCardNumber(cardNumber)}
                </Text>
              </View>

              {/* Bottom Section */}
              <View style={styles.cardBottom}>
                <View style={styles.cardHolderSection}>
                  <Text style={styles.label}>CARD HOLDER</Text>
                  <Text style={styles.cardHolderName}>{cardHolder}</Text>
                </View>
                <View style={styles.expirySection}>
                  <Text style={styles.label}>EXPIRES</Text>
                  <Text style={styles.expiryDate}>{expiryDate}</Text>
                </View>
              </View>

              {/* Decorative Elements */}
              <View style={styles.decorativeCircle1} />
              <View style={styles.decorativeCircle2} />
              <View style={styles.decorativeLine} />
            </View>
          </Animated.View>

          {/* Back Side */}
          <Animated.View style={[styles.cardFace, backAnimatedStyle]}>
            <View style={styles.gradientBackgroundBack}>
              {/* Magnetic Strip */}
              <View style={styles.magneticStrip} />

              {/* Signature Strip and CVV */}
              <View style={styles.backContent}>
                <View style={styles.signatureStrip}>
                  <View style={styles.cvvContainer}>
                    <Text style={styles.cvvText}>{cvv}</Text>
                  </View>
                </View>

                <Text style={styles.signatureLabel}>
                  AUTHORIZED SIGNATURE - NOT VALID UNLESS SIGNED
                </Text>

                <View style={styles.customerServiceInfo}>
                  <Text style={styles.customerServiceText}>
                    Customer Service: 1-800-XXX-XXXX
                  </Text>

                  <Text style={styles.termsText}>
                    Use of this card means you accept {bankName}'s terms.
                  </Text>
                </View>

                <View style={styles.backBranding}>
                  <Text style={styles.backBankName}>{bankName}</Text>
                  <Text style={styles.backCardType}>{cardType}</Text>
                </View>
              </View>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </View>

      {/* Card Information Panel */}
      <View style={styles.infoCard}>
        <View style={styles.infoHeader}>
          <Ionicons name="card" size={20} color={COLORS.primary} />
          <Text style={styles.infoTitle}>Account Information</Text>
        </View>

        <View style={styles.infoGrid}>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Account Number</Text>
              <Text style={styles.infoValue}>{cardNumber}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Card Type</Text>
              <Text style={styles.infoValue}>{cardType} Credit</Text>
            </View>
          </View>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Status</Text>
              <Text style={[styles.infoValue, styles.statusActive]}>Active</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Credit Limit</Text>
              <Text style={styles.infoValue}>{getCurrencySymbol(currency)}{balance}</Text>
            </View>
          </View>

        </View>
      </View>

      {/* Control Panel */}
      <View style={styles.controlPanel}>
        <TouchableOpacity style={styles.flipButton} onPress={flipCard}>
          <Ionicons
            name={isFlipped ? "eye" : "eye-off"}
            size={18}
            color={COLORS.white}
          />
          <Text style={styles.flipButtonText}>
            {isFlipped ? 'View Front' : 'View Back'}
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Request USD Card
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
    </SafeScreen>
  );
};

export default Card;