const contentWrapper =  document.querySelector('#wrapper');
const viewRanges = document.querySelectorAll('.dashboard__view--range');

function dashboard() {
  contentWrapper.innerHTML = `
    <div class="dashboard">
      <div class="dashboard__user">
        <img src="./assets/images/image-jeremy.png" alt="headshot of Jeremy smiling" width="64" height="64">
        <div>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div class="dashboard__view">
        <button class="dashboard__view--range" value="daily">Daily</button>
        <button class="dashboard__view--range active" value="weekly">Weekly</button>
        <button class="dashboard__view--range" value="monthly">Monthly</button>
      </div>
    </div>
  `
}

console.log(viewRanges);

dashboard();

function updateViewRange() {
  viewRanges.forEach((range) => range.classList.remove("active"));
};

viewRanges.forEach((range) => {
  range.addEventListener('click', () => {
    updateViewRange(range.getAttribute('value'));
    console.log(range.getAttribute('value'));
  })
})

fetch('./data.json')
.then(response => response.json())
.then(data => {
    data.forEach(card => {
      appendItem(card);
    });
  })
  .catch(error => console.log(error));


function appendItem(userData) {
  contentWrapper.innerHTML += `
    <div class="card" style="background-image: url(./assets/images/icon-${userData.title.toLowerCase().replace(" ", "-")}.svg); background-color: var(--${userData.title.toLowerCase().replace(" ", "-")})">
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

  console.log(userData);
}
