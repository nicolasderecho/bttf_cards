import {LANGUAGES} from "./Languages";
import {REWIND, ENGINE_TROUBLE, LOOK_OUT_FOR_THAT_MANURE, LUCKY_DAY, MEMO_FROM_YOUR_FUTURE_YOURSELF, QUICK_TRIP_INTO_THE_FUTURE, SCIENCE_EXPERIMENT, YOU_STEAL_MY_STUFF, GULLIBLE_MCFLY, SLEEP_INDUCING_GENERATOR, TRADE_HANDS, SAVE_CLOCK_TOWER, TIME_VORTEX, HITCH_RIDE, DISCONTINUITY, NOT_YOURSELF_TODAY, SHOPPING_SPREE, ERASED_FROM_EXISTENCE, FADING_AWAY, TIME_MACHINE_V1, TIME_MACHINE_V2, TIME_MACHINE_V3, TIME_MACHINE_V4, TIME_MACHINE_V5, TIME_MACHINE_V6, DOUBLE_BACK_A3, OVERLOCOMOTIVE, TOMORROW_NEWSPAPER, FAX_FUTURE, LIGHTNING_PREDICTION, PELLET_PLUTONIUM, SPORTS_ALMANAC, DUST_JACKET_SPORTS_ALMANAC, MR_FUSION, EMERGENCY_CASH, CASE_OF_PLUTONIUM, TELEGRAM, PIZZA_HYDRATOR} from "./GameCardContents";
import {POWER_ACTION, ACTION, ITEM, TIME_MACHINE, DOUBLE_BACK} from "./GameCardTypes/GameCardTypes";
import {values} from 'lodash';

