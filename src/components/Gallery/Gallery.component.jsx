// Import: Packages
import React from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";

// Import: Elements
import {
  Background,
  CarouselImage,
  CarouselItem,
  Container,
} from "./Gallery.elements";

const { width, height } = Dimensions.get("screen");
const imageW = width * 0.7;
const imageH = imageW * 1.54;

// Component: Gallery
export default function Gallery({ data }) {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <Container>
      <Background>
        {data.map((image, index) => {
          // Accepts the values of: next, current and previous
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          // When value is next, current or previous
          // ... the outputRange === inputRange
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });

          return (
            <Animated.Image
              blurRadius={35}
              key={`image-${index}`}
              source={image}
              style={[
                StyleSheet.absoluteFillObject,
                {
                  opacity,
                },
              ]}
            />
          );
        })}
      </Background>

      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <CarouselItem
              style={{
                shadowColor: "#000",
                shadowOpacity: 1,
                shadowOffest: {
                  height: 0,
                  width: 0,
                },
                shadowRadius: 20,
                width,
              }}
            >
              <CarouselImage
                source={item}
                style={{ height: imageH, resizeMode: "cover", width: imageW }}
              />
            </CarouselItem>
          );
        }}
      />
    </Container>
  );
}
