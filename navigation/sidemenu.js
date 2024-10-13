import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SideMenu = ({ toggleMenu }) => {
  return (
    <View style={styles.sideMenu}>
      <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>&times;</Text>
      </TouchableOpacity>
      <View style={styles.menuItems}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>👤 My Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>🔗 Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>❓ Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>⚙️ Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>🚪 Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sideMenu: {
    height: '100%',
    width: 250,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#28A745',
    padding: 20,
    flexDirection: 'column',
    borderTopRightRadius: 100,
    zIndex: 102, // Ensure it appears above other content
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 24,
  },
  menuItems: {
    marginTop: 40,
  },
  menuItem: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default SideMenu;