import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import CategoryGridTile from '../components/CategoryGridTile';
import { Ionicons } from '@expo/vector-icons';

import { CATEGORIES } from '../data/dummy-data';

const gridItems = CATEGORIES;


const CategoryScreen = (props) => {


    const renderGridCategoryItem = (category) => {
        return (
            <CategoryGridTile category={category} onSelect={() => {
                props.navigation.navigate(
                    {
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: category.item.id
                        }

                    }
                )
            }} />
        );
    };

    return (
        <FlatList keyExtractor={(item, index) => item.id}
            numColumns={2}
            data={gridItems}
            renderItem={renderGridCategoryItem}
        />
    );
};

CategoryScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: (
            <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => {navigationData.navigation.toggleDrawer()}}>
                <Ionicons name="ios-menu" size={25} />
            </TouchableOpacity>
        )
    }
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default CategoryScreen;