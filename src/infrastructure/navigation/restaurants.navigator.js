import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { ResturantsScreen } from "../../features/resturant/screens/resturants.screen";
import { ResturantDetailsScreen } from "../../features/resturant/screens/resturants-details.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen name="Restaurant" component={ResturantsScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={ResturantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
