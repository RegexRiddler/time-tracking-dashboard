const ranges = document.querySelectorAll('.range');

ranges.forEach((range) => {
  range.addEventListener('click', () => {
    console.log(range.getAttribute('name'));
  })
})
