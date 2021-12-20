import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { ButtonContainer } from './src/Components/ButtonContainer/ButtonContainer';
import { Display } from './src/Components/Display/Display';
import { spacing } from './src/Utils/spacing';
export default function App() {
    const [displayContent, setDisplayContent] = useState('');
    const [result, setResultString] = useState('');

    const [isArthematic, setIsArthematic] = useState(false);

    const clearValue = () => {
        setDisplayContent((prevText) => {
            prevText = prevText.substring(0, prevText.length - 1);
            return prevText;
        });

        setResultString((prevText) => {
            lastString = prevText.charAt(prevText.length - 1);

            let newText;
            if (lastString === ',') {
                newText = prevText.substring(0, prevText.length - 3);
            } else {
                newText = prevText.substring(0, prevText.length - 1);
            }

            let newLastString = newText.charAt(newText.length - 1);

            if (newLastString === ',') {
                setIsArthematic(true);
            } else {
                setIsArthematic(false);
            }

            return newText;
        });
    };

    const setDisplay = (text) => {
        setResultString((prevText) => {
            if (+text < 10 || text === '.') {
                setIsArthematic(false);
                return prevText + text;
            } else if (isArthematic) {
                setIsArthematic(true);

                const prevArray = prevText.split(',');
                prevArray.pop();
                prevArray.pop();

                const newStr = prevArray.join();
                return newStr + ',' + text + ',';
            } else {
                setIsArthematic(true);
                return prevText + ',' + text + ',';
            }
        });

        setDisplayContent((prevText) => {
            if (isArthematic && !(+text < 10 || text === '.')) {
                prevText = prevText.substring(0, prevText.length - 1);

                return prevText + text;
            } else {
                setIsArthematic(false);
                return prevText + text;
            }
        });
    };

    const calculate = () => {
        const resultArray = result.split(',');

        let resultValue;

        let indexDivison = resultArray.findIndex((value) => value === '÷');

        while (indexDivison !== -1) {
            resultValue =
                +resultArray[indexDivison - 1] / +resultArray[indexDivison + 1];
            resultArray.splice(indexDivison - 1, 3, resultValue);
            indexDivison = resultArray.findIndex((value) => value === '÷');
        }

        let indexMultiplication = resultArray.findIndex(
            (value) => value === '×'
        );

        while (indexMultiplication !== -1) {
            resultValue =
                +resultArray[indexMultiplication - 1] *
                +resultArray[indexMultiplication + 1];
            resultArray.splice(indexMultiplication - 1, 3, resultValue);
            indexMultiplication = resultArray.findIndex(
                (value) => value === '×'
            );
        }

        let indexSubtraction = resultArray.findIndex((value) => value === '-');

        while (indexSubtraction !== -1) {
            resultValue =
                +resultArray[indexSubtraction - 1] -
                +resultArray[indexSubtraction + 1];
            resultArray.splice(indexSubtraction - 1, 3, resultValue);
            indexSubtraction = resultArray.findIndex((value) => value === '-');
        }

        let indexAddition = resultArray.findIndex((value) => value === '+');

        while (indexAddition !== -1) {
            resultValue =
                +resultArray[indexAddition - 1] +
                +resultArray[indexAddition + 1];
            resultArray.splice(indexAddition - 1, 3, resultValue);
            indexAddition = resultArray.findIndex((value) => value === '+');
        }

        if (resultArray.length === 1) {
            const finalResult = (
                Math.round(resultArray[0] * 100) / 100
            ).toString();

            setDisplayContent(finalResult);
            setResultString(finalResult);
        } else {
            setDisplayContent('Undefined');
            setResultString('Undefined');
        }
    };
    return (
        <>
            <View style={styles.appStyles}>
                <Display
                    displayContent={displayContent}
                    clearScreen={() => {
                        setDisplayContent('');
                        setResultString('');
                    }}
                    clearValue={clearValue}
                />
                <ButtonContainer
                    setDisplay={setDisplay}
                    calculate={calculate}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appStyles: {
        marginTop: Platform.OS === 'ios' ? spacing.lg : spacing.xl,
        backgroundColor: 'black',
        flex: 1
    }
});
