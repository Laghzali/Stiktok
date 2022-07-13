import * as React from 'react';
import { Divider } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { StyleSheet, TouchableHighlight, ScrollView, KeyboardAvoidingView, TouchableOpacity, View, Text, Keyboard, Button, Dimensions } from 'react-native';
import { Avatar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
const CommentsWindodw = ({ navigation, route }) => {
    const [comment, setComment] = React.useState("");
    const post = route.params.post
    const emptySpace = "" // for the sake of space-between
    console.log(post.comments.coms)
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>

            <SafeAreaView style={styles.Header}>
                <TouchableHighlight underlayColor='none' style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={30} color="black" />
                </TouchableHighlight>
                <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 15 }}>Comments</Text>
                <Text>{emptySpace}</Text>
            </SafeAreaView>

            <Divider style={{ marginBottom: 10 }}></Divider>

            <ScrollView onScroll={() => Keyboard.dismiss()} style={styles.Body}>

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

            <SafeAreaView style={styles.footer}>
                <View style={styles.TextArea}>
                    <Avatar.Image size={35} source={require('../assets/profile.jpg')} />
                    <TextInput
                        style={styles.commentInput}

                        value={comment}
                        mode={"flat"}
                        onChangeText={comment => setComment(comment)}
                        right={< TextInput.Icon size={30} onPress={() => alert('dd?')} color={"tomato"} multiline={true} name="send-circle" />}
                    />
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Header: {
        alignItems: 'flex-end',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    backButton: {
        marginLeft: 10,
        marginTop: 15
    },
    Body: {
        flex: 1,
        flexDirection: 'column'
    },
    footer: {

        width: '100%',
        marginBottom: 'auto'
    },
    TextArea: {
        padding: 10,
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',

    },
    comment: {
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start'
    }
    , commentInput: {
        marginLeft: 5,

        width: "90%",

        marginLeft: '10px'
    }
})

export default CommentsWindodw;