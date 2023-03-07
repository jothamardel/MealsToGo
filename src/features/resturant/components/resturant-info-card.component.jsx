import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  ResturantCard,
  ResturantCardCover,
  ResturantContentContainer,
  Address,
  Info,
  Rating,
  Section,
  SectionEnd,
  Icon,
} from "./resturant-info-card.styles";
import { Favourite } from "../../../components/favourites/favourite.component";

export const ResturantInfoCard = ({ resturant = {} }) => {
  const {
    name = "Some restruant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = resturant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <ResturantCard elevation={5}>
      <Favourite />
      <ResturantCardCover key={name} source={{ uri: photos[0] }} />
      <ResturantContentContainer>
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map((_, i) => (
                <SvgXml
                  width="20"
                  height="20"
                  xml={star}
                  key={`star-${placeId}-${i}`}
                />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
            </SectionEnd>
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml width="20" height="20" xml={open} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </Section>
          <Address>{address}</Address>
        </Info>
      </ResturantContentContainer>
    </ResturantCard>
  );
};
