import React from "react"
import {View, Text, StyleSheet } from "react-native"

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>About the author:</Text>
            <Text>Creating programming articles for Medium</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    heading: {
        fontSize: 40,
    },

})

export default About;