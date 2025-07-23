import { useState } from 'react';
import { Text, View } from 'react-native';
import { useGlobalStyles } from '../theme/global.styles';
import { FAB } from 'react-native-paper';

export const CounterM3Screen = () => {

    const globalStyles = useGlobalStyles();

    const [ count, setCount ] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <View style={globalStyles.centerContainer}>
            <Text style={globalStyles.title}>{count}</Text>
            <FAB
                icon="add"
                style={globalStyles.fab}
                onPress={increment}
                onLongPress={reset}
            />
        </View>
    )
}