import styles from './Header.module.scss';
import HeaderLink from './HeaderLink/HeaderLink';

const Header = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <HeaderLink href="/">Home</HeaderLink>
        </li>
        <li>
          <HeaderLink href="/roadmap">Roadmap</HeaderLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
