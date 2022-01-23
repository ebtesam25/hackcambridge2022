import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';






export default function Appliances({route}) {
    const navigation = useNavigation();
    const {room} = route.params;
    
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [energy, setEnergy] = useState({"energy":[{"id":"1","name":"Kettle","amount":"750","img":require('../../assets/kettle.png')},{"id":"2","name":"Microwave","amount":"1500","img":require('../../assets/microwave.png')},
    {"id":"3","name":"Stove","amount":"2300","img":require('../../assets/stove.png')},{"id":"4","name":"Light","amount":"340","img":require('../../assets/light.png')}]});
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

    const renderAllAppliances = energy.energy.map((item => {
        return(
            <TouchableOpacity onPress={()=>navigation.navigate('Chart')}><View style={{borderRadius:20, backgroundColor:"#234C94", width:'90%', alignSelf:'center', marginVertical:'2.5%', height:100,}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:"10%"}}>
                    <Image source={item.img} style={{marginTop:'10%', width:30, height:30, resizeMode:'contain'}}></Image>
                    <View style={{marginTop:'7.5%'}}>
                    <Text style={{fontWeight:'bold', fontSize:20, textAlignVertical:'center', color:"#FFF"}}>{item.name}</Text>
                    <Text style={{fontWeight:'bold', fontSize:20, textAlignVertical:'center', color:"#FFF"}}>{item.amount}kWh</Text>
                    </View>
                </View>
                </View></TouchableOpacity>
        )
    }))
   
    return (
            <LinearGradient
        // Background Linear Gradient
        colors={['#79AACE', '#0E2471']}
        style={styles.container}
      >
        

        <View style={{backgroundColor:"#FFF", borderTopLeftRadius:20, borderTopRightRadius:20, marginTop:'35%', height:900}}>
            <Text style={{marginTop:'5%', marginHorizontal:'10%', fontWeight:'bold', fontSize:20}}>Appliances -- {room}</Text>
            {renderAllAppliances}
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