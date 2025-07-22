import { View, Text, StyleSheet } from 'react-native'

interface Props {
    name?: string;
}

export const HelloWorldScreen = ({ name = 'World' }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello, {name}!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        padding: 16,
    },
});
