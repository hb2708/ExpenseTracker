import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {ListItem, Body} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {deleteExpense} from '../redux/actions/expenseActions';

const ExpenseItem = (props) => {
  const dispatch = useDispatch();
  const {title, id, price} = props.expense;

  return (
    <ListItem>
      <Body>
        <Text style={styles.title}>{title}</Text>
      </Body>
      <Text style={styles.amount}>{`RM${price}`}</Text>
      <Icon
        name="delete"
        size={30}
        style={styles.deleteIcon}
        onPress={() => dispatch(deleteExpense(id))}
      />
    </ListItem>
  );
};

const styles = StyleSheet.create({
  amount: {
    fontSize: 17,
    fontWeight: '600',
    color: 'red',
  },
  deleteIcon: {color: 'red'},
  title: {fontSize: 17, fontWeight: '600'},
});

export default ExpenseItem;
