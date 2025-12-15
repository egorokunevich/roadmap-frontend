import type { PropsWithChildren } from 'react';
import styles from './ArticleBlock.module.scss';

const ArticleBlock = ({ children }: PropsWithChildren) => {
  return <div className={styles.articleBlock}>{children}</div>;
};

export default ArticleBlock;
