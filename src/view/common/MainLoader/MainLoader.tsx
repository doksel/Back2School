import React from "react";

import styles from "./styles.module.scss";

type MainLoaderType = {
  loading?: boolean;
};

const MainLoader: React.FC<MainLoaderType> = ({ loading }) => (
  <div
    className={styles.wrapLoader}
    style={loading ? { display: "flex" } : { display: "none" }}
  >
    <div className={styles.loader}></div>
  </div>
);

export default MainLoader;
