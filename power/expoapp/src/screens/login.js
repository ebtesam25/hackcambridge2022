import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';






export default function Login({route}) {
    const navigation = useNavigation();
    
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
      
    const loggedIn = (email, password) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "action": "login",
        "email": email,
        "password": password
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
        
        const uri = "";

        // fetch(uri, requestOptions)
        // .then(response => response.json())
        // .then(result => {console.log(result.status);
        //     if(result.status=="success"){
        //         navigation.navigate('Home');
        //     }})
        // .catch(error => console.log('error', error));


        navigation.navigate('Home');
        
        
    }
   
    return (
            <LinearGradient
        // Background Linear Gradient
        colors={['#79AACE', '#0E2471']}
        style={styles.container}
      >
        <View>
            <View style={{ marginTop: '15%'}}>
            <View style={{flexDirection:'row', display:'flex', marginHorizontal:'10%'}}>
               
                        <Image source={require('../../assets/Idea.png')} style={{resizeMode:'contain', height:300}}></Image>

               
              </View>
              <View style={{position:'relative', paddingLeft:'10%', marginTop:'20%'}}>
                <Text style={{ fontSize:30, color:'#FFF', fontWeight:'bold'}}>Welcome!</Text>
                <TextInput value={email} onChangeText={setEmail} style={{backgroundColor:'#22343C',fontWeight:'bold', borderRadius:10, width:'90%', height:50, marginTop:'5%', paddingLeft:'5%'}} placeholder="Phone Number" placeholderTextColor="#FFF"></TextInput>
                <TextInput value={password} onChangeText={setPassword} secureTextEntry style={{backgroundColor:"#22343C", fontWeight:'bold',borderRadius:10, width:'90%', height:50, marginTop:'5%', paddingLeft:'5%'}} placeholder="Password" placeholderTextColor="#FFF"></TextInput>
              </View>
              <LinearGradient colors={['#111','#000']} style={{marginTop:'15%', width:'70%', alignSelf:'center', paddingVertical:'3.5%', borderRadius:15}}>
              <View>
                <TouchableOpacity onPress={()=> loggedIn(email,password)}><View style={{flexDirection:'row', justifyContent:'center'}}><Text style={{textAlign:'center', color:'#FFF',  fontSize:18, fontWeight:'bold'}}>Start  </Text><Icon name="arrowright" type="antdesign" color="#FFF"></Icon></View></TouchableOpacity>
              </View></LinearGradient>
            </View>
        </View>
        </LinearGradient>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
    },
    header: {
        height:'34%',
        width:'34%',
        resizeMode:'contain',
        marginLeft:'10%'
    },

});