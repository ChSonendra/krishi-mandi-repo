// ProfileScreen.js
import React, { useState,useEffect } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { store } from '../redux/store';
import { makeApiRequest } from '../services/api';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose any icon library you prefer
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('John Doe');
  const [address, setAddress] = useState([]);
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('555-1234');
  const state=store.getState()
  useEffect(() => {
    const mobileNumber = '9477245638';
    let completeObject = {
      mobileNumber: mobileNumber,
    };
    makeApiRequest(
      'consumer/getUserProfile',
      'POST',
      completeObject,
      state?.userData?.userData
    ).then(response => {
      console.log(response);
      // if (response.apiResponseData.status === 'success') {
        setName(response.apiResponseData.name);
        setEmail(response.apiResponseData.email);
        setPhone(response.apiResponseData.mobile);
        const addressesArray = Object.values(response?.apiResponseData?.addresses);
        console.log(addressesArray);
        setAddress(addressesArray);
      // }
    
    })
  }, [])
  const handleEditProfile = () => {
    navigation.navigate('EditProfile', {
      name,
      address,
      email,
      phone,
      onSave: handleSaveChanges,
    });
  };

  const handleSaveChanges = (newName,  newEmail, newPhone) => {
    setName(newName);
    setEmail(newEmail);
    setPhone(newPhone);
    let completeObject = {
      name:newName
    };
    let Body = {
      email:newEmail
    };
    makeApiRequest(
      'consumer/setEmail',
      'POST',
      Body,
      state?.userData?.userData,
    ).then(response => {
      console.log(response.apiResponseData);
 
  
    });
    makeApiRequest(
      'consumer/setName',
      'POST',
      completeObject,
      state?.userData?.userData,
    ).then(response => {
      console.log(response.apiResponseData);
 
  
    });
  };
  const handleAddAddress = (newAddress) => {
 
    console.log('New Address Added:', newAddress);
    let Body = {
    
      address: newAddress,
    };
      setAddress(newAddress)

  
    makeApiRequest(
      'consumer/addAddress',
      'POST',
      Body,
      state?.userData?.userData,
    ).then(response => {
      console.log(response.apiResponseData);
 
      // setAddress(newAddress)
  
    });
  };
  const getInitials = (fullName) => {
    const names = fullName.split(' ');
    return names.map((name) => name[0]).join('').toUpperCase();
  };
  const renderAddressCard = (address,id) => (
    <Card key={id} style={styles.addressCard}>
      <Card.Content>
        <Title>{address.address}</Title>
        <Paragraph>{address.street} {address.city}, {address.pin}</Paragraph>
      </Card.Content>
      <Card.Actions style={styles.cardActions}>
      <Icon name="trash-o" size={18} color="#ff4d4d" />

        {/* <IconButton icon="delete" onPress={() => handleRemoveAddress(address.id)} /> */}
      </Card.Actions>
    </Card>
  );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={handleEditProfile} style={styles.editButtonContainer}>
          <Title style={styles.editButtonText}>Edit</Title>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEditProfile}>
          <Avatar.Text style={styles.avatar} label={getInitials(name)} size={100} />
        </TouchableOpacity>
        <Title style={styles.title}>{name}</Title>
        <Paragraph style={styles.text}>Email: {email}</Paragraph>
        {/* <Paragraph style={styles.text}>Address:{address?.address} {address.city} {address.street} {address.pin}</Paragraph> */}
        <Paragraph style={styles.text}>Phone: {phone}</Paragraph>
        
      </View>

      <Divider style={styles.divider} />

      <View style={styles.addressSection}>
        <Title style={styles.sectionTitle}>Addresses</Title>
        {/* Render addresses here */}
        {/* Example: */}
        {address.map((address,id) => renderAddressCard(address,id))}
        {/* <View style={styles.addressItem}>
          <Paragraph style={styles.addressText}>456 Park Ave, Townsville</Paragraph>
        </View> */}
        {/* Add more addresses as needed */}
        <Button icon="plus" mode="outlined"  onPress={() => navigation.navigate('Address', { onAddAddress: handleAddAddress })} style={styles.addButton}>
          Add Address
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addressCard: {
    marginBottom: 16,
    backgroundColor:'white'
  },
  cardActions: {
    justifyContent: 'flex-end',
  },
    editButtonContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 10,
      },
      editButtonText: {
        color: 'gray',
        fontWeight: 'bold',
      },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  avatar: {
    backgroundColor: 'lightgrey',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
  divider: {
    height: 1,
    backgroundColor: 'lightgrey',
  },
  addressSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  addressItem: {
    marginBottom: 8,
  },
  addressText: {
    fontSize: 16,
  },
  addButton: {
    marginTop: 16,
    borderColor: 'green',
  },
});

export default ProfileScreen;
