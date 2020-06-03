import React, { ReactElement, ReactNode } from "react";
import Head from "next/head";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <Head>
        <title>Inceptionize</title>
        <meta
          name="description"
          content="An application that helps teams and individuals organize inceptions in the easiest way possible."
        />

        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className={styles.container}>
        <h1>Inceptionize</h1>
        {children}
      </div>
    </>
  );
}

export default Layout;
