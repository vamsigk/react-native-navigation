import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = (props) => {

    goToMealDetailScreenHandler = () => {
        props.navigation.navigate({
            routeName: 'MealDetails'
        });
    };


    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onGoTOMealDetails}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground style={styles.bgImage} source={{ uri: props.meal.imageUrl }}>
                            <View style={styles.headerTitleContainer}>
                                <Text style={styles.headerTitle} numberOfLines={1}>{props.meal.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{props.meal.duration}min</Text>
                        <Text>{props.meal.complexity.toUpperCase()}</Text>
                        <Text>{props.meal.affordability}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: "95%",
        backgroundColor: "#f5f5f5",
        margin: 10,
        borderRadius: 10,
        overflow: "hidden"
    },
    mealRow: {
        flexDirection: "row"
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: "center",
        height: "15%"
    },
    bgImage: {
        width: "100%",
        height: "100%",
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
    }
});


export default MealItem;

