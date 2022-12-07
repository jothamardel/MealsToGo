import React from "react";
import styled from "styled-components/native";
import { StatusBar, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { ResturantInfoCard } from "../components/resturant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestruantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const ResturantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestruantListContainer>
        <ResturantInfoCard />
      </RestruantListContainer>
    </SafeArea>
  );
};
