"use client";
// Gallery.tsx
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography } from "@mui/material";


type Person = {
  name: string;
  title: string;
  imageUrl: string;
};

type GalleryProps = {
  people: Person[];
};

const Gallery: React.FC<GalleryProps> = ({ people }) => {
  return (
    <Carousel
      navButtonsAlwaysVisible={true}
      fullHeightHover={false}
      autoPlay={false} // Disable autoPlay if you don't want the images to cycle automatically
      indicators={false} // Disable indicators if you don't want to show them
      navButtonsProps={{
        style: {
          backgroundColor: "rgba(255, 255, 255, 0.5)", // White with opacity
          color: "white", // White color for arrows
        },
      }}
    >
      {people.map((person, index) => (
        <Paper
          key={index}
          elevation={10}
          style={{
            padding: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 300,
            margin: "auto",
          }}
        >
          <img
            src={person.imageUrl}
            alt={person.name}
            style={{
              width: 200, // Adjust the size as needed
              height: 200,
              objectFit: "cover",
            }}
          />
          <Typography variant="h6" component="div">
            {person.name}
          </Typography>
          <Typography variant="body2" component="div">
            {person.title}
          </Typography>
        </Paper>
      ))}
    </Carousel>
  );
};
export default Gallery;
