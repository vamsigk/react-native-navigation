import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text style={styles.filterContent}>{props.label}</Text>
            <Switch
                value={props.isOn}
                onValueChange={props.changedIsOn}
            />
        </View>
    );
};



const FiltersScreen = (props) => {
    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);


    const saveFilters = useCallback(() => {
        return({
            'glutenFree' : isGlutenFree,
            'lactoseFree' : isLactoseFree,
            'vegan' : isVegan,
            'vegetarian' : isVegetarian
        })  
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);


    useEffect(() => {
        navigation.setParams({
            filters: saveFilters
        });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch label="Gluten Free"
                isOn={isGlutenFree}
                changedIsOn={newValue => setIsGlutenFree(newValue)} />
            <FilterSwitch label="Lactose Free"
                isOn={isLactoseFree}
                changedIsOn={newValue => setIsLactoseFree(newValue)} />
            <FilterSwitch label="Vegan"
                isOn={isVegan}
                changedIsOn={newValue => setIsVegan(newValue)} />
            <FilterSwitch label="Vegetarian"
                isOn={isVegetarian}
                changedIsOn={newValue => setIsVegetarian(newValue)} />

        </View>
    )
};

FiltersScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Filters',
        headerLeft: (
            <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => { navigationData.navigation.toggleDrawer() }}>
                <Ionicons name="ios-menu" size={25} />
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity style={{ padding: 10 }} onPress={() => {
                console.log("Printing the values : " +navigationData.navigation.getParam('filters').glutenFree)}
                }>
                <Ionicons name="ios-save" size={25} />
            </TouchableOpacity>)
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center"
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: "center"
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        marginVertical: 10
    },
    filterContent: {
        fontFamily: 'open-sans-regular',
        fontSize: 15
    }
});

export default FiltersScreen;