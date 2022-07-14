import * as React from 'react';
import { Divider } from 'react-native-elements';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Input, Icon } from "@rneui/themed";
import { StyleSheet, TouchableHighlight, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity, View, Text, Keyboard, Button, Dimensions } from 'react-native';
import { Avatar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
const CommentsWindodw = ({ navigation, route }) => {
    const [comment, setComment] = React.useState("");
    const post = route.params.post != undefined ? route.params.post : []
    const emptySpace = "" // for the sake of space-between

    return (
        <KeyboardAvoidingView keyboardVerticalOffset={
            Platform.select({
                ios: () => 0,
                android: () => -400
            })()} behavior="padding" style={styles.container}>

            <SafeAreaView style={styles.Header}>
                <TouchableHighlight underlayColor='none' style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={30} color="black" />
                </TouchableHighlight>
                <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 15 }}>Comments</Text>
                <Text>{emptySpace}</Text>
            </SafeAreaView>

            <Divider style={{ marginBottom: 10 }}></Divider>

            <ScrollView scrollEventThrottle={32} onScroll={() => Keyboard.dismiss()} style={styles.Body}>

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

            <View style={styles.footer}>
                <View style={styles.TextArea}>
                    <Avatar.Image style={{ marginBottom: 13, }} size={35} source={require('../assets/profile.jpg')} />
                    <Input
                        multiline={true}
                        inputContainerStyle={{ borderBottomWidth: 0, alignItems: 'center', alignSelf: 'center', marginTop: 10 }}
                        style={styles.commentInput}
                        placeholder={"comment"}
                        rightIcon={<Icon
                            raised
                            name='arrow-right'
                            size={18}

                            type='font-awesome'
                            color='#f50'
                            onPress={() => alert('hello')} />}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        maxHeight: Dimensions.get('window').height
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
    comment: {
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start'
    },
    footer: {
        width: '100%',
        marginRight: 10,
        marginRLeft: 10,
        paddingLeft: 10,
        paddingRight: 10,

    },
    TextArea: {
        flex: 0,
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
    }
    , commentInput: {
        maxHeight: 100,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: 'rgba(25, 25, 25, 0.05)',
        borderRadius: 10,
        marginLeft: 5,
        flexGrow: 1,
        width: "10%",
        fontSize: 15,

    }
})

export default CommentsWindodw;