import {Text, StyleSheet} from 'react-native';
import React from 'react';

var Buffer = require('buffer').Buffer;

function ProofRecordd(props) {
  const proofid: any = props.item;
  const val =
    proofid.requestMessage.requestPresentationAttachments[0].data.base64;
  let req_attr = Buffer.from(val, 'base64').toString();
  req_attr = JSON.parse(req_attr);
  return <Text style={styles.text}>{req_attr.name}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontWeight: '900',
    paddingHorizontal: 8,
    textTransform: 'uppercase',
  },
});
export default ProofRecordd;
