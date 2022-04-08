import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigation } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from "./screens/ProfileScreen";
import ScoreScreen from './screens/ScoreScreen';
import AttendanceScreen from './screens/AttendanceScreen';

export default class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            navLabel: {home:"Home", profile:"Profile", attendance:"Attendance", score:"Score"}
        };
    }

    render(){
        const Tab = createBottomTabNavigation();

        return (
            <NavigationContainer>
                <Tab.Navigator 
                initialRouteName={this.state.navLabel.home}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === this.state.navLabel.home){
                        iconName = focused ? 'home' : 'home-outline';

                    } else if (rn === this.state.navLabel.profile){
                        iconName = focused ? 'person-circle' : 'person-circle-outline';

                    } else if (rn === this.state.navLabel.attendance){
                        iconName = focused ? 'today' : 'today-outline';

                    } else if (rn === this.state.navLabel.score){
                        iconName = focused ? 'pie-chart' : 'pie-chart-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}

            tabBarOptions={{
                activeTintColor: 'purple',
                inactiveTintColor: 'grey',
                labelStyle: { fontSize:12 },
                style:{padding:10}
            }}>
            
            <Tab.Screen name={this.state.navLabel.home} component={HomeScreen} /> 
            <Tab.Screen name={this.state.navLabel.attendance} component={AttendanceScreen} />
            <Tab.Screen name={this.state.navLabel.score} component={ScoreScreen} />
            <Tab.Screen name={this.state.navLabel.profile} component={ProfileScreen} />
        </Tab.Navigator>
        </NavigationContainer>
        )
    }
}