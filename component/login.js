import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox, Alert, Image } from 'react-native';
import { FontAwesome, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleLogin = () => {
        // Check if username and password are not empty
        if (username && password) {
            // Navigate to WelcomeScreen after login
            navigation.navigate('WelcomeScreen');
        } else {
            Alert.alert('Please enter both username and password.');
        }
    };

    const handleSignUp = () => {
        // Navigate to SignUpScreen
        navigation.navigate('SignUpScreen');
    };
    

    const handleForgotPassword = () => {
        Alert.alert('Forgot Password link clicked!');
    };

    const handleBusinessOwner = () => {
        Alert.alert('Business Owner link clicked!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            <Text>Welcome to!</Text>
            <Image source={require('../assets/Exploredamilag.png')} style={styles.logo} />

            <View style={styles.inputGroup}>
                <FontAwesome name="user" size={24} color="#aaa" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>

            <View style={styles.inputGroup}>
                <FontAwesome5 name="lock" size={24} color="#aaa" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.togglePassword}>
                    <FontAwesome5 name={isPasswordVisible ? "eye-slash" : "eye"} size={24} color="#aaa" />
                </TouchableOpacity>
            </View>

            <View style={styles.rememberMeContainer}>
                <CheckBox value={rememberMe} onValueChange={setRememberMe} />
                <Text style={styles.rememberMeText}>Remember me</Text>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                <Text style={styles.loginButtonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.link}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleBusinessOwner}>
                <Text style={styles.link}>If you are a business owner, Click Here!</Text>
            </TouchableOpacity>

            <View style={styles.socialLoginContainer}>
                <Text style={styles.socialLoginText}>Or Connect with</Text>
                <View style={styles.socialIcons}>
                    <TouchableOpacity>
                        <FontAwesome name="facebook" size={32} color="#3b5998" style={styles.socialIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign name="google" size={32} color="#db4437" style={styles.socialIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="instagram" size={32} color="#c32aa3" style={styles.socialIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    header: {
        fontSize: 24,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    subHeader: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        position: 'relative',
        width: '100%',
    },
    input: {
        flex: 1,
        padding: 10,
        paddingLeft: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    icon: {
        position: 'absolute',
        left: 10,
    },
    togglePassword: {
        position: 'absolute',
        right: 10,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    rememberMeText: {
        marginLeft: 10,
    },
    loginButton: {
        width: '100%',
        padding: 15,
        backgroundColor: '#28a745',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    signUpButton: {
        width: '100%',
        padding: 15,
        backgroundColor: '#28a745',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15,
    },
    linksContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    link: {
        color: '#007bff',
        textDecorationLine: 'underline',
        marginBottom: 10,
    },
    socialLoginContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    socialLoginText: {
        marginBottom: 10,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    socialIcon: {
        marginHorizontal: 10,
    },
});