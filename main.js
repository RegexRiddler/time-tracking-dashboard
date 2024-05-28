// Need to put this in some sort of initiation function
fetch('./data.json')
.then(response => response.json())
.then(data => {
  data.forEach(card => {
    appendItem(card);
  });
})
.catch(error => console.log(error));

// Appends HTML template to the DOM
const contentWrapper = document.querySelector('#wrapper');

function appendItem(userData) {
  contentWrapper.innerHTML += `
    <div class="card card--${userData.title.toLowerCase().replace(" ", "-")}" style="background-image: url(./assets/images/icon-${userData.title.toLowerCase().replace(" ", "-")}.svg); background-color: var(--${userData.title.toLowerCase().replace(" ", "-")})">
      <div class="card__content">
        <div>
          <h2>${userData.title}</h2>
          <img src="./assets/images/icon-ellipsis.svg" alt="menu ellipsis" width="21" height="5">
        </div>
        <div>
          <h3>${userData.timeframes.weekly.current}hrs</h3>
          <p>Last Week - ${userData.timeframes.weekly.previous}hrs</p>
        </div>
      </div>
    </div>
  `;
}

// INCOMPLETE! But for now removes active class on the range selectors (day, week, month)
function updateViewRange() {
  viewRanges.forEach((range) => range.classList.remove("active"));
};

// Iterates over the 3 different range selectors and adds an event listener to the current element.
// This part does not work unless I comment out the whole appendItem function. Why?
const viewRanges = document.querySelectorAll('.dashboard__view--range');
console.log(viewRanges);

viewRanges.forEach((range) => {
  range.addEventListener('click', () => {
    updateViewRange(range.getAttribute('value'));
    console.log(range.getAttribute('value'));
  })
});

