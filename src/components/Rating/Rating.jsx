import React from 'react';
import styles from './Rating.module.css';

function Rating() {
  
  /**
   * we have to somehow identify which star is clicked
   * use event delegation to listen all click events at parent level
   * and then identify the child which is clicked
   * make that child focussed
   * CSS will  take care of focussing other preceding stars
   */
  // document.querySelector('#container2')?.addEventListener('click', (e) => {
  //   console.log('krishna', e.target?.getAttribute('data-rating'));
  // });
  return (
    <>
      <form className={styles.container}>
        <legend>Star Rating 1 </legend>
        <input type='radio' id='star1' name='rating' value='1' />
        <label htmlFor='star1' title='1 star'>
          &#9733;
        </label>
        <input type='radio' id='star1' name='rating' value='1' />
        <label htmlFor='star1' title='1 star'>
          &#9733;
        </label>
        <input type='radio' id='star1' name='rating' value='1' />
        <label htmlFor='star1' title='1 star'>
          &#9733;
        </label>
        <input type='radio' id='star1' name='rating' value='1' />
        <label htmlFor='star1' title='1 star'>
          &#9733;
        </label>
        <input type='radio' id='star1' name='rating' value='1' />
        <label htmlFor='star1' title='1 star'>
          &#9733;
        </label>
      </form>

      
    </>
  );
}

export default Rating;
