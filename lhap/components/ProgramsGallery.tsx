import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function ProgramGallery() {
  return (
    <ImageList sx={{ width: 900, height: 450 }}>

      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "/assets/blue.jpeg",
    title: "Program Participant",
    author: "Beautiful Butterfly",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "/assets/blue.jpeg",
    title: "Program Participant",
    author: "Curious Cat",
  },
  {
    img: "/assets/blue.jpeg",
    title: "Program Participant",
    author: "Silly Snake",
  },
  {
    img: "/assets/blue.jpeg",
    title: "Program Participant",
    author: "Daring Dog",
    cols: 2,
  },
  {
    img: "/assets/blue.jpeg",
    title: "Program Participant",
    author: "Beautiful Butterfly",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "/assets/blue.jpeg",
    title: "Program Participant",
    author: "Curious Cat",
  },
  {
    img: "/assets/blue.jpeg",
    title: "Program Participant",
    author: "Silly Snake",
  },
  {
    img: "/assets/blue.jpeg",
    title: "Program Participant",
    author: "Daring Dog",
    cols: 2,
  },
];
