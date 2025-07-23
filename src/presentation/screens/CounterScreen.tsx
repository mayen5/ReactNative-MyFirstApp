import { useState } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import { PrimaryButton } from '../components';

export const CounterScreen = () => {

    const [ count, setCount ] = useState(10);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{count}</Text>
            <PrimaryButton title="Increment" onPress={increment} onLongPress={reset} />
            <PrimaryButton title="Decrement" onPress={decrement} onLongPress={reset} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 80,
        color: '#000000',
        fontWeight: '300',
    },
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