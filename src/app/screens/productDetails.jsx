// ProductDetails.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const ProductDetails = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>

      <Card style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: item.images }} style={styles.headerImage} />
      </View>
        <Card.Content style={styles.content}>
          <Title style={styles.title}>{item.name}</Title>
          <Paragraph style={styles.about}>{item.about}</Paragraph>
          <View style={styles.details}>
            <Text style={styles.price}>Price: ₹{item.price}</Text>
            <Text style={styles.quantity}>Quantity: {item.quantityPerUnit}</Text>
            {/* <Text style={styles.quality}>Quality: {item.quality}</Text> */}
            <Text style={styles.seller}>Seller: {item.sellerName}</Text>
          </View>
          {/* Add more details as needed */}
        </Card.Content>
      </Card>
      {/* Buy Button */}
      <Button mode="contained" onPress={() => handleBuy(item)} style={styles.buyButton}>
        Buy Now
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  header: {
    height: 200,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  card: {
    flex: 1,
    // margin: 1,
    backgroundColor:'white'
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  about: {
    fontSize: 16,
    marginBottom: 16,
  },
  details: {
    marginBottom: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 8,
  },
  quantity: {
    fontSize: 16,
    marginBottom: 8,
  },
  quality: {
    fontSize: 16,
    marginBottom: 8,
  },
  seller: {
    fontSize: 16,
    marginBottom: 8,
  },
  buyButton: {
    margin: 16,
    color:'#4CAF50',
    backgroundColor:'#4CAF50'
  },
});

export default ProductDetails;
