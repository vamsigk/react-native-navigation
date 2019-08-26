import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createBottomTabNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import CategoriesScreen from '../screens/CategoryScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouriteMealsScreen';
import FiltersScreen from '../screens/FiltersScreen';

import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const MealStackNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen
        },
        CategoryMeals: {
            screen: CategoryMealsScreen
        },
        MealDetails: {
            screen: MealDetailScreen
        }
    },
    defaultStackNavOptions
);

const FavouritesStackNavigator = createStackNavigator(
    {
        Favourites: FavouritesScreen,
        MealDetails: MealDetailScreen
    },
    defaultStackNavOptions
);

const tabScreenConfig = {
    Meals: {
        screen: MealStackNavigator,
        navigationOptions: {
            tabBarLabel: 'All Meals',
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
                );
            }
        }
    },
    Favourites: {
        screen: FavouritesStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Favourites!',
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
                );
            }
        }
    }
};

const defaultStackNavOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'black'
    }
};




const MealBottomTabNavigator = createBottomTabNavigator(
    tabScreenConfig,
    {
        tapBarOptions: {
            activeTintColor: Colors.accentColor
        }
    }

);

const MealBottomMaterialTabNavigator = createMaterialBottomTabNavigator(
    tabScreenConfig,
    {
        activeTintColor: Colors.accentColor,
        shifting: true
    }
);

const MealRootNavigator = Platform.OS === 'ios' ? MealBottomTabNavigator : MealBottomMaterialTabNavigator;

const FiltersStackNavigator = createStackNavigator({
    Filters: FiltersScreen
})

const AppNavigator = createDrawerNavigator(
    {
        MealsAndFav: {
            screen: MealRootNavigator,
            navigationOptions: {
                drawerLabel: 'Meals'
            }
        },
        Filters: {
            screen: FiltersStackNavigator,
            navigationOptions: {
                drawerLabel: 'Filters'
            }
        }
    },
    {
        contentOptions: {
            activeTintColor: Colors.accentColor,
            labelStyle: {
                fontFamily: 'open-sans-regular'
            }
        }
    }
);

export default createAppContainer(AppNavigator);