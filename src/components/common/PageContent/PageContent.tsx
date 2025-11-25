import type { PropsWithChildren } from "react";
import styles from "./PageContent.module.scss";

interface IPageContentProps extends PropsWithChildren {}

const PageContent = ({ children }: IPageContentProps) => {
  return <div className={styles.pageContent}>{children}</div>;
};

export default PageContent;
