import styles from "./footer.module.scss";

const Footer = () => {
      return (
            <div className={styles.container}>
                  <div className={styles.logo}>Rashad</div>
                  <div className={styles.text}>
                        Creative thoughts agency © All rights reserved.
                  </div>
            </div>
      );
};

export default Footer;