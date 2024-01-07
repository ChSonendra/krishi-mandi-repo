import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Card, IconButton} from 'react-native-paper';

function List(props) {
  const id: any = props.item;
  const navigation = useNavigation();
  // console.log(id.length);

  if (id.theirLabel !== 'Indicio Public Mediator') {
    return (
      <ScrollView>
        <TouchableOpacity
          style={styles.container}
          onPress={() => navigation.navigate('Chats', {connectionId: id.id})}>
          <Card>
            <Card.Title
              title={<Text style={styles.id}>{id.theirLabel}</Text>}
              left={props => (
                <Avatar.Icon
                  style={{backgroundColor: 'lightblue'}}
                  size={42}
                  icon="account"
                />
              )}
              right={props => (
                <IconButton
                  {...props}
                  icon="chat-processing-outline"
                  onPress={() => {
                    navigation.navigate('Chats', {connectionId: id.id});
                  }}
                />
              )}
            />
          </Card>
        </TouchableOpacity>
      </ScrollView>
    );
  } else {
    return <></>;
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    padding: 4,
    marginBottom: 0,
    borderColor: 'lightblue',
  },
  text: {
    fontSize: 13,
    color: 'black',
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  card: {
    height: 50,
    marginVertical: 5,
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 5,
  },
  id: {
    fontSize: 17,
    fontWeight: '900',
    color: '#023047',
    textTransform: 'capitalize',
  },
});
export default List;
