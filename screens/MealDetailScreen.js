import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const MealDetailScreen = (props) => {

    const meal = props.navigation.getParam('meal');

    return (
        <ScrollView>
            <View style={styles.mealRow}>
                <ImageBackground style={styles.bgImage} source={{ uri: meal.imageUrl }}>
                    <View style={styles.headerTitleContainer}>
                        <Text style={styles.headerTitle} numberOfLines={1}>{meal.title}</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                <Text>{meal.duration}min</Text>
                <Text>{meal.complexity.toUpperCase()}</Text>
                <Text>{meal.affordability}</Text>
            </View>
            <View style={styles.mealDescription}>
                <View>
                    <Text style={styles.subHeader}>Ingredients</Text>
                    {meal.ingredients.map(ingredient => <Text style={styles.ingredientsAndSteps} key={ingredient}>
                        {ingredient}</Text>)}
                </View>
                <View>
                    <Text style={styles.subHeader}>Steps</Text>
                    {meal.steps.map(step => <Text style={styles.ingredientsAndSteps} key={Math.random().toString()}>{step}</Text>)}
                </View>
            </View>
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealDetail = navigationData.navigation.getParam('meal');
    return {
        headerTitle: mealDetail.title,
        headerRight: (<TouchableOpacity style={{ padding: 10 }}>
            <Ionicons name="ios-heart-empty" size={25} />
        </TouchableOpacity>),
        headerStyle: {
            backgroundColor: "#ccc"
        },
    };
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: "row"
    },
    mealDetail: {
        padding: 8,
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    bgImage: {
        width: "100%",
        height: 200,
        justifyContent: 'flex-end',
        alignItems: "center"
    },
    headerTitle: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white'
    },
    headerTitleContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        width: "100%"
    },
    mealDescription: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    subHeader: {
        fontSize: 25,
        fontFamily: 'open-sans-bold'
    },
    ingredientsAndSteps: {
        fontSize: 13,
        fontFamily: 'open-sans-regular',
        // borderColor: "#ccc",
        // borderWidth: 1,
        padding: 5,
        margin: 5
    } 
});

export default MealDetailScreen;