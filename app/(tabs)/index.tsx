import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';



export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lette Lemon</Text>
     
      
     
        <View style={styles.hero}>
        
        

            <Text style={{color:"#E8FE43",fontSize:40,fontWeight:"bold",textAlign:"left",marginLeft:20}}>
              Lette Lemon
  
          </Text>
          

          <View style={{...styles.hero,flexDirection:"row"}}>
          <View style={{...styles.hero}}>

          <Text >
                Chegago 
              </Text>
            
          </View>
          <View style={{backgroundColor:"#EA1111",width:"100%",height:200}}>

          </View>
           
              
            
           
            

          </View>
          
          


        </View>
        
  
      
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(205,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  hero:{
    backgroundColor: '#63E11F',
    width: '100%',
    height: 200,
 
  }
});
