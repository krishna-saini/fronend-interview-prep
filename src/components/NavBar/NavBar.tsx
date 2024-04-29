import React from 'react';

import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li>
          <a href='#'>Product</a>
          <ul className={styles.dropDownList}>
            <li>
              <a href='#'>Product1</a>
            </li>
            <li>
              <a href='#'>Product2</a>
            </li>
            <li>
              <a href='#'>Product3</a>
            </li>
            <li>
              <a href='#'>Product4</a>
            </li>
          </ul>
        </li>

        <li>Item2</li>
        <li>Item3</li>
        <li>Item4</li>
        <li>Item5</li>
        <li>Item6</li>
      </ul>
    </nav>
  );
}

export default NavBar;
