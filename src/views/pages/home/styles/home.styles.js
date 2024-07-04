// src\views\pages\home\styles\home.styles.js
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    list: {
      //paddingHorizontal: 5,
      backgroundColor: '#E6E6E6',
    },
    listContainer: {
      alignItems: 'center',
    },
    /******** card **************/
    card: {
      marginHorizontal: 2,
      marginVertical: 2,
      flexBasis: '48%',
    },
    cardHeader: {
      paddingVertical: 17,
      paddingHorizontal: 16,
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardContent: {
      paddingVertical: 12.5,
      paddingHorizontal: 16,
    },
    cardFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 12.5,
      paddingBottom: 25,
      paddingHorizontal: 16,
      borderBottomLeftRadius: 1,
      borderBottomRightRadius: 1,
    },
    cardImage: {
      height: 70,
      width: 70,
      alignSelf: 'center',
    },
    title: {
      fontSize: 16,
      flex: 1,
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    subTitle: {
      fontSize: 12,
      flex: 1,
      color: '#FFFFFF',
    },
    icon: {
      height: 20,
      width: 20,
    },
  })