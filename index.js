const URL = "https://pokeapi.co/api/v2/pokemon";

const namePokemon = document.getElementById('name')
const searchPokemon = document.getElementById('search')
const imagePokemonDiv = document.getElementById('pokedex-image')
const atributesPokemon = document.getElementById('pokemon-character')

const getPokemon = async (name) => {
    try{
        const response = await fetch(`${URL}/${name}`)
        const pokemon = await response.json()
        createPokemon(pokemon)
        console.log(pokemon)
    }catch(error){
        console.log(error)
    }
}
const createPokemon = (pokemon) => {
    const namePokemon = document.createElement("p")
    namePokemon.textContent = `${pokemon.name}`
    namePokemon.id = "name-pokemon"
    atributesPokemon.appendChild(namePokemon)

    const imagePokemon = document.createElement("img")
    imagePokemon.src = pokemon.sprites.front_default
    imagePokemon.id = "image-pokemon"
    imagePokemonDiv.appendChild(imagePokemon)

    const titlePokemon = document.createElement("h3")
    titlePokemon.textContent="Sus habilidades son:"
    titlePokemon.id = "title-pokemon"
    atributesPokemon.appendChild(titlePokemon)

    const abilitiesPokemon = document.createElement("ul")
    abilitiesPokemon.id = "list-abilities"
    pokemon.abilities.forEach((abilities)=>{
        const abilityPokemon = document.createElement("li")
        abilityPokemon.textContent = `${abilities.ability.name}`
        abilitiesPokemon.appendChild(abilityPokemon)
        return atributesPokemon.appendChild(abilitiesPokemon)
    })

}
searchPokemon.addEventListener('click',()=>{
    if(atributesPokemon.childElementCount > 0){
        atributesPokemon.removeChild(document.getElementById('name-pokemon'))
        imagePokemonDiv.removeChild(document.getElementById('image-pokemon'))
        atributesPokemon.removeChild(document.getElementById('title-pokemon'))
        atributesPokemon.removeChild(document.getElementById('list-abilities'))
    }
    getPokemon(namePokemon.value)  
})
// searchPokemon.addEventListener('',()=>{
//     atributesPokemon.removeChild(document.getElementById('name-pokemon'))
//     atributesPokemon.removeChild(document.getElementById('image-pokemon'))
//     atributesPokemon.removeChild(document.getElementById('list-abilities'))
// })