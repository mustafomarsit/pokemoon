let pokemonsDiv = document.querySelector(".pokemonsDiv");
let searchBtn = document.querySelector("button");
let searchInp = document.querySelector("input");
let typeSlc = document.querySelector(".typeSelect");
let sortSlc = document.querySelector(".sortSelect");



function renderPokemons(pokemons) {
  pokemons.forEach((pokemon) => {
    let card = document.createElement("div");
    let id = document.createElement("p");
    let name = document.createElement("h3");
    let img = document.createElement("img");
    let type = document.createElement("h2");
    let candy = document.createElement("p");
    let weight = document.createElement("p");
    let weakness = document.createElement("p");

    id.textContent = pokemon.num;
    name.textContent = pokemon.name;
    img.src = pokemon.img;
    type.textContent = pokemon.type;
    candy.textContent = "candy count: " + pokemon.candy_count;
    weight.textContent = pokemon.weight;
    weakness.textContent = pokemon.weaknesses;

    card.appendChild(id);
    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(type);
    card.appendChild(candy);
    card.appendChild(weight);
    card.appendChild(weakness);

    pokemonsDiv.appendChild(card);
  });
}

renderPokemons(pokemons);

searchBtn.addEventListener("click", search);

function search() {
  let filteredPokemons = pokemons.filter((pokemon) => {
    if (
      pokemon.name.toLowerCase().includes(searchInp.value.toLowerCase()) && pokemon.type.includes(typeSlc.value)
    ) {
      return true;
    } else {
      return false;
    }
  });

  pokemonsDiv.innerHTML = "";
  let k;

  if (sortSlc.value === "ascending") {
    k = 1;
  } else {
    k = -1;
  }

  let sortedPokemons = filteredPokemons.sort((pok1, pok2) => {
    if (pok1.name < pok2.name) {
      return -1 * k;
    } else {
      return 1 * k;
    }
  });

  renderPokemons(sortedPokemons);
}