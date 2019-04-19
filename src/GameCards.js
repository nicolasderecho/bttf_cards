import BlankGameCard from "./GameCardTypes/BlankGameCard";
import PowerAction from "./GameCardTypes/PowerAction";

export const GAME_CARDS = [PowerAction, BlankGameCard];
export const gameCardFor = (card) => GAME_CARDS.find( (gameCard) => gameCard.canHandle(card));
