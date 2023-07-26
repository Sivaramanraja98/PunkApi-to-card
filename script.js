// Creating div element for the container
const container = document.createElement('div');
container.className = 'container';
container.id = 'background';
document.body.appendChild(container);

// Creating div element for the row of cards
const cardRow = document.createElement('div');
cardRow.className = 'row g-5 ';
cardRow.id = 'row';
container.appendChild(cardRow);

// Function to fetch data from the Punk API and create cards
async function fetchPunkApiData() {
  try {
    // Fetch data from the Punk API
    const response = await fetch('https://api.punkapi.com/v2/beers');

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Error fetching data. Status: ${response.status}`);
    }

    // Parse the response to JSON format
    const data = await response.json();

    // Get the cardRow container element
    const cardRow = document.getElementById('row');

    // Loop through the data and create cards for each beer
    data.forEach(beer => {
      const cardcol = document.createElement('div');
      cardcol.className = 'col-lg-4 col-sm-12';

      const card = document.createElement('div');
      card.className = 'card ';
      card.id = 'cardsty';
      const img = document.createElement('img');
      img.src = beer.image_url;

      const cardbody = document.createElement('div');
      cardbody.className = 'card-body';
      cardbody.id = 'c-body';

      const cardheader = document.createElement('div');
      const h5 = document.createElement('h5');
      h5.id = 'beername';
      cardheader.className = 'card-title';
      cardheader.id = 'c-title';
      h5.innerHTML = beer.name;

      const text1 = document.createElement('p');
      text1.className = 'text1';
      text1.id = 't1';
      text1.innerHTML = beer.description;

      // Append the elements to create the card structure
      cardRow.appendChild(cardcol);
      cardcol.appendChild(card);
      card.appendChild(img);
      card.appendChild(cardbody);
      cardheader.appendChild(h5);
      cardbody.appendChild(cardheader);
      cardbody.appendChild(text1);
    });

    console.log('Cards created successfully');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the fetchPunkApiData function to populate the cards
fetchPunkApiData();
