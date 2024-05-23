const contentWrapper =  document.querySelector('#wrapper');

function appendItem(cardData) {
  contentWrapper.innerHTML += `
    <div class="card" style="background-image: url(./assets/images/icon-${cardData.title.toLowerCase()}.svg); background-color: var(--${cardData.title.toLowerCase()})">
      <div class="card__content">
        <div>
          <h2>${cardData.title}</h2>
          <img src="./assets/images/icon-ellipsis.svg" alt="menu ellipsis" width="21" height="5">
        </div>
        <div>
          <h3>${cardData.timeframes.weekly.current}hrs</h3>
          <p>Last Week - ${cardData.timeframes.weekly.previous}hrs</p>
        </div>
      </div>
    </div>
  `;

  console.log(cardData);
}

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(card => {
      appendItem(card);
    });
  })
  .catch(error => console.log(error));
