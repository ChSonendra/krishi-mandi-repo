import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {Card, Button, IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from './customHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {makeApiRequest} from '../services/api';
import {store} from '../redux/store';
import {DrawerActions} from '@react-navigation/native';
import CategoryScreen from './category';
import ProductListingPage from './products';
import Swiper from 'react-native-swiper';
import Carousel from 'react-native-snap-carousel';
const windowHeight = Dimensions.get('window').height;

const HomeScreen = ({navigation, route}) => {
  const state = store.getState();
  console.log(state);
  const [productQuantities, setProductQuantities] = useState({});
  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    getProducts();
  }, [navigation]);
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  const getProducts = () => {
    let token = AsyncStorage.getItem('token');
    console.log(token);

    makeApiRequest(
      'consumer/getProducts',
      'POST',
      {},
      state?.userData?.userData,
    ).then(e => {
      // navigation.navigate('HomeTabs',{token:e.apiResponseData?.token});
      setProduct(e.apiResponseData);
      console.log(e.apiResponseData);
    });
  };

  const handleSearch = text => {
    setSearchTerm([]);
    const filteredData = product.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    console.log(filteredData);
    setSearchTerm(filteredData);
  };
  const images = [
    require('../../assets/images/Krishi.png'),
    require('../../assets/images/krishi2.jpeg'),

    // Add more image paths as needed
  ];

  const renderItem2 = ({item}) => (
    <View style={styles.slide}>
      <Image source={item} style={styles.image} resizeMode="cover" />
    </View>
  );
  return (
    <View style={styles.container}>
      <CustomHeader
        onSearch={handleSearch}
        onCart={() => navigation.navigate('Cart')}
        onMenu={() => openDrawer()}
      />

      <View style={{height: 200}}>
        <Carousel
          data={images}
          renderItem={renderItem2}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          loop={true}
          autoplay={true}
          autoplayInterval={3000}
          showsButtons={false}
          showsPagination={false} // Hide pagination dots
        />
      </View>

      <ProductListingPage product={product} search={searchTerm} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: -10,
    height: 200,
  },
  slide: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200, // Adjust the height as needed
    borderRadius: 20,
  },

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    overflow: 'scroll',
  },
  card: {
    margin: 4,
    width: '100%',
    height: 130, // Adjust the card height as needed
  },
  cardContent: {
    flexDirection: 'row',
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    height: 120,
    borderRadius: 60,
    // alignItems:'center'
  },
  detailsContainer: {
    flex: 2,
    padding: 1,
  },
  descriptionText: {
    maxHeight: 40, // Set a maximum height for the description text
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 2,
    fontSize: 18,
  },
  // Add more styles as needed
});

export default HomeScreen;
