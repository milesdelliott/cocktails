import drinksJSON from './drinks.json'

import { writable } from 'svelte/store';

export const drinks = drinksJSON;

export const sectioning = writable('base');
export const activeTags = writable([]);

export const filteredDrinks = writable({main: drinks})

export const sectionedDrinks = writable({main: drinks})