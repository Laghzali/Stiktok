import * as React from 'react';
import { Divider } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar, StyleSheet, TouchableHighlight, View, Text } from 'react-native';

const CommentsWindodw = ({ navigation }) => {



    return (
        <View style={styles.container}>

            <View style={styles.Header}>
                <TouchableHighlight underlayColor='none' style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableHighlight>
                <Text>Comments</Text>
                <Text></Text>
            </View>
            <View style={styles.Body}></View>
            <View style={styles.TextArea}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    Header: {

        justifyContent: 'space-between'
    },
    backButton: {
        marginTop: 20,
        marginLeft: 10

    },
})

export default CommentsWindodw;