import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';






export default function Home({route}) {
    const navigation = useNavigation();
    
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [energy, setEnergy] = useState('100');
    const [amount, setAmount] = useState('15');
   
      
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
               
                        <View style={{backgroundColor:"#FFF", borderRadius:100, height:200, width:200,alignSelf:'center'}}>
                            <Icon name="home" style={{alignSelf:'center', marginTop:'15%'}} color="#EAEAEA"></Icon>
                            <Text style={{textAlign:'center', color:"#EAEAEA", marginTop:'-2.5%'}}>Home</Text>
                            <Text style={{fontWeight:'bold', fontSize:30, textAlign:'center'}}>{energy}kWh</Text>
                            <Text style={{fontWeight:'900', fontSize:15, textAlign:'center', color:"#EAEAEA"}}>~${energy}</Text>
                        </View>
               
              </View>
              </View>

        <View style={{backgroundColor:"#FFF", borderTopLeftRadius:20, borderTopRightRadius:20, marginTop:'15%', height:500}}>
            <Text style={{marginTop:'5%', marginHorizontal:'10%', fontWeight:'bold', fontSize:20}}>Rooms</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Appliances',{room:'Kitchen'})}><View style={{borderRadius:20, backgroundColor:"#7DA1DF", width:'90%', alignSelf:'center', marginVertical:'2.5%', height:100,}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:"10%"}}>
                    <Image source={require('../../assets/k.png')}></Image>
                    <Text style={{fontWeight:'bold', fontSize:20, textAlignVertical:'center', color:"#FFF"}}>Kitchen</Text>
                </View>
                </View></TouchableOpacity>
                <TouchableOpacity><View style={{borderRadius:20, backgroundColor:"#4370BC", width:'90%', height:100, alignSelf:'center', marginVertical:'2.5%'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:"10%"}}>
                    <Image source={require('../../assets/l.png')}></Image>
                    <Text style={{fontWeight:'bold', fontSize:20, textAlignVertical:'center', color:"#FFF"}}>Living</Text>
                </View>
                </View></TouchableOpacity>
                <TouchableOpacity><View style={{borderRadius:20, backgroundColor:"#2B4D87", width:'90%', height:100, alignSelf:'center', marginVertical:'2.5%'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:"10%"}}>
                    <Image source={require('../../assets/ml.png')}></Image>
                    <Text style={{fontWeight:'bold', fontSize:20, textAlignVertical:'center', color:"#FFF"}}>Master Bedroom</Text>
                </View>
            </View></TouchableOpacity>
        </View>



        <View style={{flexDirection:'row', justifyContent:'space-evenly',borderTopEndRadius:40, borderTopLeftRadius:40, position:'absolute', bottom:0, width:'100%', height:70, backgroundColor:"#0E2471", paddingTop:'5%'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Menu')}><Icon name="barschart" type="antdesign" color="#96A7AF" style={{textAlignVertical:'center'}}></Icon></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Market')}><Icon name="wallet" type="entypo" color="#96A7AF" style={{textAlignVertical:'center'}}></Icon></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}><Icon name="home" type="ionicon" color="#FFCC4D" style={{textAlignVertical:'center'}}></Icon></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}><Icon name="chatbox-ellipses" type="ionicon" color="#96A7AF" style={{textAlignVertical:'center'}}></Icon></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}><Icon name="bell" type="octicon" color="#96A7AF" style={{textAlignVertical:'center'}}></Icon></TouchableOpacity>
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