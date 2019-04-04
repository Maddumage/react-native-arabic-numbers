import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { ArabicNumbers } from 'react-native-arabic-numbers';

export default class Example extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={{ padding: 16, fontSize: 18, fontWeight: 'bold' }}>
                    English to Arabic numbers
                </Text>
                <Text style={{ padding: 16, fontSize: 16, fontWeight: 'normal' }}>{"English 1 : in Arabic " + ArabicNumbers(1)}</Text>
                <Text style={{ padding: 16, fontSize: 16, fontWeight: 'normal' }}>{"English 2 : in Arabic " + ArabicNumbers(2)}</Text>
                <Text style={{ padding: 16, fontSize: 16, fontWeight: 'normal' }}>{"English 3 : in Arabic " + ArabicNumbers(3)}</Text>
                <Text style={{ padding: 16, fontSize: 16, fontWeight: 'normal' }}>{"English 4 : in Arabic " + ArabicNumbers(4)}</Text>
                <Text style={{ padding: 16, fontSize: 16, fontWeight: 'normal' }}>{"English 5 : in Arabic " + ArabicNumbers(5)}</Text>
                <Text style={{ padding: 16, fontSize: 16, fontWeight: 'normal' }}>{"English 6 : in Arabic " + ArabicNumbers(6)}</Text>
                <Text style={{ padding: 16, fontSize: 16, fontWeight: 'normal' }}>{"English 7 : in Arabic " + ArabicNumbers(7)}</Text>
                <Text style={{ padding: 16, fontSize: 16, fontWeight: 'normal' }}>{"English 8 : in Arabic " + ArabicNumbers(8)}</Text>
                <Text style={{ padding: 16, fontSize: 16, fontWeight: 'normal' }}>{"English 9 : in Arabic " + ArabicNumbers(9)}</Text>
                <Text style={{ padding: 16, fontSize: 16, fontWeight: 'normal' }}>{"English 145.34 : in Arabic " + ArabicNumbers(145.34)}</Text>
                <Text style={{ padding: 16, fontSize: 16, fontWeight: 'normal' }}>{"English 1255.00 : in Arabic " + ArabicNumbers(1255.00)}</Text>
                <Text style={{ padding: 16, fontSize: 16, fontWeight: 'normal' }}>{"English 5432.98 : in Arabic " + ArabicNumbers(5432.98)}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
        alignItems: 'center'
    }
});