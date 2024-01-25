import ReactTooltip from "react-tooltip";

import styles from "../styles";

const healthPoints = 25;

const healthLevel = (points) =>
  points >= 12 ? "bg-green-500" : points >= 6 ? "bg-orange-500" : "bg-red-500";

const marginIndexing = (index) =>
  index !== healthPoints - 1 ? "mr-1" : "mt-0";

const PlayerInfo = ({ player, playerIcon, mt }) => {
  return (
    <div className={`${styles.flexCenter} ${mt ? "mt-4" : "mb-4"}`}>
      <img
        data-for={`Player-${mt ? "1" : "2"}`}
        data-tip
        src={playerIcon}
        alt="player2"
        className="w-14 h-14 object-contain rounded-full"
      />

      <div
        data-for={`Health-${mt ? "1" : "2"}`}
        data-tip={`Health: ${player?.health}`}
        className={styles.playerHealth}
      >
        {[...Array(player.health).keys()].map((item, index) => (
          <div
            key={`player-item-${item}`}
            className={`${styles.playerHealthBar} ${healthLevel(
              player.health
            )} ${marginIndexing(index)}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PlayerInfo;
