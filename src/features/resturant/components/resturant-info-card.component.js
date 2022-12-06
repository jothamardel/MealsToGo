import React from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const ResturantCard = styled(Card)`
  background-color: white;
`;

const ResturantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const ResturantContentContainer = styled(Card.Content)``;

const Title = styled(Text)`
  padding: 16px;
  color: red;
`;

const Paragraph = styled(Text)``;

export const ResturantInfoCard = ({ resturant = {} }) => {
  const {
    name = "Some restruant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = resturant;
  return (
    <ResturantCard elevation={5}>
      <ResturantCardCover key={name} source={{ uri: photos[0] }} />
      <ResturantContentContainer>
        <Title>{name}</Title>
        <Paragraph>{address}</Paragraph>
      </ResturantContentContainer>
    </ResturantCard>
  );
};
