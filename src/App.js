import React, { Component } from 'react';
import flagArgentina from './assets/flag-arg.png';
import flagUsa from './assets/flag-us.png';
import Language from "./Language";
import { LANGUAGES, LanguageContext } from './Languages';
import {englishGameCards, spanishGameCards} from "./GameCardDefinitions";
import {gameCardFor} from "./GameCards";
import {Column, Columns, Container, Navbar} from "tenpines-bulma-react";

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
      return <Column tabletColumnSize={'one-third'} desktopColumnSize={'one-quarter'} widescreenColumnSize={'one-quarter'} fullhdColumnSize={'one-fifth'} key={card.id}>
          <GameCard card={card}/>
      </Column>
  };

  render() {
    const cards = this.cardsByLanguage[this.state.language];
    const renderGameCard = this.renderGameCard;

    return (
        <LanguageContext.Provider value={this.state}>
            <div className="App">
                <Navbar className={"app-header"}>
                    <Container className={'flags-container'}>
                        <Navbar.Brand>
                            <Navbar.Item className={'language-item'}><Language image={flagUsa} language={LANGUAGES.ENGLISH} /></Navbar.Item>
                            <Navbar.Item className={'language-item'}><Language image={flagArgentina} language={LANGUAGES.SPANISH} /></Navbar.Item>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <div className={'header-cover'} />
                <Container className={'app-body'}>
                    <Columns multiline>
                        { cards.map(renderGameCard) }
                    </Columns>
                </Container>
            </div>
        </LanguageContext.Provider>
    );
  }
}

export default App;
