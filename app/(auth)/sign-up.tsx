import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import { Link, useRouter } from "expo-router";
import React, { use, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "../../assets/styles/auth.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";


const SignUp = () => {
    // const {isLoaded, signUp, setActive} = useSignUp();
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [code, setCode] = useState('');
    const [error, setError] = useState('');


    if (verificationCode) {
        return (
            <View style={styles.verificationContainer}>
                <Text style={styles.verificationTitle}>Verify your email</Text>

                <TextInput
                    style={[styles.verificationInput, error && styles.errorInput]}
                    value={code}
                    placeholder="Enter your verification code"
                    placeholderTextColor="#9A8478"
                    onChangeText={(code) => setCode(code)}
                />

                <TouchableOpacity onPress={() => console.log("code")} style={styles.button}>
                    <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <KeyboardAwareScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
            enableOnAndroid={true}
            enableAutomaticScroll={true}
        >

            <View style={styles.container}>
                {/* <Text style={styles.wettext}>
            <Text>WetSpeed</Text>
        </Text> */}
                {/* <Image source={require("../../assets/images/revenue-i3.png")} style={styles.illustration} /> */}
                <Text style={{ marginTop: 30, ...styles.wettext }}>Create Account</Text>
                <Text style={{ marginTop: -19, position: 'relative', top: -20, margin: 'auto', ...styles.description }}>Join the WetSpeed community today!</Text>

                <View>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        style={[styles.input, error && styles.errorInput]}
                        autoCapitalize='none'
                        value={name}
                        placeholderTextColor="#9A8478"
                        placeholder='Enter your full name'
                        onChangeText={(name) => setName(name)}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput
                        style={[styles.input, error && styles.errorInput]}
                        autoCapitalize='none'
                        value={phone}
                        placeholderTextColor="#9A8478"
                        placeholder='Enter phone number'
                        onChangeText={(phone) => setPhone(phone)}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput
                        style={[styles.input, error && styles.errorInput]}
                        autoCapitalize='none'
                        value={email}
                        placeholderTextColor="#9A8478"
                        placeholder='Enter email Address'
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={[styles.input, error && styles.errorInput]}
                        autoCapitalize='none'
                        value={password}
                        placeholderTextColor="#9A8478"
                        placeholder='Enter password'
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>


                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>Already have an Account?</Text>

                    <TouchableOpacity onPress={() => router.back()}>
                        <Text style={styles.linkText}>Sign in</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </KeyboardAwareScrollView>
    );
};

export default SignUp;