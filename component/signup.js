import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [businessName, setBusinessName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('Food');
  const [location, setLocation] = useState('Purok 7 - Barangay Demo');
  const [role, setRole] = useState('Business Owner');

  const handleSignUp = () => {
    // Navigate to LoginScreen after sign up
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Business Owner</Text>
      <TouchableOpacity style={styles.imageContainer}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.image} />
        <FontAwesome name="camera" size={24} color="green" style={styles.cameraIcon} />
      </TouchableOpacity>

      <View style={styles.inputGroup}>
        <FontAwesome name="user" size={24} color="green" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Business name"
          value={businessName}
          onChangeText={setBusinessName}
        />
      </View>

      <View style={styles.inputGroup}>
        <FontAwesome name="user" size={24} color="green" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputGroup}>
        <FontAwesome name="lock" size={24} color="green" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.inputGroup}>
        <FontAwesome name="user" size={24} color="green" style={styles.icon} />
        <Picker
          selectedValue={role}
          style={styles.picker}
          onValueChange={(itemValue) => setRole(itemValue)}>
          <Picker.Item label="Business Owner" value="Business Owner" />
          <Picker.Item label="Customer" value="Customer" />
        </Picker>
      </View>

      <View style={styles.inputGroup}>
        <FontAwesome name="envelope" size={24} color="green" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputGroup}>
        <FontAwesome name="industry" size={24} color="green" style={styles.icon} />
        <Picker
          selectedValue={businessType}
          style={styles.picker}
          onValueChange={(itemValue) => setBusinessType(itemValue)}>
          <Picker.Item label="Food" value="Food" />
          <Picker.Item label="Retail" value="Retail" />
          <Picker.Item label="Services" value="Services" />
        </Picker>
      </View>

      <View style={styles.inputGroup}>
        <FontAwesome name="map-marker" size={24} color="green" style={styles.icon} />
        <Picker
          selectedValue={location}
          style={styles.picker}
          onValueChange={(itemValue) => setLocation(itemValue)}>
          <Picker.Item label="Purok 7 - Barangay Demo" value="Purok 7 - Barangay Demo" />
          <Picker.Item label="Purok 8 - Barangay Demo" value="Purok 8 - Barangay Demo" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
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
  picker: {
    flex: 1,
    paddingLeft: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  signUpButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;