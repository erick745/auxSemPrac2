import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';

export default function App() {
  const [result,setResult]=useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.line}>
        <TouchableOpacity 
          onPress={()=>{
            setResult(result+9);
          }}
        >
          <View style={styles.button}><Text style={{color:'white'}}>9</Text></View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>{
            setResult(result+8);
          }}
        >
          <View style={styles.button}><Text style={{color:'white'}}>8</Text></View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>{
            setResult(result+7);
          }}
        >
          <View style={styles.button}><Text style={{color:'white'}}>7</Text></View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>{
            setResult(result+'+');
          }}
        >
          <View style={styles.button}><Text style={{color:'white'}}>+</Text></View>
        </TouchableOpacity>
      </View>
      <View style={styles.line}>
        <TouchableOpacity 
          onPress={()=>{
            setResult(result+6);
          }}
        >
          <View style={styles.button}><Text style={{color:'white'}}>6</Text></View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>{
            setResult(result+5);
          }}
        >
          <View style={styles.button}><Text style={{color:'white'}}>5</Text></View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>{
            setResult(result+4);
          }}
        >
          <View style={styles.button}><Text style={{color:'white'}}>4</Text></View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>{
            setResult(result+'-');
          }}
        >
          <View style={styles.button}><Text style={{color:'white'}}>-</Text></View>
        </TouchableOpacity>
      </View>
      <View style={styles.line}>
        <TouchableOpacity 
          onPress={()=>{
            setResult(result+3);
          }}
        >
          <View style={styles.button}><Text style={{color:'white'}}>3</Text></View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>{
            setResult(result+2);
          }}
        >
          <View style={styles.button}><Text style={{color:'white'}}>2</Text></View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>{
            setResult(result+1);
          }}
        >
          <View style={styles.button}><Text style={{color:'white'}}>1</Text></View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>{
            setResult(result+'*');
          }}
        >
          <View style={styles.button}><Text style={{color:'white'}}>*</Text></View>
        </TouchableOpacity>
      </View>
      <View style={styles.line}>
        <TouchableOpacity 
          onPress={()=>{
            setResult(result+'^');
          }}
        >
          <View style={styles.button}><Text style={{color:'white'}}>^</Text></View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>{
            setResult('');
          }}
        >
          <View style={styles.button}><Text style={{color:'white'}}>reset</Text></View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.button}><Text style={{color:'white'}}></Text></View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={async()=>{
            const resultapi=await fetch('https://calculadoraappsis719.herokuapp.com/getoperation/'+result);
            const resu=await resultapi.json();
            setResult(resu.result);
          }}
        >
          <View style={styles.button}><Text style={{color:'white'}}>=</Text></View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  result:{
    flex:1,
    flexDirection:'row',
    alignItems:'stretch',
    justifyContent:'center',
    textAlignVertical:'center',
    textAlign:'center',
    fontSize:25
  },
  button:{
    width:50,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#104EA3'
  },
  line:{
    flex:1,
    flexDirection:'row',
    width:Dimensions.get('window').width,
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
});
