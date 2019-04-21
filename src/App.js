import React, { Component } from 'react';
import flagArgentina from './assets/flag-arg.png';
import flagUsa from './assets/flag-us.png';
import Language from "./Language";
import { LANGUAGES, LanguageContext } from './Languages';
import {englishGameCards, spanishGameCards} from "./GameCardDefinitions";
import {gameCardFor} from "./GameCards";

class App extends Component {
  constructor(props) {
    super(props);
    this.changeLanguage = (language) => {
      this.setState( { language: language });
    };
    this.state = { language: LANGUAGES.ENGLISH, changeLanguage: this.changeLanguage };
    this.cardsByLanguage = {
        [`${LANGUAGES.ENGLISH}`]: englishGameCards(),
        [`${LANGUAGES.SPANISH}`]: spanishGameCards(),
    };
  }

  renderGameCard = (card) => {
      const GameCard = gameCardFor(card);
      return <div className={'column is-one-third-tablet is-one-quarter-desktop is-one-quarter-widescreen is-one-fifth-fullhd'} key={card.id}>
          <GameCard card={card}/>
      </div>
  };

  render() {
    const cards = this.cardsByLanguage[this.state.language];
    const renderGameCard = this.renderGameCard;

    return (
        <LanguageContext.Provider value={this.state}>
            <div className="App">
                <header className={"navbar app-header"}>
                    <div className={'container flags-container'}>
                        <div className={'navbar-brand'}>
                            <div className={'navbar-item language-item'}><Language image={flagUsa} language={LANGUAGES.ENGLISH} /></div>
                            <div className={'navbar-item language-item'}><Language image={flagArgentina} language={LANGUAGES.SPANISH} /></div>
                        </div>
                    </div>
                </header>
                <div className={'header-cover'}></div>
                <div className={'container app-body'}>
                    <div className={'columns is-multiline'}>
                        { cards.map(renderGameCard) }
                    </div>
                </div>
            </div>
        </LanguageContext.Provider>
    );
  }
}

export default App;
