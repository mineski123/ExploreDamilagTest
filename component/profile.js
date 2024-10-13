import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MyAccountScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Ionicons name="menu" size={28} color="black" style={styles.menuIcon} />
        <TouchableOpacity>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Info Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>James Naismith</Text>
        <Text style={styles.profileEmail}>james.naismith@example.com</Text>
      </View>

      {/* Account Details Section */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Ionicons name="person" size={24} color="black" />
          <Text style={styles.detailText}>Name</Text>
          <Text style={styles.detailValue}>Ralph Edwards</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="mail" size={24} color="black" />
          <Text style={styles.detailText}>Email</Text>
          <Text style={styles.detailValue}>james.naismith@example.com</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="globe" size={24} color="black" />
          <Text style={styles.detailText}>Language</Text>
          <Text style={styles.detailValue}>English</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="notifications" size={24} color="black" />
          <Text style={styles.detailText}>Notification</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#4CAF50',
  },
  menuIcon: {
    marginLeft: 10,
  },
  editText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: 'gray',
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  detailText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  detailValue: {
    fontSize: 16,
    color: 'gray',
  },
});

export default MyAccountScreen;