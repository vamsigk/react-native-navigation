import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import MealItem from '../components/MealItem';

const MealList = (props) => {

    const renderedMealItem = (mealItem) => {
        return(
            <MealItem meal={mealItem.item} onGoTOMealDetails={() => {
                props.navigation.navigate({
                    routeName: 'MealDetails',
                    params: {
                        meal: mealItem.item
                    }
                })
            }}/>
        )
    };

    return (
       
            <FlatList
                data={props.mealsForCategory}
                keyExtractor={(meal, index) => meal.id}
                renderItem={renderedMealItem}
                style={{ width: "100%" }}
            />
        
    )

}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default MealList;