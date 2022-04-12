//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// click listener
// capture input
//fetch
// TODO __________________________________________________________________________________
//TODO allow 'Enter' keydown to make the search, or make the submit tags a form
// TODO __________________________________________________________________________________

const searchBtn = document.querySelector("button");

searchBtn.addEventListener("click", () => {
	const input = document.querySelector("input").value;
	let fullDrinkName = input.split(" ");

	let searchQuery = fullDrinkName.join("+");
	console.log(searchQuery);
	let cardsContainer = document.querySelector(".cards");
	function createCard(drink) {
		// find list to intert cards

		cardsContainer.insertAdjacentHTML(
			"afterbegin",
			`
      <div class="card mb-2" style="width: 18rem;">
        <img class="card-img-top" src=${drink.strDrinkThumb} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${drink.strDrink}</h5>
          <p class="card-text">
            Drink type: ${drink.strCategory}
          </p>
          <a href="#" class="btn btn-primary">Ingredients & instructions</a>
        </div>
      </div>
      `
		);
	}

	// dpcument.addEventListener

	//  Blue Margarita
	fetch(
		`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`
	)
		.then((response) => response.json())
		.then((data) => {
			console.log(data.drinks);
			cardsContainer.innerHTML = "";
			data.drinks.forEach((element) => {
				console.log(element.drinks);
				createCard(element);
			});
		})
		.catch((err) => console.log(err));
});

// _${fullDrinkName[2]
// margarita
