import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { inputPlaceHolder } from '../utils/Colors';

const Input = ({ inputValue, onChangeText, onDoneAddItem }) => (
    <TextInput 
        style={styles.input}
        value={inputValue}
        onChangeText={onChangeText}
        placeholder="Add Note"
        placeholderTextColor={inputPlaceHolder}
        multiline={true}
        autoCapitalize="sentences"
        underlineColorAndroid="transparent"
        selectionColor={'white'}
        maxLength={30}
        returnKeyType="done"
        autoCorrect={true}
        blurOnSubmit={true}
        onSubmitEditing={onDoneAddItem}
    />
);

const styles = StyleSheet.create({
    input: {
        paddingTop: 10,
        paddingRight: 15,
        fontSize: 34,
        color: 'white',
        fontWeight: '500'
    }
});

export default Input;