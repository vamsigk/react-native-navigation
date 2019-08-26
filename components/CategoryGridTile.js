import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryGridTile = (props) => {
    return (
        <TouchableOpacity
            style={[styles.gridCategoryItem, { backgroundColor: props.category.item.color }]}
            onPress={props.onSelect}
        >
            <View>
                <Text style={styles.title}>{props.category.item.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    gridCategoryItem: {
        flex: 1,
        margin: 15,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {height: 2, width: 0},
        shadowRadius: 10,
        elevation: 3
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 15
    }

})


export default CategoryGridTile;