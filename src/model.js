import { createStore, createEvent, createEffect } from "effector";
import axios from "axios";

// Helpers
const getPokemonImage = (url) => {
    const idx = url.split("/")[url.split("/").length - 2];
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx}.png?raw=true`;
    return { idx, image };
};

const getPokemonsFromPokeAPI = async (page) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=16`;
    const res = await axios.get(url);
    const data = await res.data.results.map(({ name, url }) => ({
        name,
        url,
        ...getPokemonImage(url),
    }));
    return data;
};

const getSinglePokemonFromPokeAPI = async (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const res = await axios.get(url);
    const data = await res.data.forms.map(({ name, url }) => ({
        name,
        url,
        ...getPokemonImage(url),
    }));
    return data;
};

// Events
export const getInputText = createEvent();
export const getPokemon = createEvent();
export const reset = createEvent();
export const incrementPage = createEvent();
export const decrementPage = createEvent();

// Effects
export const getPokemonsFx = createEffect().use((page) => {
    return getPokemonsFromPokeAPI(page).then((res) => res);
});

export const getSinglePokemonFx = createEffect().use((name) => {
    return getSinglePokemonFromPokeAPI(name).then((res) => res);
});

// Store
export const $page = createStore(0)
    .on(incrementPage, (state) => (state += 16))
    .on(decrementPage, (state) => (state <= 0 ? 0 : (state -= 16)));

export const $input = createStore("")
    .on(getInputText, (_, msg) => (msg ? getPokemon(msg) : reset()))
    .on(getPokemon, (_, payload) => {
        getSinglePokemonFx(payload);
    })
    .reset(reset);

export const $pokemons = createStore([]).on(
    getPokemonsFx.doneData,
    (_, result) => result
);

export const $pokemon = createStore([]).on(
    getSinglePokemonFx.doneData,
    (_, result) => result
);

// export const $searchFlag = createStore(false).on(
//     getPokemon,
//     (state, payload) => (state = true)
// );
