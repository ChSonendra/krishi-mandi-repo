import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
const circleSize = 250;
export default function CreditCard({
  name,
  nam,
  date,
  suffix,
  style,
  textColor = 'white',
  bgColor = '#219ebc',
}: {
  name: string;
  nam: string|any;
  date: any;
  suffix: number | string|any;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
  bgColor?: string;
}) {
  return (
    <View style={[s.container, {backgroundColor: bgColor}, style]}>
      <View style={[s.bgCircle, s.rightBgCircle]} />
      <View style={[s.bgCircle, s.bottomBgCircle]} />
      <View style={s.logoContainer}>
        <Text style={[s.text, {color: textColor}]}>{suffix}</Text>
      </View>
      <View style={s.cardNumberContainer}>
        <View style={s.cardNumberPart}>
        </View>
        <View style={s.cardNumberPart}></View>
        <View style={s.cardNumberPart}></View>
        <Text style={[s.text, {color: textColor}]}>{nam}</Text>
      </View>
      <View style={s.footerContainer}>
        <Text style={[s.text, {color: textColor}]}>{name}</Text>
      </View>
      <Text style={[s.text, {color: textColor}]}>State - {date}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 30,
    borderRadius: 12,
    width: 370,
    position: 'relative',
  },
  focusTabIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'lightblue',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {position: 'relative', marginBottom: 24},
  circle: {width: 34, height: 34, borderRadius: 17},
  rightCircle: {backgroundColor: '#f9a000', position: 'absolute', left: 20},
  leftCircle: {backgroundColor: '#ed0006', zIndex: 999},
  cardNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  cardNumberPart: {flexDirection: 'row'},
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 4,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  text: {
    fontFamily: 'Courier',
    fontSize: 18,
    letterSpacing: 0.53,
    textTransform:'capitalize',
  },
  bgCircle: {
    position: 'absolute',
    backgroundColor: 'white',
    opacity: 0.05,
    height: circleSize,
    width: circleSize,
    borderRadius: circleSize,
  },
  rightBgCircle: {
    top: (-1 * circleSize) / 4,
    right: (-1 * circleSize) / 2,
  },
  bottomBgCircle: {
    bottom: (-1 * circleSize) / 2,
    left: (0 * (-1 * circleSize)) / 2,
  },
});
