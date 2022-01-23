import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle, Stop } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import {
    SlideAreaChart,
    SlideBarChart,
    SlideBarChartProps,
    SlideAreaChartProps,
    YAxisProps,
    XAxisProps,
    XAxisLabelAlignment,
    YAxisLabelAlignment,
    CursorProps,
    ToolTipProps,
    ToolTipTextRenderersInput,
    GradientProps,
  } from 'react-native-slide-charts'









export default function Stock({route}) {
    const navigation = useNavigation();

    const data = {"data":[
        { x: 0, y: 100 },
        { x: 1, y: 150 },
        { x: 2, y: 345 },
        { x: 3, y: 673 },
        { x: 4, y: 906 },
    ]};

    const val = {"val":[{"id":"1","name":"BTC","env":"45","social":"50","gov":"20","overall":"70","data":[
        { x: 0, y: 100 },
        { x: 1, y: 150 },
        { x: 2, y: 345 },
        { x: 3, y: 673 },
        { x: 4, y: 906 },
    ]},{"id":"2","name":"ETH","env":"35","social":"80","gov":"60","overall":"80","data":[
        { x: 0, y: 100 },
        { x: 1, y: 120 },
        { x: 2, y: 20 },
        { x: 3, y: 673 },
        { x: 4, y: 906 },
    ]},
    {"id":"3","name":"BTC","env":"45","social":"50","gov":"20","overall":"70"},{"id":"4","name":"BTC","env":"45","social":"50","gov":"20","overall":"70","data":[
        { x: 0, y: 1000 },
        { x: 1, y: 400 },
        { x: 2, y: 600 },
        { x: 3, y: 673 },
        { x: 4, y: 400 },
    ]}]}

    const [i, setI] = useState(0);

    
    

    
   
      

    const getCurrentTime=()=>{

        var hr = new Date().getHours();
        var min = new Date().getMinutes();
        var time = hr +':'+ min
  
        
        return time
  }

    useEffect(() => {
        getCurrentTime();
        
    });
    const fillGradient = (props) => {
        return (
          <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" {...props} colors={['#4c669f', '#3b5998', '#192f6a']}>
            <Stop stopColor="#000000" offset="0%" stopOpacity="0.2" />
            <Stop stopColor="#FFFFFF" offset="100%" stopOpacity="0.2" />
          </LinearGradient>
        );
      };
   
    return (
            <LinearGradient
        // Background Linear Gradient
        colors={['#FFF', '#DDD']}
        style={styles.container}
      >
        <View>
            <View style={{ paddingVertical: '10%', backgroundColor:"#F6543E", borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
            <View style={{ marginHorizontal:'10%', flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{fontWeight:'bold', fontSize:20, color:"#FFF", marginTop:'5%'}}>Micropayments</Text>
                <Icon name='info' style={{marginTop:'50%'}} color="#FFF"></Icon>         
              </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:'10%', marginTop:'5%'}}>
                <TouchableOpacity onPress={()=>setI(0)}><Text style={{fontWeight:'bold', color: i==0?"#F6543E":"#EAEAEA"}}>BTC</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>setI(1)}><Text style={{fontWeight:'bold', color:i==1?"#F6543E":"#EAEAEA"}}>ETH</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>setI(2)}><Text style={{fontWeight:'bold', color:i==2?"#F6543E":"#EAEAEA"}}>LTC</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>setI(3)}><Text style={{fontWeight:'bold', color:i==3?"#F6543E":"#EAEAEA"}}>XRP</Text></TouchableOpacity>
            </View>
            <View style={{marginTop:'5%', alignSelf:'center',backgroundColor:"#FFF", borderRadius:20,height:325}}>
            <SlideAreaChart
                style={{backgroundColor:"#FFF", borderRadius:20, alignSelf:'center'}}
                width={350}
                height={300}
                data={val.val[i].data}
                fillColor={'#FEF0EE'}
                chartLineColor={'#EE6855'}
                  yAxisProps={{
                    showBaseLine: false,
                    verticalLineWidth: 0,
                    axisLabel: 'Value',
                    axisLabelAlignment: 'middle',
                    rotateAxisLabel: true,
                    hideMarkers: true,
                  }}
                  xAxisProps={{
                    axisLabel: 'Time',
                  }}
                  toolTipProps={{
                    toolTipTextRenderers: [
                      ({ scaleY, y }) => ({
                        text: scaleY
                          .invert(y)
                          .toFixed(1)
                          .toString(),
                      }),
                    ],
                  }}
                alwaysShowIndicator={false}
                hideMarkers={false}
                />
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between', width:350, alignSelf:'center', marginTop:'2.5%'}}>
                <TouchableOpacity><View style={{width:100, height:100, borderRadius:20, alignSelf:'center', marginTop:'5%', backgroundColor:'#DA5846', flexDirection:'row', justifyContent:'center'}}>
                    <View style={{alignContent:'center'}}>
                        <Text style={{textAlign:'center', color:'#FFF', fontWeight:'bold', fontSize:30, marginTop:'5%'}}>{val.val[i].env}</Text>
                        <Text style={{textAlign:'center', color:'#FFF', fontWeight:'bold', marginTop:'5%', fontSize:10}}>Environmental</Text>
                    </View>
                </View></TouchableOpacity>
                
                <TouchableOpacity><View style={{width:100, height:100, borderRadius:20, alignSelf:'center', marginTop:'5%', backgroundColor:'#DA5846', flexDirection:'row', justifyContent:'center'}}>
                    <View style={{alignContent:'center'}}>
                        <Text style={{textAlign:'center', color:'#FFF', fontWeight:'bold', fontSize:30, marginTop:'5%'}}>{val.val[i].social}</Text>
                        <Text style={{textAlign:'center', color:'#FFF', fontWeight:'bold', marginTop:'5%', fontSize:10}}>Social</Text>
                    </View>
                </View></TouchableOpacity>
                <TouchableOpacity><View style={{width:100, height:100, borderRadius:20, alignSelf:'center', marginTop:'5%', backgroundColor:'#DA5846', flexDirection:'row', justifyContent:'center'}}>
                    <View style={{alignContent:'center'}}>
                        <Text style={{textAlign:'center', color:'#FFF', fontWeight:'bold', fontSize:30, marginTop:'5%'}}>{val.val[i].gov}</Text>
                        <Text style={{textAlign:'center', color:'#FFF', fontWeight:'bold', marginTop:'5%', fontSize:10}}>Governance</Text>
                    </View>
                </View></TouchableOpacity>
                </View>
                <TouchableOpacity><View style={{width:350, height:100, borderRadius:20, alignSelf:'center', marginTop:'5%', backgroundColor:'#46DA6F', flexDirection:'row', justifyContent:'center'}}>
                    <View style={{alignContent:'center'}}>
                        <Text style={{textAlign:'center', color:'#FFF', fontWeight:'bold', fontSize:30, marginTop:'5%'}}>{val.val[i].overall}</Text>
                        <Text style={{textAlign:'center', color:'#FFF', fontWeight:'bold', marginTop:'5%', fontSize:10}}>Overall Green Score</Text>
                    </View>
                </View></TouchableOpacity>

                <LinearGradient colors={['#111','#000']} style={{marginTop:'15%', width:'70%', alignSelf:'center', paddingVertical:'3.5%', borderRadius:15}}>
              <View>
                <TouchableOpacity onPress={()=> loggedIn(email,password)}><View style={{flexDirection:'row', justifyContent:'center'}}><Text style={{textAlign:'center', color:'#FFF',  fontSize:18, fontWeight:'bold'}}>Pay Now  </Text><Icon name="arrowright" type="antdesign" color="#FFF"></Icon></View></TouchableOpacity>
              </View></LinearGradient>
           
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-evenly',borderTopEndRadius:40, borderTopLeftRadius:40, position:'absolute', bottom:0, width:'100%', height:70, backgroundColor:"#0E2471", paddingTop:'5%'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Menu')}><Icon name="barschart" type="antdesign" color="#96A7AF" style={{textAlignVertical:'center'}}></Icon></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Market')}><Icon name="wallet" type="entypo" color="#96A7AF" style={{textAlignVertical:'center'}}></Icon></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}><Icon name="home" type="ionicon" color="#FFF" style={{textAlignVertical:'center'}}></Icon></TouchableOpacity>
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