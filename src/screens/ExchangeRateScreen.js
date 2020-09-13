import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

export const ExchangeRateScreen = () => {
  const {exchangeRate} = useSelector((state) => state.root);

  return (
    <>
      <Text style={styles.headingStyle}>
        Current MYR to INR Exchange rate is:
      </Text>
      <Text style={styles.rateStyle}>{exchangeRate} </Text>
    </>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    marginTop: 70,
    margin: 20,
    fontWeight: '700',
    fontSize: 20,
  },
  rateStyle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 30,
  },
});
