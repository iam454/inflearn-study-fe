const pokemons = [
  {
    id: 1,
    name: "Bulbasaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    type: "grass",
    description:
      "For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.",
  },
  {
    id: 2,
    name: "Charmander",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    type: "fire",
    description:
      "The flame on its tail shows the strength of its life-force. If Charmander is weak, the flame also burns weakly.",
  },
  {
    id: 3,
    name: "Squirtle",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    type: "water",
    description:
      "After birth, its back swells and hardens into a shell. It sprays a potent foam from its mouth.",
  },
  {
    id: 4,
    name: "Pikachu",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
    type: "electr",
    description:
      "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
  },
  {
    id: 5,
    name: "Psyduck",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png",
    type: "water",
    description:
      "It is constantly wracked by a headache. When the headache turns intense, it begins using mysterious powers.",
  },
  {
    id: 6,
    name: "Ponyta",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/077.png",
    type: "fire",
    description:
      "About an hour after birth, Ponyta’s fiery mane and tail grow out, giving the Pokémon an impressive appearance.",
  },
  {
    id: 7,
    name: "Voltorb",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/100.png",
    type: "electr",
    description:
      "It rolls to move. If the ground is uneven, a sudden jolt from hitting a bump can cause it to explode.",
  },
  {
    id: 8,
    name: "Magikarp",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/129.png",
    type: "water",
    description:
      "An underpowered, pathetic Pokémon. It may jump high on rare occasions but never more than seven feet.",
  },
  {
    id: 9,
    name: "Chikorita",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png",
    type: "grass",
    description:
      "It loves to bask in the sunlight. It uses the leaf on its head to seek out warm places.",
  },
  {
    id: 10,
    name: "Cyndaquil",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/155.png",
    type: "fire",
    description:
      "It usually stays hunched over. If it is angry or surprised, it shoots flames out of its back.",
  },
];

const pokemonContainer = document.querySelector(".pokemon-container");
const buttonContainer = document.querySelector(".button-container");

function displayPokemons(items) {
  pokemonContainer.innerHTML = items
    .map(
      (item) => `
        <div class="nes-container pokemon-item">
          <img src="${item.img}" alt="${item.name}" />
          <div>
            <p class="pokemon-name">${item.name}</p>
            <p>${item.description}</p>
          </div>
        </div>
      `
    )
    .join("");
}

displayPokemons(pokemons);

buttonContainer.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") {
    return;
  }
  const type = e.target.dataset.type;
  const filteredPokemons =
    type === "all" ? pokemons : pokemons.filter((item) => item.type === type);
  displayPokemons(filteredPokemons);
});
