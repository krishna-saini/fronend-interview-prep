import React from 'react';

import styles from './NavBar.module.css';
function NavBar() {
  return (
    <nav>
      <ul className={styles.ul}>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About Us</a>
        </li>
        <li>
          <a href='#'>Skills &#x25BE;</a>
          <ul className={styles.dropdown}>
            <li>
              <a href='#'>HTML</a>
            </li>
            <li>
              <a href='#'>CSS</a>
            </li>
            <li>
              <a href='#'>JavaScript &#x25B8;</a>
              <ul className={styles.dropdown2}>
                <li>
                  <a href='#'>Theory</a>
                </li>
                <li>
                  <a href='#'>Machine Coding</a>
                </li>
                <li>
                  <a href='#'>DSA</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href='#'>React &#x25BE;</a>
          <ul className={styles.dropdown}>
            <li>
              <a href='#'>Theory</a>
            </li>
            <li>
              <a href='#'>Machine coding</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
