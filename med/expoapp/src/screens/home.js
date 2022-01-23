import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import {useTailwind, TailwindProvider} from 'tailwind-rn';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';









export default function Home({route}) {
    const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
    const navigation = useNavigation();
    const tailwind = useTailwind();
    const [allEvents, setAllEvents] = useState({'events':[
        {'id':'1', 'title':'Got Coffee', 'time':'20:30','text':'Hello Cambridge', 'img':'https://www.cancer.org/content/dam/cancer-org/images/photographs/single-use/espresso-coffee-cup-with-beans-on-table-restricted.jpg'},
        {'id':'2', 'title':'Got Coffee Again', 'time':'20:30','text':'Hello Cambridge', 'img':'https://www.cancer.org/content/dam/cancer-org/images/photographs/single-use/espresso-coffee-cup-with-beans-on-table-restricted.jpg'}]})
    
    

    const [event, setEvent] = useState('');
    const renderAllEvents = allEvents.events.map((item => {
        return(
            <LinearGradient colors={['#419FB9','#AE756E']} style={{width:'90%', height:280, borderRadius:30, marginTop:'10%'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:'10%'}}>
                <Text style={{textAlign:'center', color:"#FFF", fontWeight:'bold', marginTop:'5%'}}>{item.title}</Text>
                <Text style={{textAlign:'center', color:"#FFF", fontWeight:'bold', marginTop:'5%'}}>{item.time}</Text>
            </View>
            <LinearGradient colors={['#419FB9','#AE756E']} style={{width:'80%', height:200, borderRadius:30, marginTop:'10%', alignSelf:'center'}}>
            <View style={{marginHorizontal:'5%'}}>
            <Text style={{fontWeight:'900', borderRadius:10, width:'95%', height:50, marginTop:'5%', paddingLeft:'5%', color:"#FFF"}}>{item.text}</Text>
            <View>
                <Image source={{uri:item.img}} style={{width:400, height:100, alignSelf:'center', borderRadius:20, resizeMode:'contain'}}></Image>
            </View>
            </View>
        </LinearGradient>
        </LinearGradient>
        )
    }))
   
      
    const loggedIn = (event, password) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "action": "login",
        "event": event,
        "password": password
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://us-central1-aiot-fit-xlab.cloudfunctions.net/helpinghands", requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result.status);
            if(result.status=="success"){
                navigation.navigate('Home');
            }})
        .catch(error => console.log('error', error));
        
        
    }
    const getCurrentTime=()=>{

        var hr = new Date().getHours();
        var min = new Date().getMinutes();
        var time = hr +':'+ min
  
        
        return time
  }

    useEffect(() => {
        getCurrentTime();
        
    });
   
    return (
        <TailwindProvider>
            <LinearGradient
        // Background Linear Gradient
        colors={['rgba(34,52,60,1)', 'rgba(31,46,53,1)']}
        style={styles.container}
      >
        <View>
            <View style={{ marginTop: '15%'}}>
            <View style={{ marginHorizontal:'10%'}}>

                <LinearGradient colors={['#4FB2CD','#2454B1']} style={{width:'90%', height:100, borderRadius:30}}>
                    <View>
                        <Text style={{textAlign:'center', color:"#FFF", fontWeight:'bold', marginTop:'5%'}}>Connect Bluetooth Device</Text>
                        <Image source={require('../../assets/bt.png')} style={{resizeMode:'contain', height:70, alignSelf:'center'}}></Image>
                    </View>
                </LinearGradient>

                <LinearGradient colors={['#419FB9','#AE756E']} style={{width:'90%', height:280, borderRadius:30, marginTop:'10%'}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:'10%'}}>
                        <TextInput style={{textAlign:'center', color:"#FFF", fontWeight:'bold', marginTop:'5%'}} placeholder='Event Title'></TextInput>
                        <Text style={{textAlign:'center', color:"#FFF", fontWeight:'bold', marginTop:'5%'}}>{getCurrentTime()}</Text>
                    </View>
                    <LinearGradient colors={['#419FB9','#AE756E']} style={{width:'80%', height:200, borderRadius:30, marginTop:'10%', alignSelf:'center'}}>
                    <View style={{marginHorizontal:'5%'}}>
                    <TextInput value={event} onChangeText={setEvent} style={{fontWeight:'900', borderRadius:10, width:'95%', height:50, marginTop:'5%', paddingLeft:'5%'}} placeholder="Type here..." placeholderTextColor="#FFF"></TextInput>
                    <View style={{borderColor:"#FFF", borderStyle:'dashed', borderWidth:1, width:'90%', alignSelf:'center', borderRadius:20, height:120}}>
                        <TouchableOpacity onPress={()=>pickImage()}><Icon name="upload-cloud" type="feather" color="white" style={{textAlignVertical:'center', marginTop:'20%'}}></Icon></TouchableOpacity>
                    </View>
                    </View>
                </LinearGradient>
                    <TouchableOpacity><View style={{backgroundColor:"#D3928A", width:50, borderRadius:50, height:50, alignSelf:'flex-end'}}>
                        <Icon name="add-circle" type="ionicons" color="#FFF" style={{marginTop:'1%', alignSelf:'center'}} size={48}></Icon>
                    </View></TouchableOpacity>
                </LinearGradient>

                <View style={{height:300, marginTop:'10%'}}><ScrollView>
                    
                {renderAllEvents}
            </ScrollView>
            </View>
                        
               
              </View>
              
              
            </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-evenly',borderTopEndRadius:40, borderTopLeftRadius:40, position:'absolute', bottom:0, width:'100%', height:70, backgroundColor:"#30444E", paddingTop:'5%'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Menu')}><Icon name="heart" type="antdesign" color="#96A7AF" style={{textAlignVertical:'center'}}></Icon></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Market')}><Icon name="lock" type="entypo" color="#96A7AF" style={{textAlignVertical:'center'}}></Icon></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}><Icon name="home" type="ionicon" color="#3ED598" style={{textAlignVertical:'center'}}></Icon></TouchableOpacity>
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