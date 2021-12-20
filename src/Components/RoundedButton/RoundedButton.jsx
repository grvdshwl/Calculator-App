import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { spacing } from '../../Utils/spacing';

export const RoundedButton = ({ text = 0, onPress }) => {
    return (
        <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
            <Text style={styles.textStyles}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyles: {
        borderColor: 'green',
        borderRadius: 45,
        borderWidth: 3,
        width: 92,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: '#ADFF2F'
    },
    textStyles: {
        color: 'black',
        fontSize: spacing.xxl
    }
});
