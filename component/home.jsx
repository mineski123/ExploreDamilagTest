import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRight}>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }}
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.greetingText}>Hi, Clyde!</Text>
        <Text style={styles.exploreText}>Explore Damilag</Text>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search places, food, or services..."
          />
        </View>

        {/* Featured Attractions */}
        <Text style={styles.sectionTitle}>Featured Attractions</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
          {[1, 2, 3, 4].map((item) => (
            <View key={item} style={styles.card}>
              <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Attraction {item}</Text>
              <Text style={styles.cardSubtitle}>Description {item}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Additional Sections (Food, Hotels, Services, Transportation) */}
        <Text style={styles.sectionTitle}>Food</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
          {[1, 2, 3, 4].map((item) => (
            <View key={item} style={styles.card}>
              <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Food {item}</Text>
              <Text style={styles.cardSubtitle}>Description {item}</Text>
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
    backgroundColor: '#32a852',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 15,
  },
  headerLeft: {
    justifyContent: 'center',
  },
  headerRight: {
    justifyContent: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  contentContainer: {
    flexGrow: 1, // Use flexGrow to ensure content expands and is scrollable
    paddingHorizontal: 15,
    paddingBottom: 50, // Add padding at bottom to ensure content isn't cut off
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  exploreText: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
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
  cardSubtitle: {
    fontSize: 14,
    color: 'gray',
    marginHorizontal: 5,
    marginBottom: 5,
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
    backgroundColor: '#32a852',
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

export default Home;
