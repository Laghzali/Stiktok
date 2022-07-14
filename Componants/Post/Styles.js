import { StyleSheet, Dimensions } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    height: Dimensions.get('window').height - 72
  },

  Video: {

    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  uiContainer: {
    position: 'absolute',
    width: '100%',
    flex: 1,
    marginLeft: 3,
    height: '100%',
    justifyContent: 'flex-end',
  },
  rightContainer: {
    height: 180,
    margin: 10,
    justifyContent: 'space-between',
    alignSelf: 'flex-end',

  },
  iconText: { color: 'white', fontSize: 12, alignSelf: 'center' },
  handle: { color: 'white', fontSize: 15, fontWeight: '700', marginBottom: 7 },
  description: { color: '#cacccf', fontSize: 12, maxWidth: '40%', marginBottom: 5 }
})

export default Styles