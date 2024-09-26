// components/Layout.js
import Head from 'next/head';
import styles from '../styles/globals.css';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Next.js Blog</title>
      </Head>
      <div className={styles.container}>
        <header>
          <h1>Welcome to My Blog</h1>
          <nav>
            <a href="/">Home</a> | <a href="/blog">Blog</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2024 My Next.js Blog</footer>
      </div>
    </>
  );
};

export default Layout;
