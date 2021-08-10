import { StyleSheet, View, Text,Button } from "react-native";
import React from "react";

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome Home!</Text>
            <Button title="Go to About Page" onPress={()=>{
                console.log("navigation : ",navigation)
                navigation.navigate("About")}}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0c62eb",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
    },
});

export default Home;