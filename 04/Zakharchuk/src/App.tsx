import React, {FormEvent, ChangeEvent, useState} from 'react';
import { Hotels } from "./components/Hotel/Hotels";
import { data } from "./components/data";
import { Header } from './components/Header/Header';
import { GlobalStyles } from './styles/stylesGlobal/global';


function App() {
  return <div className="my-app">
      <GlobalStyles />
      <Header />
      <Hotels hotels={data} title='Homes guests loves' />
    </div>
}

export default App;
