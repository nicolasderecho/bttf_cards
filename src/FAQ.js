import React from 'react';
import {EnglishFAQ} from "./EnglishFAQ";
import logo from './assets/cardgamelogo.png';

const FAQ = () => {
    return (
        <div className={'container'}>
            <div className={'faq-header columns'}>
                <div className={'column is-one-third'}>
                    <figure className="image is-128x128"><img src={logo} alt={'logo'} className={'faq-logo'}/></figure>
                </div>
                <h2 className={'title is-2 column faq-title'}>FAQ</h2>
            </div>
            <div className={'faq'}>
                {EnglishFAQ.map( (element) => <React.Fragment>
                    <div className={'question'}>{element.question}</div>
                    <div className={'answer'}>{element.answer}</div>
                </React.Fragment>)}
            </div>
        </div>
    );
};

export default FAQ;