import React from 'react';
import {View, StyleSheet} from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';

import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {

    const categoryId = props.navigation.getParam('categoryId');
    const mealsForCategory = MEALS.filter(meal => meal.categoriesId.indexOf(categoryId) >= 0 );


    return(
        <View style={styles.screen}>
            <MealList mealsForCategory={mealsForCategory} navigation={props.navigation}/>
        </View>
    )
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const category = CATEGORIES.find(x => x.id === 
        navigationData.navigation.getParam('categoryId'));
    return {
        headerTitle: category.title,
        headerStyle: {
            backgroundColor: category.color
        },
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"    
    }
});

export default CategoryMealsScreen;