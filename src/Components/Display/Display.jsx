import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { spacing, fontSize } from '../../Utils/spacing';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export const Display = ({ displayContent = 102, clearScreen, clearValue }) => {
    return (
        <View style={styles.displayStyles}>
            <View style={styles.display}>
                <Text style={styles.text}>{displayContent}</Text>
            </View>

            <View style={styles.clearButtonStyles}>
                <TouchableOpacity
                    style={styles.clearScreen}
                    onPress={clearScreen}
                >
                    <Text style={styles.clearButtonText}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.clearButton}
                    onPress={clearValue}
                >
                    <Text style={styles.clearButtonText}>×</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    displayStyles: {
        borderBottomWidth: 1,
        borderColor: 'green'
    },
    display: {
        width: width,
        height: height / 3.5,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: 20,
        marginRight: 10
    },
    text: {
        color: 'white',
        fontSize: fontSize.xxxl
    },
    clearButtonStyles: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    clearButtonText: {
        color: '#ADFF2F',
        fontSize: spacing.xl
    },
    clearButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ADFF2F',
        borderWidth: 2,
        width: 50,
        marginBottom: 11,
        marginRight: 10
    },
    clearScreen: {
        marginLeft: 20,
        fontSize: fontSize.xxl
    }
});
