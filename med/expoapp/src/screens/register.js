import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';





export default function Register({}) {
    const navigation = useNavigation();
    
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    
    function goToLocation(){
           navigation.navigate('Github',{name:name,email:email,password:password});
    }
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '15%'}}>
              <View style={{flexDirection:'row', display:'flex', marginHorizontal:'10%'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}><Icon name="chevron-left" type="entypo" color="#00B0B9" size={30}></Icon></TouchableOpacity>
                <Text style={{color:"#00B0B9", textAlignVertical:'center', fontSize:18, fontWeight:'bold'}}>Login</Text>
              </View>
              <View style={{position:'relative', marginLeft:'10%', marginTop:'40%'}}>
                <Text style={{ fontSize:30, color:'#00B0B9', fontWeight:'bold'}}>Sign up</Text>
                <TextInput value={name} onChangeText={setName} style={{backgroundColor:'#FFF',fontWeight:'bold', borderRadius:10, width:'90%', height:50, marginTop:'10%', paddingLeft:'5%'}} placeholder="Full Name" placeholderTextColor="#00B0B9"></TextInput>
                <TextInput value={email} onChangeText={setEmail} style={{backgroundColor:'#FFF',fontWeight:'bold', borderRadius:10, width:'90%', height:50, marginTop:'5%', paddingLeft:'5%'}} placeholder="Email address" placeholderTextColor="#00B0B9"></TextInput>
                <TextInput value={password} onChangeText={setPassword} secureTextEntry style={{backgroundColor:"#FFF", fontWeight:'bold',borderRadius:10, width:'90%', height:50, marginTop:'5%', paddingLeft:'5%'}} placeholder="Password" placeholderTextColor="#00B0B9"></TextInput>
              </View>
              <View style={{backgroundColor:'#00B0B9', marginTop:'10%', width:'70%', alignSelf:'center', paddingHorizontal:'5%', paddingVertical:'3.5%', borderRadius:15}}>
                  <TouchableOpacity onPress={()=> goToLocation()}><Text style={{textAlign:'center', color:'#FFF',  fontSize:18, fontWeight:'bold'}}>Sign Up</Text></TouchableOpacity>
              </View>
              
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#EDF2F6'
    },
    searchSection: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    rowStyle: {
      flex: 1,
      flexDirection: 'row',
      marginTop:'10%',
      flexWrap: 'wrap',
      alignItems: 'flex-start' // if you want to fill rows left to right
    },
    header: {
        height:'34%',
        width:'34%',
        resizeMode:'contain',
        marginLeft:'10%'
    },

});