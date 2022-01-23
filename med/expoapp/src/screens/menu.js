import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import {useTailwind, TailwindProvider} from 'tailwind-rn';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';









export default function Menu({route}) {
    const navigation = useNavigation();
    const tailwind = useTailwind();
    
   
      

    const getCurrentTime=()=>{

        var hr = new Date().getHours();
        var min = new Date().getMinutes();
        var time = hr +':'+ min
  
        
        return time
  }
    const pulseData = {"data":[
        { x: 0, y: 60 },
        { x: 1, y: 63 },
        { x: 2, y: 65 },
        { x: 3, y: 63 },
        { x: 4, y: 56 },
    ]};
    const pulseColor = "rgba(79,178,205,0.2)";
    const pulseBgColor = "#4FB2CD";
    const gsrData = {"data":[
        { x: 0, y: 10 },
        { x: 1, y: 23 },
        { x: 2, y: 55 },
        { x: 3, y: 33 },
        { x: 4, y: 16 },
    ]};
    const gsrColor = "rgba(211,146,138,0.2)";
    const gsrBgColor = "#D3928A";

    const tempData = {"data":[
        { x: 0, y: 70 },
        { x: 1, y: 73 },
        { x: 2, y: 65 },
        { x: 3, y: 72 },
        { x: 4, y: 76 },
    ]};
    const tempColor = "rgba(61,213,152,0.4)";
    const tempBgColor = "#3DD598";

    const emgData = {"data":[
        { x: 0, y: 50 },
        { x: 1, y: 49 },
        { x: 2, y: 25 },
        { x: 3, y: 53 },
        { x: 4, y: 26 },
    ]};
    const emgColor = "rgba(79,178,205,0.2)";
    const emgBgColor = "#4FB2CD";


    useEffect(() => {
        getCurrentTime();
        
    });
   
    return (
        <TailwindProvider>
            <LinearGradient
        // Background Linear Gradient
        colors={['#1F2E35', '#22343C']}
        style={styles.container}
      >
        <View>
            <View style={{ paddingVertical: '10%', backgroundColor:"#172328", borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
            <View style={{ marginHorizontal:'10%'}}>
                <Text style={{fontWeight:'bold', fontSize:30, color:"#FFF", marginTop:'5%'}}>Personal Stats</Text>          
              </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Stats',{menu:'Pulse',data:pulseData,color:pulseColor, bgColor:pulseBgColor})}><View style={{width:'90%', height:100, borderRadius:20, alignSelf:'center', marginTop:'5%', backgroundColor:"rgba(79,178,205,0.4)", flexDirection:'row', justifyContent:'flex-start'}}>
                <View style={{borderRadius:20, height:80, width:80, backgroundColor:"#4FB2CD", marginLeft:'5%', marginTop:'2.5%'}}><Image source={require('../../assets/heartplace.png')} style={{resizeMode:'contain', height:70, alignSelf:'center'}}></Image></View>
                    <View>
                        <Text style={{textAlign:'center', color:"#4FB2CD", fontWeight:'bold', marginTop:'5%', fontSize:25}}> Pulse</Text>
                        <Text style={{textAlign:'center', color:"#4FB2CD", fontWeight:'900', fontSize:15, marginTop:'-5%'}}>   Check rate</Text>
                    </View>
                </View></TouchableOpacity>
                <TouchableOpacity  onPress={()=>navigation.navigate('Stats',{menu:'GSR',data:gsrData,color:gsrColor, bgColor:gsrBgColor})}><View style={{width:'90%', height:100, borderRadius:20, alignSelf:'center', marginTop:'5%', backgroundColor:"rgba(211,146,138,0.5)", flexDirection:'row', justifyContent:'flex-start'}}>
                <View style={{borderRadius:20, height:80, width:80, backgroundColor:"#D3928A", marginLeft:'5%', marginTop:'2.5%'}}><Image source={require('../../assets/rx.png')} style={{resizeMode:'contain', height:70, alignSelf:'center'}}></Image></View>
                    <View>
                        <Text style={{textAlign:'center', color:"#D3928A", fontWeight:'bold', marginTop:'5%', fontSize:25, marginLeft:'-15%'}}> GSR</Text>
                        <Text style={{textAlign:'center', color:"#D3928A", fontWeight:'900', fontSize:15, marginTop:'-5%'}}>   View levels</Text>
                    </View>
                </View></TouchableOpacity>
                <TouchableOpacity  onPress={()=>navigation.navigate('Stats',{menu:'Temperature',data:tempData,color:tempColor, bgColor:tempBgColor})}><View style={{width:'90%', height:100, borderRadius:20, alignSelf:'center', marginTop:'5%', backgroundColor:"rgba(61,213,152,0.4)", flexDirection:'row', justifyContent:'flex-start'}}>
                <View style={{borderRadius:20, height:80, width:80, backgroundColor:"#3DD598", marginLeft:'5%', marginTop:'2.5%'}}><Image source={require('../../assets/thermo.png')} style={{resizeMode:'contain', height:70, alignSelf:'center'}}></Image></View>
                    <View>
                        <Text style={{textAlign:'center', color:"#3DD598", fontWeight:'bold', marginTop:'5%', fontSize:25}}>  Temperature</Text>
                        <Text style={{textAlign:'center', color:"#3DD598", fontWeight:'900', fontSize:15, marginTop:'-5%', marginLeft:'-30%'}}>View levels</Text>
                    </View>
                </View></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Stats',{menu:'EMG',data:emgData,color:emgColor, bgColor:emgBgColor})}><View style={{width:'90%', height:100, borderRadius:20, alignSelf:'center', marginTop:'5%', backgroundColor:"rgba(79,178,205,0.4)", flexDirection:'row', justifyContent:'flex-start'}}>
                <View style={{borderRadius:20, height:80, width:80, backgroundColor:"#4FB2CD", marginLeft:'5%', marginTop:'2.5%'}}><Image source={require('../../assets/emg.png')} style={{resizeMode:'contain', height:70, alignSelf:'center'}}></Image></View>
                    <View>
                        <Text style={{textAlign:'center', color:"#4FB2CD", fontWeight:'bold', marginTop:'5%', fontSize:25}}> EMG</Text>
                        <Text style={{textAlign:'center', color:"#4FB2CD", fontWeight:'900', fontSize:15, marginTop:'-5%'}}>     View levels</Text>
                    </View>
                </View></TouchableOpacity>
           
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-evenly',borderTopEndRadius:40, borderTopLeftRadius:40, position:'absolute', bottom:0, width:'100%', height:70, backgroundColor:"#30444E", paddingTop:'5%'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Menu')}><Icon name="heart" type="antdesign" color="#3ED598" style={{textAlignVertical:'center'}}></Icon></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Market')}><Icon name="lock" type="entypo" color="#96A7AF" style={{textAlignVertical:'center'}}></Icon></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}><Icon name="home" type="ionicon" color="#96A7AF" style={{textAlignVertical:'center'}}></Icon></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}><Icon name="chatbox-ellipses" type="ionicon" color="#96A7AF" style={{textAlignVertical:'center'}}></Icon></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}><Icon name="bell" type="octicon" color="#96A7AF" style={{textAlignVertical:'center'}}></Icon></TouchableOpacity>
        </View>
        </LinearGradient>
        </TailwindProvider>
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