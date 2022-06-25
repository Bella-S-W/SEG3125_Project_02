import React from 'react';
import {Chatbot} from 'react-chatbot-kit';
import logo from './logo.svg';
import './App.css';

import config from './confit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import './App.css';
function App(){
    return(
        <div className="App">
            <header className="App-header">
            <Chatbot config={config} MessageParser={MessageParser} ActionProvider={ActionProvider}/>
            </header>
        </div>
    );
}

export default App;