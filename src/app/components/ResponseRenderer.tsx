import React, {useMemo, useState} from 'react';

import {Line, Response} from '../mlkit';
import {View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
interface ResponseRendererProps {
  response: Response;
  scale: number;
}

export const ResponseRenderer = ({response, scale}: ResponseRendererProps) => {
  return (
    <View style={StyleSheet.absoluteFillObject}>
      {response.blocks.map(block =>
        block.lines.map(line => {
          return <Block line={line} scale={scale} />;
        }),
      )}
    </View>
  );
};

interface BlockProps {
  line: Line;
  scale: number;
}

export const Block = ({line, scale}: BlockProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const rect = useMemo(() => {
    return {
      left: line.rect.left * scale,
      top: line.rect.top * scale,
      height: line.rect.height * scale,
      width: line.rect.width * scale,
    };
  }, [line, scale]);
  return (
    <>
      <View
        style={{
          position: 'absolute',
          borderWidth: 1,
          borderColor: 'red',
          ...rect,
        }}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}></TouchableOpacity>
      </View>
    </>
  );
};
