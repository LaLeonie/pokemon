import React from "react";
import { Image } from "react-bootstrap";

const ImageDisplay = ({ image }) => {
  return <Image src={image} roundedCircle />;
};

export default ImageDisplay;
