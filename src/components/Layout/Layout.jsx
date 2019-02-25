import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Layout = ({ children }) => (
  <>
    <main className={styles.main}>
      {children}
    </main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
