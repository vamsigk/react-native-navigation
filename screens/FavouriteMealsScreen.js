import React from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';

import MealList from '../components/MealList';

import { MEALS } from '../data/dummy-data';

import { Ionicons } from '@expo/vector-icons';

const FavouriteMealsScreen = (props) => {

    const favMeals = MEALS.filter(x => x.id === 'm1' || x.id === 'm2');

    return(
        <View style={styles.screen}>
            <MealList mealsForCategory={favMeals} navigation={props.navigation}/>
        </View>
    )
}

FavouriteMealsScreen.navigationOptions = (navigationData) => {
    return{
        headerTitle: 'Favourites',
        headerLeft: (
            <TouchableOpacity style={{paddingLeft: 10}} onPress={() => {navigationData.navigation.toggleDrawer()}}>
                <Ionicons name="ios-menu" size={25}/>
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"    
    }
});

export default FavouriteMealsScreen;