## Requirements

1. Create a star rating system has 5 stars.
2. while hovering over stars, all proceeding starts focussed too.
4. clicking on a star should select all starts till that star.
5. do we want user to change the rating once clicked ?
6. make it accessible via keyboard

## divide the task

1. create basic rating . what type of tag you will use?
   1.1 will you use span, div or fieldset
   Ans - we will use fieldset because The <fieldset> HTML element is used to group several controls as well as labels (<label>) within a web form.
   Placing them within a <fieldset> communicates to assistive technologies and other user agents that these stars are part of the same rating system and should be treated as such.

 <legend> element helps screen reader users understand the purpose and context of the grouped controls.

2.  hovering over them selects them
    2.1 can be done via css only using ~ selector but we want them to be selected in reverse order. hence use flex-direction css property

3.  clicking on a star selects the star till that point
    since its a user interaction, we have to use javascript

## TLDR

1. use fieldset for grouping of some html tags in a form
2. ~ selects all siblings, + selects next sibling
3. The data-\* attribute in HTML is a custom attribute that allows developers to store custom data directly within HTML elements. It serves as a prefix for custom attributes, indicating that the attribute is intended to store data rather than define a standard HTML attribute
4. use `mouseEnter` event for mouse movement
5. How to access values from data-\*
   <span class="star" data-value="1">&#9733;</span>
   document.querySelector('span').dataset.value
   or
   document.querySelector('span').getAttribute('data-value)
