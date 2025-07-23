import { StyleSheet, Platform, useColorScheme } from 'react-native';

export const useGlobalStyles = () => {
    const scheme = useColorScheme();

    return StyleSheet.create({
        centerContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        title: {
            fontSize: 80,
            fontWeight: '300',
            color:
                Platform.OS === 'android' && scheme === 'dark'
                    ? '#ffffff'
                    : '#000000',
        },
        fab: {
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: Platform.OS === 'android' ? 15 : 0,
        },
    });
};
