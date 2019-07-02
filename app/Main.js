import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import { LinearGradient } from 'expo';
import { primaryGradientArray } from './utils/Colors';
import { StyleSheet, View, StatusBar } from 'react-native';

const headerTitle = 'To Do';

export default class Main extends React.Component {

    state = {
        inputValue: ''
    };

    newInputValue = value => {
        this.setState({
            inputValue: value
        })
    };

    render(){

        const { inputValue } = this.state;

        return(
            <LinearGradient
            colors={primaryGradientArray}
            style={styles.container}
          >
            <StatusBar barStyle="light-content" />
            <View style={styles.centered}>
              <Header title={headerTitle} />
            </View>
            <View style={styles.inputContainer}>
              <Input inputValue={inputValue} onChangeText={this.newInputValue} />
            </View>
          </LinearGradient>
        )
    };

}

const styles = StyleSheet.create({
    centered: {
        alignItems: 'center'
    },
    container: {
        flex: 1,
    },
    inputContainer: {
        marginTop: 40,
        paddingLeft: 15,
        alignItems: 'center'
    }
})