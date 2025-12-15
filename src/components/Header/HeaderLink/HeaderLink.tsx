import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import styles from './HeaderLink.module.scss';

interface IHeaderLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    PropsWithChildren {}

const HeaderLink = ({ children, ...linkProps }: IHeaderLinkProps) => {
  return (
    <a {...linkProps} className={styles.headerLink}>
      {children}
    </a>
  );
};

export default HeaderLink;
