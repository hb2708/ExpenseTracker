import React, {useState} from 'react';
import {Text, StyleSheet, Alert} from 'react-native';
import {
  Container,
  Button,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import {addExpense} from '../redux/actions/expenseActions';
import {useDispatch} from 'react-redux';

export const AddExpense = ({navigation}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const saveNewExpense = () => {
    if (!title || !price) {
      return Alert.alert('Please fill all fields');
    }

    if (!parseFloat(price)) {
      return Alert.alert('Please Enter valid amount');
    }
    const id = Math.floor(Math.random() * 100000000);

    const newExpense = {
      id,
      title,
      price: parseFloat(Math.abs(price)).toFixed(2),
    };

    dispatch(addExpense({...newExpense}));
    navigation.goBack();
  };

  return (
    <Container>
      <Content>
        <Form>
          <Item floatingLabel style={{...styles.label}}>
            <Label>Amount</Label>
            <Input
              keyboardType="number-pad"
              onChangeText={(value) => setPrice(value)}
            />
          </Item>
          <Item floatingLabel style={{...styles.label}}>
            <Label>Expense Title</Label>
            <Input
              onChangeText={(value) => setTitle(value)}
              onSubmitEditing={saveNewExpense}
            />
          </Item>
          <Button
            block
            onPress={saveNewExpense}
            style={styles.addExpenseButton}>
            <Text style={styles.addExpenseText}>Add Expense</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  label: {
    marginVertical: 20,
  },
  addExpenseButton: {margin: 15},
  addExpenseText: {color: '#fff', fontWeight: '700', fontSize: 16},
});
