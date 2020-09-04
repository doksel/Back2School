import React from "react";

import styles from "./styles.module.scss";

const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
export default Loader;
