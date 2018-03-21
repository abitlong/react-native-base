import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Mine extends Component {
    render() {
        <View style={styles.container}>
            <Text>Mine page</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        background: '#fff',
    }
})