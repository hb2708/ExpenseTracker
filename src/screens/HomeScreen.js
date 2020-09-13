import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import NoExpenses from '../components/NoExpenses';
import ExpenseItem from '../components/ExpenseItem';
import {Fab} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';

export const HomeScreen = ({navigation}) => {
  const {expenses} = useSelector((state) => state.root);

  const totalPrice = (expenses || [])
    .map((expense) => parseFloat(expense.price))
    .reduce((previous, current) => previous + current, 0);

  return (
    <>
      <View style={styles.rootView}>
        <View>
          {expenses && expenses.length > 0 ? (
            <>
              <Text style={styles.textStyle}>
                Total Expenses = RM{totalPrice}
              </Text>
              <FlatList
                contentContainerStyle={styles.flatListContentContainer}
                data={expenses}
                renderItem={({item}) => {
                  return <ExpenseItem expense={item} />;
                }}
                keyExtractor={(item) => item.id.toString()}
              />
            </>
          ) : (
            <NoExpenses />
          )}
        </View>
        <Fab
          active={true}
          style={styles.fabButton}
          position="bottomRight"
          onPress={() => {
            navigation.navigate('Expense');
          }}>
          <Icon name="add" size={30} />
        </Fab>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  rootView: {flex: 1},
  textStyle: {
    margin: 15,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
  },
  fabButton: {backgroundColor: '#5067FF'},
  flatListContentContainer: {paddingBottom: 150},
});
