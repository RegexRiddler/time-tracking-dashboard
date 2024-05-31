function fetchData() {
  fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(card => {
        updateDashboard(card, 'weekly');
      });

      initiateTimeFrameButtons(data);

    })
    .catch(error => console.log('Error loading the data:', error));
}

// Appends HTML template to the DOM
function updateDashboard(cardData, period) {
  const contentWrapper = document.querySelector('#wrapper');
  const cardElement = document.createElement("div");
  
  cardElement.classList.add("card", `card--${cardData.title.toLowerCase().replace(" ", "-")}`);
  cardElement.style.backgroundImage = `url(./assets/images/icon-${cardData.title.toLowerCase().replace(" ", "-")}.svg)`;
  cardElement.style.backgroundColor = `var(--${cardData.title.toLowerCase().replace(" ", "-")})`;
  
  cardElement.innerHTML += `
  <div class="card__content">
  <div>
  <h2>${cardData.title}</h2>
  <img src="./assets/images/icon-ellipsis.svg" alt="menu ellipsis" width="21" height="5">
  </div>
  <div>
  <h3>${cardData.timeframes[period].current}hrs</h3>
  <p>Last Week - ${cardData.timeframes[period].previous}hrs</p>
  </div>
  </div>
  `;
  
  contentWrapper.append(cardElement);
}

function initiateTimeFrameButtons(data) {
  const timeFrames = document.querySelectorAll('.dashboard__view--range');

  timeFrames.forEach((timeFrame) => {
    timeFrame.addEventListener('click', () => {
      timeFrames.forEach((timeFrame) => timeFrame.classList.remove("active"));
      document.querySelectorAll('.card').forEach(card => card.remove());
      data.forEach(card => {
        updateDashboard(card, timeFrame.getAttribute('value'));
      })
      timeFrame.classList.add("active");
    })
  });
}

fetchData();