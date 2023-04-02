import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';
import { Card } from 'react-native-elements';
import Beach from '../assets/Images/beach.jpg'



export default AboutScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Beach} resizeMode='cover' style={styles.image}>
        <Card style={styles.card}>
        <Card.Title>Mission Statement</Card.Title>
        <Text>Lorem ipsum dolor sit amet, an eos veniam timeam conceptam, ei cum nonumes scribentur. Eos eu sanctus propriae reprehendunt. Id nam prima exerci, sit an sale vocibus. Reque euismod officiis nam at, ut dicunt alienum expetendis has, eos et laoreet noluisse atomorum. 
        </Text>
        </Card>
       </ImageBackground>  
        
          
    
      
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }, 
  card: {
    flex: 1
  }
})