import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Home extends Component {
    render() {
        <View style={styles.container}>
            <Text> Home page</Text>
        </View>
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        background: '#fff',
    }
})