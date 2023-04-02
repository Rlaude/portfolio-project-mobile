import {Text, View, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import { Button, Card } from 'react-native-elements';
import foods from '../assets/features/foods';

export default MenuScreen = ({item}) => {
  return(
    <ScrollView>
      {foods.map(item => (
        <View key={item.id}>
          <Card>
            <Card.Title style={styles.title}>{item.name}</Card.Title>
            <Image source={item.image} style={styles.image}/>
            <Button title='Select Item' onPress={() => console.log(`Item Clicked: ${item.name} for $${item.price}`)} buttonStyle={{backgroundColor: 'black', borderRadius: 5 }}/>
            <Text style={{textAlign:'center'}}>{item.description}</Text>
          </Card>
        </View>
      ))}
    </ScrollView>

  )
}


const styles = StyleSheet.create({
  title: {
    
    padding: 5,
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 200, 
    height: 200, 
    flex: 1,
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  }
  
})

