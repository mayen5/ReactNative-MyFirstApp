import { useState } from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../theme/global.styles';
import { FAB } from 'react-native-paper';

export const CounterM3Screen = () => {

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
            {/* <Icon name="accessibility-outline" size={25} color="#5856D6" /> */}
            <FAB
                icon="add"
                // label="+1"
                style={globalStyles.fab}
                onPress={increment}
                onLongPress={reset}
            />
        </View>
    )
}