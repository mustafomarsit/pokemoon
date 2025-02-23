let pokemonsDiv = document.querySelector(".pokemonsDiv");


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