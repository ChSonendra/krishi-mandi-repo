import React, { useState,useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Modal, Text,Image,Platform} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Drawer, TouchableRipple, Switch, IconButton,Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { makeApiRequest } from '../services/api';
import { store } from '../redux/store';
import { CLEARSTORE } from '../redux/Actions/actionLogout';
const CustomDrawerContent = (props) => {
  const { navigation } = props;
  const state=store.getState()
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Your Name');
  const [email, setEmail] = useState('YourEmail@example.com');
  const [modalVisible, setModalVisible] = useState(false);
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
    // }
  
  })
}, [])

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = () => {
    // Implement logic to save changes to name and email
    setIsEditing(false);
    setModalVisible(false);
  };

  const openEditModal = () => {
    setModalVisible(true);
  };

  const closeEditModal = () => {
    setModalVisible(false);
  };

  const navigateToScreen = (routeName) => () => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        {/* Custom Header */}
        <View style={styles.drawerHeader}>
        <Image
        source={{ uri: 'https://media.licdn.com/dms/image/D4D0BAQEAH5W3chL_Mg/company-logo_200_200/0/1687524964804?e=2147483647&v=beta&t=KUIE8QJh3Y8Z-x4JW7U4shwdP-mzQNuHbCf6gc_INao' }}
        style={styles.banner}
      />
          <TouchableOpacity onPress={openEditModal}>
            <Avatar.Image
              style={{ backgroundColor: 'grey' }}
              source={{
                uri: 'https://example.com/avatar.jpg',
              }}
              size={50}
            />
          </TouchableOpacity>
          <View style={styles.headerText}>
            <Title style={styles.titleText} numberOfLines={1} ellipsizeMode="tail" onPress={openEditModal}>
              {isEditing ? (
                <TextInput
                  style={styles.editableText}
                  value={name}
                  onChangeText={(text) => setName(text)}
                />
              ) : (
                name
              )}
            </Title>
            <Caption style={styles.captionText} numberOfLines={1} ellipsizeMode="tail" onPress={openEditModal}>
              {isEditing ? (
                <TextInput
                  style={styles.editableText}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              ) : (
                email
              )}
            </Caption>
          </View>
        </View>

        {/* Drawer Items */}
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => <Icon name="home-outline" color={color} size={size} />}
            label="Home"
            onPress={navigateToScreen('Home')}
            style={styles.drawerItem}
          />
          <DrawerItem
            icon={({ color, size }) => <Icon name="account-outline" color={color} size={size} />}
            label="Profile"
            onPress={navigateToScreen('Profile')}
            style={styles.drawerItem}
          />
          {/* Add more DrawerItems as needed */}
        </Drawer.Section>

        {/* Custom Section */}
        <Drawer.Section title="Preferences" style={styles.drawerSection}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <Switch value={false} color="lightgreen" />
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>

      {/* Custom Footer */}
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => <Icon name="exit-to-app" color={color} size={size} />}
          label="Sign Out"
          onPress={() => {     store.dispatch(CLEARSTORE())
        }}
          style={styles.drawerItem}
        />
      </Drawer.Section>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <IconButton
              icon={() => <Icon name="close" color="black" size={30} />}
              style={styles.closeButton}
              onPress={closeEditModal}
            />
            <Text style={styles.modalTitle}>Edit Profile</Text>
            <TextInput
              style={styles.editableText}
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Enter your name"
            />
            <TextInput
              style={styles.editableText}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter your email"
            />
               <Button icon="pencil" mode="outlined"  onPress={saveChanges} style={styles.addButton}>
          Edit
        </Button>
            {/* <TouchableOpacity onPress={saveChanges} style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save Cha</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  drawerHeader: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f4f4f4',
  },
  headerText: {
    marginLeft: 15,
    flexDirection: 'column',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  captionText: {
    fontSize: 14,
    color: 'grey',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  editableText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  drawerSection: {
    marginTop: 15,
  },
  drawerItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 4,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  bottomDrawerSection: {
    marginTop: 'auto',
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CustomDrawerContent;
