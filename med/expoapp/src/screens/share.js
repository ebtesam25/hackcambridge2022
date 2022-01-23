import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import {useTailwind, TailwindProvider} from 'tailwind-rn';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';









export default function Share({route}) {
    const navigation = useNavigation();
    const tailwind = useTailwind();
    const [pulseChecked, setPulseChecked] = React.useState(false);
    const [gsrChecked, setGsrChecked] = React.useState(false);
    const [tempChecked, setTempChecked] = React.useState(false);
    const [emgChecked, setEmgChecked] = React.useState(false);

    
   
      

    const getCurrentTime=()=>{

        var hr = new Date().getHours();
        var min = new Date().getMinutes();
        var time = hr +':'+ min
  
        
        return time
  }
    const [companies, setCompanies] = useState({"buyers":[{"id":"1","name":"Pfizer","amount":"10"},{"id":"2","name":"Sanofi","amount":"10"},{"id":"3","name":"Bayer AG","amount":"50"}]})

    useEffect(() => {
        getCurrentTime();
        
    });

    const renderAllBuyers = companies.buyers.map((item => {
        return(
            <TouchableOpacity><LinearGradient colors={['#1C282F','#1C282D']} style={{width:'90%', height:50, borderRadius:10, marginTop:'10%', alignSelf:'center'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:'10%'}}>
                <Image source={require('../../assets/moneybag.png')} style={{height:50, width:50, resizeMode:'contain'}}></Image>
                <Text style={{textAlign:'center', color:"#FFF", fontWeight:'bold', marginTop:'5%'}}>{item.name}</Text>
                <Text style={{textAlign:'center', color:"#FFF", fontWeight:'bold', marginTop:'5%'}}>{item.amount}</Text>
            </View>
        </LinearGradient></TouchableOpacity>
        )
    }))
   
   
    return (
        <TailwindProvider>
            <LinearGradient
        // Background Linear Gradient
        colors={['#1F2E35', '#22343C']}
        style={styles.container}
      >
        <View>
            <View style={{ paddingVertical: '10%', backgroundColor:"#3ED598", borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
            <View style={{ marginHorizontal:'10%'}}>
                <Text style={{fontWeight:'bold', fontSize:30, color:"#FFF", marginTop:'5%'}}>Market</Text>          
              </View>
            </View>

            <View>
                <ScrollView>
                    {renderAllBuyers}
                </ScrollView>
            </View>





      
           
            

                <LinearGradient colors={['#3ED598','#138356']} style={{marginTop:'15%', width:'70%', alignSelf:'center', paddingVertical:'3.5%', borderRadius:15}}>
              <View>
                <TouchableOpacity><View style={{flexDirection:'row', justifyContent:'center'}}><Text style={{textAlign:'center', color:'#FFF',  fontSize:18, fontWeight:'bold'}}>Confirm   </Text><Icon name="arrowright" type="antdesign" color="#FFF"></Icon></View></TouchableOpacity>
              </View></LinearGradient>
           
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