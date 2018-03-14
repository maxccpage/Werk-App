import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import JobsScreen from '../screens/JobsScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ClockInScreen from '../screens/ClockInScreen';
import AccountScreen from '../screens/AccountScreen';
import SupportScreen from '../screens/SupportScreen';

export default TabNavigator(
  {
    Jobs: {
      screen: JobsScreen
    },
    Schedule: {
      screen: ScheduleScreen
    },
    ClockIn: {
      screen: ClockInScreen
    },
    Account: {
      screen: AccountScreen
    },
    Support: {
      screen: SupportScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Jobs':
            iconName = Platform.OS === 'ios' ? `ios-search` : 'md-search';
            break;
          case 'Schedule':
            iconName = Platform.OS === 'ios' ? `ios-calendar` : 'md-calendar';
            break;
          case 'ClockIn':
            iconName = Platform.OS === 'ios' ? `ios-clock` : 'md-clock';
            break;
          case 'Account':
            iconName = Platform.OS === 'ios' ? `ios-contact` : 'md-contact';
            break;
          case 'Support':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle-outline`
                : 'md-information-circle';
        }
        return (
          <Ionicons
            name={iconName}
            size={45}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabBar : Colors.tabBar}
          />
        );
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      activeBackgroundColor: '#044399',
      labelStyle: {
        color: Colors.tabBar,
        fontWeight: '700',
        fontSize: 13
      },

      style: {
        height: 70,
        backgroundColor: Colors.tabBarBackground
      }
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
  }
);
