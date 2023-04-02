import {ScrollView, Text} from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer'

export default ContactScreen = () => {
  const sendMail = () => {
    MailComposer.composeAsync({
            recipients: ['pinoyBBQ@gmail.com'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        });
  }
  return (
	<ScrollView>
        <Animatable.View 
            animation='zoomIn' 
            duration={2000} 
            delay={1000}
        >
            <Card wrapperStyle={{ margin: 20 }}>
                <Card.Title>
                    Contact Information
                </Card.Title>
                <Card.Divider />
                
                <Text>1 Pinoy Street</Text>
                <Text>Sunnyvale, CA 98001</Text>
                <Text style={{marginBottom:10}}>U.S.A</Text>
                <Text>Phone: 1-206-555-1234</Text>
                <Text>Email: pinoyBBQ@gmail.com</Text>
                <Button 
                    title='Send Email' 
                    buttonStyle={{ backgroundColor: '#5637DD', margin: 40 }}
                    icon={
                        <Icon 
                            name='envelope-o'
                            type='font-awesome'
                            color='#fff'
                            iconStyle={{ marginRight: 10 }}
                        />
                    }
                    onPress={() => sendMail()}
                />
                
            </Card>
        </Animatable.View>
    </ScrollView>
)

};
