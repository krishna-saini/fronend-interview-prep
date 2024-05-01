document.querySelectorAll('.star').forEach((starElement) => {
  starElement.addEventListener('click', function () {
    // first check if already user has selected a rating or not
    let children = this.parentElement?.children;
    // allow user to change the ratings once clicked
    [...children].forEach((child) => {
      if (child.dataset.clicked) {
        child.setAttribute('data-clicked', 'false');
      }
    });
    this.setAttribute('data-clicked', 'true');
  });
});

console.log('krishna ', 'hello', document.getElementsByTagName('span'));
