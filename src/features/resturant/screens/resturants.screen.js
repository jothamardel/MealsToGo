import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, Pressable, TouchableOpacity } from "react-native";
import { Colors } from "react-native-paper";
import { ResturantInfoCard } from "../components/resturant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator } from "react-native-paper";
import { Search } from "../components/search.component";

const ResturantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const ResturantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantContext);

  return (
    <SafeArea>
      <Search />
      {!isLoading && (
        <ResturantList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { resturant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <ResturantInfoCard resturant={item} />
              </Spacer>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
      {isLoading && (
        <LoadingContainer>
          <Loading animating={isLoading} color={Colors.red400} />
        </LoadingContainer>
      )}
    </SafeArea>
  );
};
