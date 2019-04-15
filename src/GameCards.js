import {LANGUAGES} from "./Languages";
import {REWIND} from "./GameCardContents";
import {POWER_ACTION} from "./GameCardTypes";

const GAME_CARDS = {

    //English Cards
    [`${LANGUAGES.ENGLISH}`]: {
        [`${REWIND}`]: { type: POWER_ACTION, id: REWIND, title: 'Rewind', description: 'Remove any card(other than a power action) from the discard pile and immediately play it.', note: 'Anyone may look at the discard pile at any time', language: LANGUAGES.ENGLISH }
    },

    //Spanish Cards
    [`${LANGUAGES.SPANISH}`]: {
        [`${REWIND}`]: { type: POWER_ACTION, id: REWIND, title: 'Rewind', description: 'Toma cualquier carta(que no sea power action) del pozo de descarte y juegala inmediatamente.', note: 'El pozo de descarte puede revisarse en cualquier momento', language: LANGUAGES.ENGLISH }
    }

};


export { GAME_CARDS };
