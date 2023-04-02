import {View, Text, StyleSheet, Image, ScrollView, FlatList} from 'react-native';
import { Button } from 'react-native-elements';
import Lumpia from '../assets/Images/lumpia.jpg';
import Chicken from '../assets/Images/chicken.jpg';
import Pork from '../assets/Images/porkbbq.webp';

const HomeScreen = ({navigation}) => {
  const MenuHandler = () => {
  navigation.navigate('Menu');
  }
    
  
  return (
    <View style={styles.container}>
      <View style={{paddingTop: 20}}>
        <Button title='Order Now' onPress={MenuHandler} buttonStyle={{backgroundColor: 'black', borderRadius: 5 }} /> 
      </View>
      
          <ScrollView> 
            <View > 
              <Image source={Pork} style={styles.homepictures}/> 
              <Image source={Chicken} style={styles.homepictures}/> 
              <Image source={Lumpia} style={styles.homepictures}/> 
            </View>
          </ScrollView>
        
    </View>
  )
}
export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  homepictures: {
    
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 350,
    height: 200
    
  }
})


