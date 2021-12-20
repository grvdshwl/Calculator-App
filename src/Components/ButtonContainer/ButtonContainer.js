import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { RoundedButton } from '../RoundedButton/RoundedButton';

export const ButtonContainer = ({ setDisplay, calculate }) => {
    return (
        <View>
            <View style={styles.rowStyles}>
                <RoundedButton
                    text={'7'}
                    onPress={() => {
                        setDisplay('7');
                    }}
                />
                <RoundedButton
                    text={'8'}
                    onPress={() => {
                        setDisplay('8');
                    }}
                />
                <RoundedButton
                    text={'9'}
                    onPress={() => {
                        setDisplay('9');
                    }}
                />
                <RoundedButton
                    text={'+'}
                    onPress={() => {
                        setDisplay('+');
                    }}
                />
            </View>
            <View style={styles.rowStyles}>
                <RoundedButton
                    text={'4'}
                    onPress={() => {
                        setDisplay('4');
                    }}
                />
                <RoundedButton
                    text={'5'}
                    onPress={() => {
                        setDisplay('5');
                    }}
                />
                <RoundedButton
                    text={'6'}
                    onPress={() => {
                        setDisplay('6');
                    }}
                />
                <RoundedButton
                    text={'-'}
                    onPress={() => {
                        setDisplay('-');
                    }}
                />
            </View>
            <View style={styles.rowStyles}>
                <RoundedButton
                    text={'1'}
                    onPress={() => {
                        setDisplay('1');
                    }}
                />
                <RoundedButton
                    text={'2'}
                    onPress={() => {
                        setDisplay('2');
                    }}
                />
                <RoundedButton
                    text={'3'}
                    onPress={() => {
                        setDisplay('3');
                    }}
                />
                <RoundedButton
                    text={'×'}
                    onPress={() => {
                        setDisplay('×');
                    }}
                />
            </View>
            <View style={styles.rowStyles}>
                <RoundedButton
                    text={'.'}
                    onPress={() => {
                        setDisplay('.');
                    }}
                />
                <RoundedButton
                    text={'0'}
                    onPress={() => {
                        setDisplay('0');
                    }}
                />
                <RoundedButton
                    text={'='}
                    onPress={() => {
                        calculate();
                    }}
                />
                <RoundedButton
                    text={'÷'}
                    onPress={() => {
                        setDisplay('÷');
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rowStyles: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5
    }
});
