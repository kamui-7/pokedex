/*

*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const CartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        CartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivonaListagem = document.querySelector('.ativo')
        pokemonAtivonaListagem.classList.remove('ativo')

        const pokemonSelecionadonaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadonaListagem.classList.add('ativo')
    })
})