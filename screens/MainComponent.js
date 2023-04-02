//import * as React from 'react';
import { Text, View, StyleSheet, Image, Platform } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { 
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
//import { getFocusedRouteNameFromRoute } from '@react-navigation/core';
import Constants from 'expo-constants';
import HomeScreen from './HomeScreen';
import ContactScreen from './ContactScreen';
import AboutScreen from './AboutScreen';
import MenuScreen from './MenuScreen';
//import logo from '../assets/Images/logo.PNG';
import logo from '../assets/Images/logo.jpg';

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: 'black' }
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={({ navigation }) => ({ 
                    title: 'Home', 
                    headerLeft: () => (
                        <Icon 
                            name='home'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const MenuNavigator = () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen
				name= 'Menu'
				component={MenuScreen}
                options={({ navigation }) => ({ 
                    title: 'Menu', 
                    headerLeft: () => (
                        <Icon 
                            name='list-alt'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
			/>
		</Stack.Navigator>
	);
};

const ContactNavigator = () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen
				name= 'Contact'
				component={ContactScreen}
                options={({ navigation }) => ({ 
                    title: 'Contact Us', 
                    headerLeft: () => (
                        <Icon 
                            name='address-card'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
			/>
		</Stack.Navigator>
	);
};

const AboutNavigator = () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen
				name= 'About'
				component={AboutScreen}
                options={({ navigation }) => ({ 
                    title: 'About Us', 
                    headerLeft: () => (
                        <Icon 
                            name='info-circle'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
			/>
		</Stack.Navigator>
	);
};

const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
            <View style={{ flex: 1 }}>
              <Image source={logo} style={styles.drawerImage} />  
            </View>
            <View style={{ flex: 2}}>
                <Text style={styles.drawerHeaderText}>PinoyBBQ</Text>
            </View>
        </View>
        <DrawerItemList {...props} labelStyle={{ fontWeight: 'bold'}} />
    </DrawerContentScrollView>
);


export default function MainComponent() {
  return (
    
        // <View style={styles.container}>
        //   <Text style={styles.paragraph}>
        //     PinoyBBQ
        //   </Text>
        //   <Button title='Order Now' onPress={() => console.log('Order Clicked')}/>
      <View  style={{ 
                flex: 1, 
                paddingTop: 
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
              }}
      >
        <Drawer.Navigator
          initialRouteName='Home'
          drawerContent={CustomDrawerContent}
        >
        
          <Drawer.Screen 
                    name='Home'
                    component={HomeNavigator}
                    options={{ 
                        title: 'Home',
                        drawerIcon: ({ color }) => (
                            <Icon 
                                name='home'
                                type= 'font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
          />

          <Drawer.Screen 
                    name='Menu'
                    component={MenuNavigator}
                    options={{ title: 'Menu',
                    drawerIcon: ({ color }) => (
                        <Icon 
                            name='list-alt'
                            type= 'font-awesome'
                            size={24}
                            iconStyle={{ width: 24 }}
                            color={color}
                        />
                    )
                    }}
          />

          <Drawer.Screen 
                    name='Contact'
                    component={ContactNavigator}
                    options={{ title: 'Contact Us',
                    drawerIcon: ({ color }) => (
                        <Icon 
                            name='address-card'
                            type= 'font-awesome'
                            size={24}
                            iconStyle={{ width: 24 }}
                            color={color}
                        />
                    )
                    }}
          />

          <Drawer.Screen 
                    name='About'
                    component={AboutNavigator}
                    options={{ title: 'About Us',
                    drawerIcon: ({ color }) => (
                        <Icon 
                            name='info-circle'
                            type= 'font-awesome'
                            size={24}
                            iconStyle={{ width: 24 }}
                            color={color}
                        />
                    )
                    }}
          />
        </Drawer.Navigator>
      
      </View>
    
  );
};

const styles = StyleSheet.create({
    drawerHeader: {
        backgroundColor: 'black',
        height: 140, 
        alignItems:'center',
        justifyContent:'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: 'white',
        fontSize: 24
    }
});
