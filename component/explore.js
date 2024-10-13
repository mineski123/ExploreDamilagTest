import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.greetingText}>Hi, Clyde!</Text>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }}
          style={styles.profileImage}
        />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search places, food, or services..."
        />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Featured Attractions */}
        <Text style={styles.sectionTitle}>Featured Attractions</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
          {[1, 2, 3, 4].map((item) => (
            <View key={item} style={styles.card}>
              <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Attraction {item}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Food Section */}
        <Text style={styles.sectionTitle}>Food</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
          {[1, 2, 3, 4].map((item) => (
            <View key={item} style={styles.card}>
              <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Food {item}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Hotels and Accommodations Section */}
        <Text style={styles.sectionTitle}>Hotels and Accommodations</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
          {[1, 2, 3, 4].map((item) => (
            <View key={item} style={styles.card}>
              <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Hotel {item}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Other Services Section */}
        <Text style={styles.sectionTitle}>Other Services</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
          {[1, 2, 3, 4].map((item) => (
            <View key={item} style={styles.card}>
              <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Service {item}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Transportation Section */}
        <Text style={styles.sectionTitle}>Transportation</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
          {[1, 2, 3, 4].map((item) => (
            <View key={item} style={styles.card}>
              <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Transport {item}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Footer Section */}
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Cultural Exhibition</Text>
          <Text style={styles.footerDescription}>
            "Working to bring respect, understanding, inclusivity, and peace through cultural events and programs."
          </Text>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Read more</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 20,
    backgroundColor: 'white',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  contentContainer: {
    paddingHorizontal: 15,
    paddingBottom: 50,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  horizontalScrollView: {
    marginBottom: 20,
  },
  card: {
    width: 150,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
  },
  footerContainer: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footerDescription: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  footerButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  footerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ExploreScreen;