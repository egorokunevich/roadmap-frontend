import styles from "./Header.module.scss";

interface IHeaderProps {}

const Header = ({}: IHeaderProps) => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/roadmap">Roadmap</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