export const GAME_CARDS = {

    //English Cards
    [`${LANGUAGES.ENGLISH}`]: {
        //POWER-ACTION CARDS
        [`${REWIND}`]: { type: POWER_ACTION, id: REWIND, title: 'Rewind', description: 'Remove any card(other than a power action) from the discard pile and immediately play it.', note: 'Anyone may look at the discard pile at any time', language: LANGUAGES.ENGLISH },
        [`${ENGINE_TROUBLE}`]: { type: POWER_ACTION, id: ENGINE_TROUBLE, title: 'Engine Trouble', description: 'Play this card out of turn when someone plays a time machine. That entire play is canceled, their turn ends and the time machine goes back to the player\'s hand.', language: LANGUAGES.ENGLISH },
        [`${LOOK_OUT_FOR_THAT_MANURE}`]: { type: POWER_ACTION, id: LOOK_OUT_FOR_THAT_MANURE, title: 'Look out for that truck full of manure!', description: 'Play this card out of turn when right when another player is about to draw at the start of their turn. That player\'s turn is canceled.', language: LANGUAGES.ENGLISH },
        [`${MEMO_FROM_YOUR_FUTURE_YOURSELF}`]: { type: POWER_ACTION, id: MEMO_FROM_YOUR_FUTURE_YOURSELF, title: 'Memo from your future self', description: 'Play at any time to cancel another card as it is being played. Discard the target card and proceed with the next game action.', language: LANGUAGES.ENGLISH },
        [`${LUCKY_DAY}`]: { type: POWER_ACTION, id: LUCKY_DAY, title: 'It\'s your lucky day', description: 'Draw 3 cards, add them to your hand, and then play another card.', language: LANGUAGES.ENGLISH },
        [`${QUICK_TRIP_INTO_THE_FUTURE}`]: { type: POWER_ACTION, id: QUICK_TRIP_INTO_THE_FUTURE, title: 'Quick trip into the future', description: 'Look through the draw pile and choose a card(other than a power action) and immediately play it.', note: 'Re-shuffle the deck after choosing, but don\'t mix in the discard pile', language: LANGUAGES.ENGLISH },
        [`${SCIENCE_EXPERIMENT}`]: { type: POWER_ACTION, id: SCIENCE_EXPERIMENT, connector: 'or', title: 'It\'s a science experiment', description: 'If someone has the overpowered locomotive on the table, steal it and immediately play another card.', note: 'Play out of turn when someone plays the time train. That player\'s extra play is canceled, and you add the time train to your hand.', language: LANGUAGES.ENGLISH },
        [`${YOU_STEAL_MY_STUFF}`]: { type: POWER_ACTION, id: YOU_STEAL_MY_STUFF, title: 'You steal my stuff?', description: 'Play this card out of turn right after another player uses a \'So gullible\' action card to steal an item from you. Instead, you keep your item, while they must discard 2 cards of their choice from their hand.', language: LANGUAGES.ENGLISH },

        [`${GULLIBLE_MCFLY}`]: { type: ACTION, id: GULLIBLE_MCFLY, title: 'Don\'t be so gullible Mcfly!', description: 'Steal any item another player has in play, and put it in fron of you.', language: LANGUAGES.ENGLISH },
        [`${SLEEP_INDUCING_GENERATOR}`]: { type: ACTION, id: SLEEP_INDUCING_GENERATOR, title: 'It\'s a sleep-inducing alpha rhythm generator!', description: 'All players other than you must immediately discard all but 3 cards they hold in their hands', language: LANGUAGES.ENGLISH },
        [`${TRADE_HANDS}`]: { type: ACTION, id: TRADE_HANDS, title: 'Trade hands', description: 'Trade your entire hand of cards (not including your ID card) for the hand of another player.', language: LANGUAGES.ENGLISH },
        [`${SAVE_CLOCK_TOWER}`]: { type: ACTION, id: SAVE_CLOCK_TOWER, title: 'Save the clock tower!', description: 'All players must choose a card from their hands and give it to you.', language: LANGUAGES.ENGLISH },
        [`${TIME_VORTEX}`]: { type: ACTION, id: TIME_VORTEX, title: 'Time vortex' , description: 'Gather up the cards from all players\' hands(but not their ID cards), shuffle them up, and deal them evenly, starting with yourself.', language: LANGUAGES.ENGLISH },
        [`${HITCH_RIDE}`]: { type: ACTION, id: HITCH_RIDE, title: 'Hitch a ride', description: 'If the previous player changed the Timeline during their turn, play this card to flip any linchpin', language: LANGUAGES.ENGLISH },
        [`${DISCONTINUITY}`]: { type: ACTION, id: DISCONTINUITY, title: 'Discontinuity', description: 'All players pass their hands to the players next to them. You decide if cards go to the left or to the right.', note: 'Don\'t pass your ID card',language: LANGUAGES.ENGLISH },
        [`${NOT_YOURSELF_TODAY}`]: { type: ACTION, id: NOT_YOURSELF_TODAY, title: 'Not yourself today', description: 'Discard your ID card and draw a new one, or force another player to do so.', language: LANGUAGES.ENGLISH },
        [`${SHOPPING_SPREE}`]: { type: ACTION, id: SHOPPING_SPREE, title: 'shopping spree at blast from the past', description: 'Immediately play 3 item cards from your hand.', note: 'If you have fewer than 3 items in your hand, play as many as you can.', language: LANGUAGES.ENGLISH },
        [`${ERASED_FROM_EXISTENCE}`]: { type: ACTION, id: ERASED_FROM_EXISTENCE, title: 'Erased from existence', description: 'Discard any item which someone has on the table in front of them.', language: LANGUAGES.ENGLISH },
        [`${FADING_AWAY}`]: { type: ACTION, id: FADING_AWAY, title: 'You are fading away', description: 'The opponent of your choice must discard an item they have on the table and a card from their hand.', note: 'They choose which item; card from hand is random' ,language: LANGUAGES.ENGLISH },
        [`${TIME_MACHINE_V1}`]: { type: TIME_MACHINE, id: TIME_MACHINE_V1, title: 'Time car V1', requires: 'plutonium', description: 'This card does nothing unless you also have some form of plutonium on the table', language: LANGUAGES.ENGLISH },
        [`${TIME_MACHINE_V2}`]: { type: TIME_MACHINE, id: TIME_MACHINE_V2, title: 'Time car V2', requires: 'lightning', description: 'This card does nothing unless you also have a lightning prediction on the table', language: LANGUAGES.ENGLISH },
        [`${TIME_MACHINE_V3}`]: { type: TIME_MACHINE, id: TIME_MACHINE_V3, title: 'Time car V3', subtitle: 'fully-equipped', description: 'draw an extra card after you play this card.', language: LANGUAGES.ENGLISH },
        [`${TIME_MACHINE_V4}`]: { type: TIME_MACHINE, id: TIME_MACHINE_V4, title: 'Time car V4', subtitle: 'old and cranky', description: 'This card does nothing unless you also discard a card(your choice) from your hand.', language: LANGUAGES.ENGLISH },
        [`${TIME_MACHINE_V5}`]: { type: TIME_MACHINE, id: TIME_MACHINE_V5, title: 'Time car V5', requires: 'locomotion', description: 'This card does nothing unless you also have an overpowered locomotive on the table', language: LANGUAGES.ENGLISH },
        [`${TIME_MACHINE_V6}`]: { type: TIME_MACHINE, id: TIME_MACHINE_V6, title: 'Time car V6', subtitle: 'fully-equipped', description: 'play an extra card after you play this card.', language: LANGUAGES.ENGLISH },

        [`${DOUBLE_BACK_A3}`]: { type: DOUBLE_BACK, id: DOUBLE_BACK_A3, firstAction: 'First, flip the A-3 linchpin as you wish', secondAction: 'Second, if you have the METAL PIE PAN on the table in front of you, then you may discard it to flip any other linchpin.', language: LANGUAGES.ENGLISH },

        [`${OVERLOCOMOTIVE}`]: { type: ITEM, id: OVERLOCOMOTIVE, title: 'Overpowered locomotive', description: 'Discard this after using to activate the V5 time car', language: LANGUAGES.ENGLISH },
        [`${TOMORROW_NEWSPAPER}`]: { type: ITEM, id: TOMORROW_NEWSPAPER, title: 'Tomorrow\'s newspaper', description: 'If you have this on the table, you may discard it at any time to cancel another player\'s card', language: LANGUAGES.ENGLISH },
        [`${FAX_FUTURE}`]: { type: ITEM, id: FAX_FUTURE, title: 'Fax from the future', description: 'If you have this on the table, you may discard it at any time to cancel another player\'s card', language: LANGUAGES.ENGLISH },
        [`${LIGHTNING_PREDICTION}`]: { type: ITEM, id: LIGHTNING_PREDICTION, title: 'Lightning prediction', note: 'Discard this after using to activate the V2 time car', description: 'If you have this on the table, you may discard it, as a free play, to make all users give you a card.', language: LANGUAGES.ENGLISH },
        [`${PELLET_PLUTONIUM}`]: { type: ITEM, id: PELLET_PLUTONIUM, title: 'Pellet of plutonium', description: 'Discard this after using to activate the V1 time car', language: LANGUAGES.ENGLISH },
        [`${SPORTS_ALMANAC}`]: { type: ITEM, id: SPORTS_ALMANAC, title: 'Gray\'s sports almanac', description: 'If you have this on the table, only you may change History at timeline event B-2', language: LANGUAGES.ENGLISH },
        [`${DUST_JACKET_SPORTS_ALMANAC}`]: { type: ITEM, id: DUST_JACKET_SPORTS_ALMANAC, title: 'The dust jacket from Gray\'s sports almanac', description: 'If you have this on the table, you may discard it during your turn to steal the actual almanac.', language: LANGUAGES.ENGLISH },
        [`${MR_FUSION}`]: { type: ITEM, id: MR_FUSION, title: 'Mr. Fusion', description: 'Once per turn, if you have this on the table, you may discard any other item you have on the table and draw 2 cards.', language: LANGUAGES.ENGLISH },
        [`${EMERGENCY_CASH}`]: { type: ITEM, id: EMERGENCY_CASH, title: 'Emergency cash', description: 'If you have this on the table, you can substitute it for the item listed on any Doubleback.', language: LANGUAGES.ENGLISH },
        [`${CASE_OF_PLUTONIUM}`]: { type: ITEM, id: CASE_OF_PLUTONIUM, title: 'Case of plutonium', description: 'After using this to activate the V1 Time car, put the car back in your hand and keep this on the table.', language: LANGUAGES.ENGLISH },
        [`${TELEGRAM}`]: { type: ITEM, id: TELEGRAM, title: 'Telegram', subtitle: 'From a future friend trapped in the past', description: 'If you have this on the table, you may discard it at any time to cancel another player\'s card.', language: LANGUAGES.ENGLISH },
        [`${PIZZA_HYDRATOR}`]: { type: ITEM, id: PIZZA_HYDRATOR, title: 'Pizza Hydrator', description: 'If you had this on the table during your previous turn, you may discard it, instead of playing a card, to draw 5 cards.', language: LANGUAGES.ENGLISH },

    },

    //Spanish Cards
    [`${LANGUAGES.SPANISH}`]: {
        [`${REWIND}`]: { type: POWER_ACTION, id: REWIND, title: 'Rebobinar', description: 'Toma cualquier carta(que no sea power action) del pozo de descarte y juegala inmediatamente.', note: 'El pozo de descarte puede revisarse en cualquier momento', language: LANGUAGES.SPANISH },
        [`${ENGINE_TROUBLE}`]: { type: POWER_ACTION, id: ENGINE_TROUBLE, title: 'Problemas de motor', description: 'Juégala fuera de tu turno cuando alguien juegue una máquina del tiempo. La jugada entera se cancela, su turno finaliza y la maquina del tiempo vuelve a su mano.', language: LANGUAGES.SPANISH },
        [`${LOOK_OUT_FOR_THAT_MANURE}`]: { type: POWER_ACTION, id: LOOK_OUT_FOR_THAT_MANURE, title: 'Cuidado con ese camión lleno de estiércol!', description: 'Juégala fuera de tu turno justo cuando alguien esté por agarrar carta para comenzar su turno. El turno de ese jugador se cancela.', language: LANGUAGES.SPANISH },
        [`${MEMO_FROM_YOUR_FUTURE_YOURSELF}`]: { type: POWER_ACTION, id: MEMO_FROM_YOUR_FUTURE_YOURSELF, title: 'Nota de tu futuro vos', description: 'Juégala en cualquier momento para cancelar otra carta que se esté jugando. Descarta dicha carta y sigue con la próxima acción del juego.', language: LANGUAGES.SPANISH },
        [`${LUCKY_DAY}`]: { type: POWER_ACTION, id: LUCKY_DAY, title: 'Es tu día de suerte', description: 'Agarra 3 cartas, ponelas en tu mano y luego juega otra carta.', language: LANGUAGES.SPANISH },
        [`${QUICK_TRIP_INTO_THE_FUTURE}`]: { type: POWER_ACTION, id: QUICK_TRIP_INTO_THE_FUTURE, title: 'Viaje corto al futuro', description: 'Mira la pila de toma de cartas, elige una(que no sea Power action) y juégala inmediatamente.', note: 'Vuelve a mezclar el mazo luego, sin agregar las del pozo de descarte.', language: LANGUAGES.SPANISH },
        [`${SCIENCE_EXPERIMENT}`]: { type: POWER_ACTION, id: SCIENCE_EXPERIMENT, connector: 'o', title: 'Es un experimento científico', description: 'Si alguien tiene la locomotora en la mesa, róbala e inmediatamente juega otra carta.', note: 'Juegala fuera de tu turno cuando alguien juegue el tren-máquina del tiempo. La jugada extra se cancela y el tren va a tu mano.', language: LANGUAGES.ENGLISH },
        [`${YOU_STEAL_MY_STUFF}`]: { type: POWER_ACTION, id: YOU_STEAL_MY_STUFF, title: 'A mi me robás?', description: 'Juégala fuera de tu turno cuando alguien use la action card \'tan crédulo\' para robarte un item. Te quedas con el item, mientras que él debe descartarse 2 cartas a elección de su mano.', language: LANGUAGES.SPANISH },

        //ACTION Cards
        [`${GULLIBLE_MCFLY}`]: { type: ACTION, id: GULLIBLE_MCFLY, title: 'No seas tan crédulo Mcfly!', description: 'Roba cualquier item que otro jugador tenga en la mesa y ponlo enfrente tuyo.', language: LANGUAGES.SPANISH },
        [`${SLEEP_INDUCING_GENERATOR}`]: { type: ACTION, id: SLEEP_INDUCING_GENERATOR, title: 'Es un inductor de sueño generador de ritmo alfa!', description: 'Todos los jugadores excepto vos deben quedarse con 3 cartas en su mano, descartando el resto.', language: LANGUAGES.SPANISH },
        [`${TRADE_HANDS}`]: { type: ACTION, id: TRADE_HANDS, title: 'Intercambia tu mano', description: 'Intercambia tu mano entera de cartas con la mano de otro jugador(sin incluir la ID card).', language: LANGUAGES.SPANISH },
        [`${SAVE_CLOCK_TOWER}`]: { type: ACTION, id: SAVE_CLOCK_TOWER, title: 'Salven la torre del reloj!', description: 'Todos los jugadores deben elegir una carta de su mano y dártela.', language: LANGUAGES.SPANISH },
        [`${TIME_VORTEX}`]: { type: ACTION, id: TIME_VORTEX, title: 'Vórtice de tiempo' , description: 'Tomá las cartas de las manos de todos los jugadores(excepto las ID cards), mezclalas y repartilas de a 1, empezando por vos.', language: LANGUAGES.SPANISH },
        [`${HITCH_RIDE}`]: { type: ACTION, id: HITCH_RIDE, title: 'Consigues un viaje', description: 'Si el jugador anterior cambio la línea de tiempo durante su turno, juega esta carta para voltear cualquier linchpin.', language: LANGUAGES.SPANISH },
        [`${DISCONTINUITY}`]: { type: ACTION, id: DISCONTINUITY, title: 'Discontinuidad', description: 'Todos los jugadores pasan su mano al jugador de al lado. Tu decides si las cartas van hacia la izquierda o derecha.', note: 'No pases tu ID card',language: LANGUAGES.SPANISH },
        [`${NOT_YOURSELF_TODAY}`]: { type: ACTION, id: NOT_YOURSELF_TODAY, title: 'No eres tu mismo hoy', description: 'Descarta tu ID card y agarra una nueva, o fuerza a otro jugador a hacer esto.', language: LANGUAGES.SPANISH },
        [`${SHOPPING_SPREE}`]: { type: ACTION, id: SHOPPING_SPREE, title: 'Compra compulsiva en un lugar nostálgico.', description: 'Inmediatamente juega 3 items de tu mano.', note: 'Si tenés menos de 3 items en tu mano, jugá tantos como puedas.', language: LANGUAGES.SPANISH },
        [`${ERASED_FROM_EXISTENCE}`]: { type: ACTION, id: ERASED_FROM_EXISTENCE, title: 'Ha dejado de existir', description: 'Descarta cualquier item que alguien tenga en la mesa enfrente suyo.', language: LANGUAGES.SPANISH },
        [`${FADING_AWAY}`]: { type: ACTION, id: FADING_AWAY, title: 'Te estás desvaneciendo', description: 'Un oponente de tu elección debe descartar un item que tenga en la mesa y una carta de su mano.', note: 'Él elige el item; la carta de la mano se elige al azar.' ,language: LANGUAGES.SPANISH },


        [`${TIME_MACHINE_V1}`]: { type: TIME_MACHINE, id: TIME_MACHINE_V1, title: 'Delorean V1', requires: 'plutonio', description: 'Esta carta no hace nada a menos que también tengas alguna fuente de plutonio en la mesa.', language: LANGUAGES.SPANISH },
        [`${TIME_MACHINE_V2}`]: { type: TIME_MACHINE, id: TIME_MACHINE_V2, title: 'Delorean V2', requires: 'un rayo', description: 'Esta carta no hace nada a menos que también tengas una predicción de un rayo en la mesa.', language: LANGUAGES.SPANISH },
        [`${TIME_MACHINE_V3}`]: { type: TIME_MACHINE, id: TIME_MACHINE_V3, title: 'Delorean V3', subtitle: 'totalmente equipado', description: 'toma una carta extra luego de jugar esta carta.', language: LANGUAGES.SPANISH },
        [`${TIME_MACHINE_V4}`]: { type: TIME_MACHINE, id: TIME_MACHINE_V4, title: 'Delorean V4', subtitle: 'viejo y malhumorado', description: 'Esta carta no hace nada a menos que también descartes una carta de tu mano(tu la eliges).', language: LANGUAGES.SPANISH },
        [`${TIME_MACHINE_V5}`]: { type: TIME_MACHINE, id: TIME_MACHINE_V5, title: 'Delorean V5', requires: 'la locomotora', description: 'Esta carta no hace nada a menos que también tengas una locomotora en la mesa.', language: LANGUAGES.SPANISH },
        [`${TIME_MACHINE_V6}`]: { type: TIME_MACHINE, id: TIME_MACHINE_V6, title: 'Tren máquina del tiempo', subtitle: 'totalmente equipado', description: 'juega una carta extra luego de jugar esta carta.', language: LANGUAGES.SPANISH },

        [`${DOUBLE_BACK_A3}`]: { type: DOUBLE_BACK, id: DOUBLE_BACK_A3, firstAction: 'Primero, voltea el linchpin A-3 como quieras', secondAction: 'Luego, si tenes el item METAL PIE PAN en la mesa enfrente tuyo, podrías descartarlo para voltear cualquier otro linchpin.', language: LANGUAGES.SPANISH },

        [`${OVERLOCOMOTIVE}`]: { type: ITEM, id: OVERLOCOMOTIVE, title: 'Locomotora', description: 'Descartala luego de usarla para activar el delorean V5', language: LANGUAGES.SPANISH },
        [`${TOMORROW_NEWSPAPER}`]: { type: ITEM, id: TOMORROW_NEWSPAPER, title: 'Diario de mañana', description: 'Si tenés esto en la mesa, podés descartarlo en cualquier momento para anular la carta de otro jugador.', language: LANGUAGES.SPANISH },
        [`${FAX_FUTURE}`]: { type: ITEM, id: FAX_FUTURE, title: 'Fax del futuro', description: 'Si tenés esto en la mesa, podés descartarlo en cualquier momento para cancelar la carta de otro jugador.', language: LANGUAGES.SPANISH },
        [`${LIGHTNING_PREDICTION}`]: { type: ITEM, id: LIGHTNING_PREDICTION, title: 'Predicción del rayo', note: 'Descartala luego de usarla para activar el delorean V2', description: 'Si tenés esto en la mesa, podés descartarlo, como jugada gratis, para hacer que todos los jugadores te den una carta.', language: LANGUAGES.SPANISH },
        [`${PELLET_PLUTONIUM}`]: { type: ITEM, id: PELLET_PLUTONIUM, title: 'Tubo de plutonio', description: 'Descartala luego de usarla para activar el delorean V1', language: LANGUAGES.SPANISH },
        [`${SPORTS_ALMANAC}`]: { type: ITEM, id: SPORTS_ALMANAC, title: 'Almanaque de deportes', description: 'Si tienes esto en la mesa, solo tu puedes cambiar la linea de tiempo del evento B-2', language: LANGUAGES.SPANISH },
        [`${DUST_JACKET_SPORTS_ALMANAC}`]: { type: ITEM, id: DUST_JACKET_SPORTS_ALMANAC, title: 'Cubierta del almanaque de deportes', description: 'Si tenés esto en la mesa, podés descartarlo durante tu turno para robar el verdadero almanaque.', language: LANGUAGES.SPANISH },
        [`${MR_FUSION}`]: { type: ITEM, id: MR_FUSION, title: 'Sr. Fusión', description: 'Una vez por turno, si tenés esto en la mesa, podés descartar otro item que tengas en la mesa y tomar 2 cartas del mazo.', language: LANGUAGES.SPANISH },
        [`${EMERGENCY_CASH}`]: { type: ITEM, id: EMERGENCY_CASH, title: 'Dinero de emergencia', description: 'Si tenés esto en la mesa, podés usarlo para substituir cualquier item requerido en cualquier doubleback.', language: LANGUAGES.SPANISH },
        [`${CASE_OF_PLUTONIUM}`]: { type: ITEM, id: CASE_OF_PLUTONIUM, title: 'Caja de plutonio', description: 'Después de usarlo para activar el delorean V1, guarda el delorean en tu mano y deja este item en la mesa.', language: LANGUAGES.SPANISH },
        [`${TELEGRAM}`]: { type: ITEM, id: TELEGRAM, title: 'Telegrama', subtitle: 'De un amigo del futuro atrapado en el pasado.', description: 'Si tenés esto en la mesa, podés descartarlo en cualquier momento para cancelar la carta de otro jugador.', language: LANGUAGES.SPANISH },
        [`${PIZZA_HYDRATOR}`]: { type: ITEM, id: PIZZA_HYDRATOR, title: 'Hidratador de pizza', description: 'si tuviste esta carta en la mesa durante el turno anterior, podrías descartarla, en lugar de jugar una carta, para tomar 5 cartas.', language: LANGUAGES.SPANISH }

    }

};

export const englishGameCards = () => values(GAME_CARDS[LANGUAGES.ENGLISH]);
export const spanishGameCards = () => values(GAME_CARDS[LANGUAGES.SPANISH]);
