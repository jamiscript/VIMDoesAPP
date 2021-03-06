import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function VimDoesLogo() {
    return (
        <View>
            <Image
                style={styles.logo}
                source={require('../assets/vimdoes2.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 168,
        height: 84,
    },
});