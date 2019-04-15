import React, { Component } from 'react';
import PowerAction from "./PowerAction";
import flagArgentina from './assets/flag-arg.png';
import flagUsa from './assets/flag-us.png';
import Language from "./Language";
import { LANGUAGES, LanguageContext } from './Languages';
import {GAME_CARDS} from "./GameCards";
import {REWIND} from "./GameCardContents";

class App extends Component {
  constructor(props) {
    super(props);
    this.changeLanguage = (language) => {
      this.setState( { language: language });
    };
    this.state = { language: LANGUAGES.ENGLISH, changeLanguage: this.changeLanguage };
    const card = { type: 'power-action', id: 'rewind', title: 'Rewind', description: 'Remove any card(other than a power action) from the discard pile and immediately play it.', note: 'Anyone may look at the discard pile at any time', language: LANGUAGES.ENGLISH };
    this.cardsByLanguage = {
        [`${LANGUAGES.ENGLISH}`]: [GAME_CARDS[LANGUAGES.ENGLISH][REWIND]],
        [`${LANGUAGES.SPANISH}`]: [GAME_CARDS[LANGUAGES.SPANISH][REWIND]],
    };
  }

  render() {
    const cards = this.cardsByLanguage[this.state.language];
    return (
        <LanguageContext.Provider value={this.state}>
            <div className="App">
                <header className={"navbar app-header"}>
                    <div className={'container'}>
                        <div className={'navbar-brand'}>
                            <div className={'navbar-item language-item'}><Language image={flagUsa} language={LANGUAGES.ENGLISH} /></div>
                            <div className={'navbar-item language-item'}><Language image={flagArgentina} language={LANGUAGES.SPANISH} /></div>
                        </div>
                    </div>
                </header>
                <div className={'header-cover'}></div>
                <div className={'container app-body'}>
                    <div className={'columns'}>
                        {
                            cards.map((card) => <div className={'column is-one-fifth-desktop is-one-quarter-tablet is-full-mobile'}>
                                <PowerAction card={card} />
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </LanguageContext.Provider>
    );
  }
}

export default App;
