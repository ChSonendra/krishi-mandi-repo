import {Text} from 'react-native';
import React from 'react';
import { useConnectionById } from '@aries-framework/react-hooks';


function Label(props) {
  const proofid: any = props.item;
    const connection = useConnectionById(proofid.connectionId);

  return (
      <Text>{connection?.theirLabel}</Text>
  );
}


export default Label;
