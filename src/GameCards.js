import BlankGameCard from "./GameCardTypes/BlankGameCard";
import PowerAction from "./GameCardTypes/PowerAction";
import Action from "./GameCardTypes/Action";
import DoubleBack from "./GameCardTypes/DoubleBack";
import TimeMachine from "./GameCardTypes/TimeMachine";
import Item from "./GameCardTypes/Item";

export const GAME_CARDS = [PowerAction, Action, DoubleBack, TimeMachine , Item ,BlankGameCard];
export const gameCardFor = (card) => GAME_CARDS.find( (gameCard) => gameCard.canHandle(card));
