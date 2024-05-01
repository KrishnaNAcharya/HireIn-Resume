import React from "react";
import resumeSvg from "../../assets/resume.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          <span>HireIn: </span> Resume Builder
        </p>
      
      </div>
    
    </div>
  );
}
export default Header;
