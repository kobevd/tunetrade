// Dropdown.js
import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure to install this package

const Dropdown = ({ onValueChange, items, placeholder, value }) => (
  <View style={styles.dropdownContainer}>
    <RNPickerSelect
      onValueChange={onValueChange}
      items={items}
      style={pickerSelectStyles}
      useNativeAndroidPickerStyle={false}
      placeholder={placeholder}
      value={value}
      Icon={() => {
        return <Icon name="md-arrow-down" size={20} color="white" />;
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  dropdownContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: 8,
    minWidth: 150,
    marginHorizontal: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 4,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: 'transparent',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
 
    borderRadius: 8,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: 'transparent',
  },
  iconContainer: {
    top: Platform.OS === 'ios' ? 5 : 15,
    right: 15,
  },
});

export default Dropdown;
