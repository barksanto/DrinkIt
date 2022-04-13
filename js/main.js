//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// click listener
// capture input
//fetch
// TODO __________________________________________________________________________________
//TODO Error Message for invalid drink type entered in input
// TODO __________________________________________________________________________________

window.addEventListener("DOMContentLoaded", () => {
	let drinksInMemory = JSON.parse(localStorage.getItem("drinks"));
	if (drinksInMemory.length > 0) {
		drinksInMemory.forEach((drink) => {
			createCard(drink);
		});
	}
});

const searchBtn = document.querySelector("button");
let cardsContainer = document.querySelector(".cards");

searchBtn.addEventListener("click", () => {
	const input = document.querySelector("input").value;
	let fullDrinkName = input.split(" ");

	let searchQuery = fullDrinkName.join("+");

	let cards = "";
	// let memoryCards = JSON.parse(localStorage.getItem("drinks"));
	//  Blue Margarita
	fetch(
		`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`
	)
		.then((response) => response.json())
		.then((data) => {
			console.log(data.drinks);
			localStorage.setItem("drinks", JSON.stringify(data.drinks));

			cardsContainer.innerHTML = "";
			data.drinks.forEach((element) => {
				console.log(element);
				createCard(element);
			});
			cards = document.querySelectorAll(".card");
			cards.forEach((card) => {
				card.addEventListener("click", (e) => showModal(e));
			});
		})
		.catch((err) => console.log(err));
});

function createCard(drink) {
	// find list to intert cards

	cardsContainer.insertAdjacentHTML(
		"afterbegin",
		`
      <div class="card my-2" style="width: 18rem;">
        <img class="card-img-top" src=${
					drink.strDrinkThumb
				} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${drink.strDrink}</h5>
          <p class="card-text">
            Drink type: ${
							drink.strCategory != "Other/Unknown" ? drink.strCategory : "Fun!"
						}
          </p>
          <a href="#" class="btn btn-primary">Ingredients & instructions</a>
        </div>
      </div>
      `
	);
}

// This function will buld the modal that appears on click
function showModal(e) {
	console.log(e.currentTarget);
	console.log("clicked");
}
