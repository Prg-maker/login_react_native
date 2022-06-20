import {StyleSheet} from 'react-native'
import theme from '../../theme'
import {getBottomSpace} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container:{
    height: '100%',
    marginHorizontal: 47,

  },
  header:{
    marginTop: getBottomSpace() + 50,
  },
  title:{
    fontFamily: theme.fonts.Bold,
    fontSize: 20,
  },
  subTitle:{
    fontFamily: theme.fonts.Regular,
    paddingTop: 20,
  },
  image:{
    height: 250,
    width: 250,
    marginVertical: 30,
    marginHorizontal: 10
  },



  titleInput:{
    fontFamily: theme.fonts.Regular,
    marginBottom: 13,
    marginTop: 13
  },

  input:{
    backgroundColor: theme.colors.backgroundInput,
    width: '100%',
    height: 48,
    borderRadius: 10,
    paddingLeft: 11,
    marginBottom:10
  }

})