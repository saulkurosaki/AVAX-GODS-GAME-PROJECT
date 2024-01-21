import React from "react";

import { PageHOC } from "../components";

const CreateBattle = () => {
  return <div></div>;
};

export default PageHOC(
  CreateBattle,
  <>
    Welcome to Avax Gods <br /> a Web3 NFT Card Game
  </>,
  <>
    Connect your wallet to start playing <br /> the ultimate Web3 Battle Card
    Game
  </>
);
