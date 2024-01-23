import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles";
import { useGlobalContext } from "../context";
import { PageHOC, CustomButton, CustomInput } from "../components";

const CreateBattle = () => {
  const { contract, battleName, setBattleName } = useGlobalContext();
  const navigate = useNavigate();

  const handleClick = () => {};

  return (
    <>
      <div className="flex flex-col mb-5">
        <CustomInput
          label="Battle"
          placeholder="Enter battle name"
          value={battleName}
          handleValueChange={setBattleName}
        />

        <CustomButton
          title="Create Battle"
          handleClick={handleClick}
          restStyles="mt-5"
        />
      </div>

      <p className={styles.infoText} onClick={() => navigate("/join-battle")}>
        Or join already existing battles
      </p>
    </>
  );
};

export default PageHOC(
  CreateBattle,
  <>
    Create <br /> a new Battle
  </>,
  <>Create your own battle and wait for other player to join you</>
);
