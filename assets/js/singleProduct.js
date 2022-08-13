// get id function
function getId(id) {
  return document.getElementById(id);
}

// get class
function getClass(className) {
  return document.getElementsByClassName(className);
}

// get review, description and addToCart button
const review = getId('review');
const description = getId('description');
const addToCart = getId('addToCart');

// get review, description and addToCar contents
const description_content = getClass('description_content');
const reviews = getClass('reviews');
const view_cart_message = getClass("view_cart_message");

/* get review and review and description starts here */

// get description onclick
description.addEventListener('click', () => {
  description_content[0].classList.remove('d-none');
  reviews[0].classList.add('d-none');
});

// get review onclick
review.addEventListener('click', () => {
  description_content[0].classList.add('d-none');
  reviews[0].classList.remove('d-none');
});

/* get review and review and description ends here */

/* set active class to description and review section starts here  */

// set active onclick at description
description.addEventListener('click', () => {
  description.classList.add('activeClass');
  review.classList.remove('activeClass');
});

// set active onclick at reviews
review.addEventListener('click', () => {
  review.classList.add('activeClass');
  description.classList.remove('activeClass');
});

/* set active class to description and review section ends here  */

/* view cart notification active on click og addToCart */
addToCart.addEventListener("click", () => {
  view_cart_message[0].classList.remove('d-none');
});
