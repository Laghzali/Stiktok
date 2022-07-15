import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';

const Styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white'

  },
  dashboard: {

    flex: 1,

    justifyContent: 'space-evenly',
    flexDirection: 'row',
    maxHeight: '10%'
  },
  card: {
    marginTop: Platform.OS == 'android' ? 15 : 0,
    alignItems: 'center',
    height: '100%',
    width: '30%'
  },
  username: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 20
  },
  cardTitle: { color: 'grey', fontSize: 14 },
  cardContent: { fontWeight: 'bold', fontSize: 19, paddingTop: 10, alignSelf: 'center', color: 'tomato' },
  Header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: Platform.OS == 'android' ? 30 : 30,
    paddingBottom: 0,
    alignItems: 'flex-start',

  },
  backButton: {
    flex: 1,
    alignItems: 'flex-end',
    marginLeft: 10,
    marginTop: 15
  },
  bio: {
    height: 'auto',
    paddingTop: Platform.OS == 'android' ? 15 : 0,
    paddingLeft: 30,
  },
  bioText: {
    fontSize: 15,
    flexWrap: 'wrap',
    maxWidth: '80%'
  },
  body: {
    paddingTop: 15,
    flex: 1,
  }
})

export default Styles