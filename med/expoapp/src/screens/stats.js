import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle, Stop } from 'react-native-svg';
import {useTailwind, TailwindProvider} from 'tailwind-rn';
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









export default function Stats({route}) {
    const navigation = useNavigation();
    const tailwind = useTailwind();
    const { menu, data, color, bgColor } = route.params;

    
    

    
   
      

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
        <TailwindProvider>
            <LinearGradient
        // Background Linear Gradient
        colors={['#1F2E35', '#22343C']}
        style={styles.container}
      >
        <View>
            <View style={{ paddingVertical: '10%', backgroundColor:"#172328", borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
            <View style={{ marginHorizontal:'10%'}}>
                <Text style={{fontWeight:'bold', fontSize:30, color:"#FFF", marginTop:'5%'}}>{menu}</Text>          
              </View>
            </View>
            <View style={{marginTop:'5%', alignSelf:'center',backgroundColor:"#30444E", borderRadius:20,height:325}}>
            <SlideAreaChart
                style={{backgroundColor:"#30444E", borderRadius:20, alignSelf:'center'}}
                width={350}
                height={300}
                data={data.data}
                fillColor={color}
                chartLineColor={color}
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

            <TouchableOpacity><View style={{width:'80%', height:100, borderRadius:20, alignSelf:'center', marginTop:'5%', backgroundColor:color, flexDirection:'row', justifyContent:'flex-start'}}>
                <View style={{borderRadius:20, height:80, width:80, backgroundColor:color, marginLeft:'5%', marginTop:'2.5%'}}></View>
                    <View>
                        <Text style={{textAlign:'center', color:bgColor, fontWeight:'900', marginTop:'5%', fontSize:25}}>    {menu}</Text>
                        <Text style={{textAlign:'center', color:bgColor, fontWeight:'bold', fontSize:30, marginTop:'-5%'}}> {data.data[0].y}</Text>
                        <Text style={{textAlign:'center', color:bgColor, fontWeight:'bold', fontSize:12, marginTop:'-5%'}}> Today</Text>
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