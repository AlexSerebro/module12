import './sass/main.scss';
import pokemonCardTpl from './partials/pokemon-card.hbs';
import API from './js/api-service';
import getrefs from './js/get-refs';

const refs = getrefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  // console.log('t');
  const form = event.currentTarget;
  const searchQuary = form.elements.query.value;
  // console.log('~ searchQuary', searchQuary);

  API.fetchPokemonById(searchQuary)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(form.reset());
}

function renderPokemonCard(pokemon) {
  const marcup = pokemonCardTpl(pokemon);
  // console.log('~ marcup', marcup);
  refs.cardcontainer.innerHTML = marcup;
}

function onFetchError() {
  alert('ne rabotaet');
}
