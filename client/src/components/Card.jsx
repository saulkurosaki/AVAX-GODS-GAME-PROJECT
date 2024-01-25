import React from "react";
import Tilt from "react-parallax-tilt";

import styles from "../styles";
import { allCards } from "../assets";

const generateRandomCardImage = () =>
  allCards[Math.floor(Math.random() * allCards.length - 1)];

const img1 = generateRandomCardImage();
const img2 = generateRandomCardImage();

const Card = () => {
  return <div>Card Component Test c:</div>;
};

export default Card;
