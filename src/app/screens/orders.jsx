import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const OrderConfirmedScreen = ({ route, navigation }) => {
  const { orderNumber, date, totalAmount } = route.params;

  useEffect(() => {
    animateConfirmation(); // Trigger animation on mount
  }, []);

  const animateConfirmation = () => {
    // Example: Bounce animation using 'react-native-animatable'
    if (confirmationRef.current) {
      confirmationRef.current.bounce(2000);
    }
  };

  const confirmationRef = React.createRef();

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Animatable.View ref={confirmationRef} style={styles.iconContainer}>
          <Icon name="check-circle" size={50} color="#4CAF50" style={styles.icon} />
        </Animatable.View>
        <Title style={styles.header}>Order Confirmed!</Title>
        <Paragraph style={styles.detailText}>Thank you for shopping with us!</Paragraph>
        <Paragraph style={styles.detailText}>Your order number is {orderNumber}.</Paragraph>
        <Paragraph style={styles.detailText}>Placed on {date}.</Paragraph>
        <Paragraph style={styles.detailText}>Total Amount: ${totalAmount}</Paragraph>
      </Card>
      <Animatable.View
        animation="slideInUp"
        delay={800}
        duration={500}
        style={styles.buttonContainer}
      >
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          Continue Shopping
        </Button>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '90%',
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  iconContainer: {
    marginBottom: 20,
  },
  icon: {
    // No marginBottom here
    alignItems:'center',
    marginLeft:95
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer:{
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    width: '80%',
    backgroundColor: '#4CAF50',
  },
});

export default OrderConfirmedScreen;
