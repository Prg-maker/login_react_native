import { Text, View , ImageBackground, TextInput , ScrollView,KeyboardAvoidingView } from 'react-native'
import {
  styles
} from './styles'

import LogoImg from '../../assets/logo.png'
    
export function Home(){
  return(
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}> Welcome Back,</Text>
        <Text style={styles.subTitle}> Log in new to continue </Text>
        <ImageBackground style={styles.image} resizeMode="cover" source={LogoImg}/>
      </View>

      <KeyboardAvoidingView
        behavior='height'
      >
      <ScrollView>

      <View >
        <Text style={styles.titleInput}>Email Address</Text>
        <TextInput keyboardType='email-address' style={styles.input} placeholder='Enter your email address'/>


        <Text  style={styles.titleInput}>Password</Text>
        <TextInput keyboardType='decimal-pad' style={styles.input} placeholder='Enter your email password'/>
        
        <Text>Forget Password? </Text>
      </View>


      </ScrollView>
      </KeyboardAvoidingView>


    </View>
  )
}