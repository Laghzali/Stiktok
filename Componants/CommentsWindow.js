import * as React from 'react';
import { Divider } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { SafeAreaView, StyleSheet, TouchableHighlight, ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
const CommentsWindodw = ({ navigation, route }) => {
    const post = route.params.post
    const emptySpace = "" // for the sake of space-between
    console.log(post.comments.coms)
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.Header}>
                <TouchableHighlight underlayColor='none' style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={30} color="black" />
                </TouchableHighlight>
                <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Comments</Text>
                <Text>{emptySpace}</Text>
            </View>
            <Text>xx</Text>
            <Divider></Divider>

            <View style={styles.Body}>
                <ScrollView contentContainerStyle={{ flex: 1, flexDirection: 'column' }}>

                    {post.comments.coms.map((comment) => {
                        return (<View key={comment.id} style={styles.comment}>
                            <Avatar.Image size={30} source={require('../assets/profile.jpg')} />

                            <Text style={{ alignSelf: 'flex-start', fontWeight: 'bold', marginLeft: 5 }}>{comment.uid}</Text>
                            <Text style={{ alignSelf: 'flex-start', marginLeft: 5 }}>{comment.text}</Text>
                            <View style={{ marginLeft: 'auto', alignItems: 'center' }}>
                                {/* grab isLiked and changed color based on that isLiked ? 'tomato' : 'white'*/}
                                <TouchableOpacity>
                                    <AntDesign name="like1" size={15} color={comment.isLiked ? 'tomato' : 'grey'} />
                                </TouchableOpacity>
                            </View>
                        </View>)
                    })}
                </ScrollView>
            </View>

            <View style={styles.footer}>

            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {

    },
    Header: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    backButton: {
        marginLeft: 10
    },
    footer: {

    },
    TextArea: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    comment: {

        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start'
    }
})

export default CommentsWindodw;