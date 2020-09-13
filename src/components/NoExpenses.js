import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NoExpenses = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>No Expenses yet.</Text>
      <Text style={styles.subHeadingText}>
        Please Tap on the + button in the botton right corner
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginTop: 30},
  headingText: {
    color: 'orange',
    fontWeight: '700',
    fontSize: 30,
    marginHorizontal: 20,
  },
  subHeadingText: {
    fontWeight: '700',
    fontSize: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
});

export default NoExpenses;
