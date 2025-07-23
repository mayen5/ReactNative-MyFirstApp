import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';

interface Props {
    title: string;
    onPress?: () => void;
    onLongPress?: () => void;
}

export const PrimaryButton = ({ title, onPress, onLongPress }: Props) => {
    return (
        <Button
            onPress={onPress}
            onLongPress={onLongPress}
            mode="contained"
            style={styles.button}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Platform.OS === 'android' ? '#5856D6' : '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginVertical: 5,
    },
    buttonText: {
        fontSize: 20,
        color: Platform.OS === 'android' ? '#FFFFFF' : '#4746AB',
    },
    buttonPressed: {
        backgroundColor: Platform.OS === 'android' ? '#4746AB' : '#FFFFFF',
        opacity: 0.75,
    },
})
